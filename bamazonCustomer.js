var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var table = new Table({ head: ["id", "Product Name", "Department", "Price", "Quantity"]});

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  tableView()
});

function tableView(){
    connection.query("SELECT * FROM products",function(err, res){
        if (err) throw err;
        for(i = 0;i<res.length;i++){
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
        }
        console.log(table.toString());
        customer();
    })
};

function customer(){
    inquirer.prompt([
    {
        name: "order",
        type: "input",
        message: "Please specify the item_id of the product you would like to order."
    },
    {
        name: "quantity",
        type: "input",
        message: "How many would you like to order?"
    }]).then(function(answer){
        connection.query("SELECT * FROM products WHERE ?", {item_id: answer.order}, function(err,res){
            if (err) throw err;
            if(answer.quantity <= res[0].stock_quantity){
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity:- answer.quantity
                        },
                        {
                            item_id: answer.order
                        }
                    ]
                )
                console.log("Order successful. Your total is " + res[0].price*answer.quantity)
            }
            else{
                console.log("YOU MUST CONSTRUCT ADDITIONAL PYLONS")
            }
        })
    })
}