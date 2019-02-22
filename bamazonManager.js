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
  manager();
});

function tableView(){
    connection.query("SELECT * FROM products",function(err, res){
        if (err) throw err;
        for(i = 0;i<res.length;i++){
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
        }
        console.log(table.toString());
        
    })
};

function manager(){
    inquirer.prompt({
        name: "options",
        type: "list",
        message: "Select a function: ",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }).then(function(answer){
        switch(answer.options){
            case "View Products for Sale":
                tableView();
                break;
            case "View Low Inventory":
                lowInv();
                break;
            case "Add to Inventory":
                addInv();
                break;
            case "Add New Product":
                newProduct();
                break;
            default:
                console.log(answer);
        }
        
    })
}

function lowInv(){
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res){
        if(err) throw err;
        var lowInv = new Table({ head: ["id", "Product Name", "Department", "Price", "Quantity"]})
        
        for(i = 0;i<res.length;i++){
            lowInv.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
        }
        console.log(lowInv.toString());
    })
}

function addInv(){
    inquirer.prompt([
        {
        name: "inventory",
        type: "input",
        message: "What is the id of the product you would like to add inventory to?"
        },
        {
        name: "quantity",
        type: "input",
        message: "How many are you adding?"
        }
    ]).then(function(answer){
        connection.query("UPDATE products SET ? WHERE ?", [
            {stock_quantity: + answer.quantity},
            {item_id: answer.inventory}
        ])
        tableView();
    })
}

function newProduct(){
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Product name:"
        },
        {
            name: "department",
            type: "input",
            message: "Department:"
        },
        {
            name: "price",
            type: "input",
            message: "Price (default $0.00):"
        },
        {
            name: "quantity",
            type: "input",
            message: "Quantity (default 0):"
        }
    ]).then(function(answers){
        connection.query("INSERT INTO products SET ?", 
        {
        product_name: answers.name, 
        department_name: answers.department,
        price: parseFloat(answers.price),
        stock_quantity: parseInt(answers.quantity) 
        })
        tableView();
    })
}