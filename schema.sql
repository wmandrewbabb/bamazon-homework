CREATE DATABASE bamazon;
USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
PRIMARY KEY(itemID), 
itemID INTEGER(5) AUTO_INCREMENT NOT NULL, 
product_name VARCHAR(50), 
department_name VARCHAR(100), 
item_cost FLOAT(10),
stock_quantity INTEGER(5)
);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Grimlock Action Figure', 'Toys and Games', 19.99, 200);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('MTG 2019 Booster', 'Toys and Games', 3.95, 12000);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Army of Darkness Blu-Ray', 'Entertainment', 34.99, 7);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('YELLOW TEXT HATS', 'Clothing', 23.99, 40);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Carpenter Brut Live!', 'Entertainment', 14.99, 36);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Black Garlic Powder', 'Grocery', 5.95, 120);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Assorted Mustard Gift Set', 'Grocery', 26.95, 150);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Nintendo Switch', 'Toys and Games', 299.95, 90);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('Crying Geoffery the Giraffe Plush', 'Toys and Games', 20.18, 60);

INSERT INTO products (product_name, department_name, item_cost, stock_quantity)
VALUES ('HANGRY dishtowl', 'Kitchen & Dining', 19.99, 18);

SELECT * FROM products;
