# BAMAZON
## Order something and BAM(azon)! Its yours

In this application there is a customer view and a manager view. In the customer view, a file titled bamazonCustomer.js, the customer is immediately presented with a beautified table showing the ID, basic product description, category/department, price, and available quantity of all the products. They are then asked what they would like to order, to be entered by product ID code in the left-most portion of the table. They are then asked how many they would like to order. If they choose an invalid ID, or a quantity that cannot be delivered (ie. more than available, something other than a positive integer, etc.) they will recieve an error message. If the customer makes a valid order they are told their total price for the order and the available quantity decreases correspondingly. 

[![Image from Gyazo](https://i.gyazo.com/970d8b6c915acd9cedfbb084616fd1c6.png)](https://gyazo.com/970d8b6c915acd9cedfbb084616fd1c6)

In the bamazonManager.js file or manager view, several commands are available:

 <ul>
 <li>View Products for Sale</li>
 <li>View Low Inventory</li>
 <li>Add to Inventory</li>
 <li>Add New Product</li>
 </ul>
 
 [![Image from Gyazo](https://i.gyazo.com/b61a160bb41c52aecbfcb09d402f48c0.png)](https://gyazo.com/b61a160bb41c52aecbfcb09d402f48c0)
 
 ### View Products for Sale
 
This command simply displays a beautified table of all products, product information, and their stock quantity levels.

[![Image from Gyazo](https://i.gyazo.com/057dd4daafc0d942383c9a12114de5cf.png)](https://gyazo.com/057dd4daafc0d942383c9a12114de5cf)

### View Low Inventory

This command will display a similar table as the previous command, but only populated with the products that have less than 5 remaining in inventory.

[![Image from Gyazo](https://i.gyazo.com/f0f338a470953ed5edb3f750b91667a7.png)](https://gyazo.com/f0f338a470953ed5edb3f750b91667a7)

### Add to Inventory

This command allows the manager to receive additional inventory to existing products. Once this has been initiated, the manager will be prompted for the item ID and the quantity to be added. The database will be updated and then a full inventory list will be displayed, showing the updated status of all items.

[![Image from Gyazo](https://i.gyazo.com/888ae2ba422aa13a61c72f2aa5012bc2.png)](https://gyazo.com/888ae2ba422aa13a61c72f2aa5012bc2)

### Add New Product

The final command allows the manager to receive an entirely new product into inventory. The manager will be prompted for product name/description, department, price, and starting quantity to be received. This item will then be added to the inventory and immediately be available for order by the customers. A full table is then displayed, showing the new product in the database along with everything else.

[![Image from Gyazo](https://i.gyazo.com/c18b5833e6da34bb6e1207a0927401de.png)](https://gyazo.com/c18b5833e6da34bb6e1207a0927401de)
