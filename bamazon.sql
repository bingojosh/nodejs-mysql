DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(199) NOT NULL,
  department_name VARCHAR(199) NOT NULL,
  price float(10,2) default 0.99,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pants - small", "clothing", 10.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pants - medium", "clothing", 11.99, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pants - large", "clothing", 12.99, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pants - x-large", "clothing", 13.99, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pants - xx-large", "clothing", 14.99, 11);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shirt - small", "clothing", 10.99, 21);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shirt - medium", "clothing", 11.99, 14);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shirt - large", "clothing", 12.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shirt - x-large", "clothing", 13.99, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Shirt - xx-large", "clothing", 14.99, 9);

SELECT * FROM products;