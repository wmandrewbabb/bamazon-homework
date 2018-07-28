var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');
var colors = require('colors/safe');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'Cra1sins',
	database: 'bamazon'
});

//this is to prevent people from just randomly typing in strings

function validateNumber(offense) {
    var numberHolder = parseFloat(offense);
    var isValid = true;
    
    if (isNaN(numberHolder)) {
        isValid = false;
    }

    if (isValid) {
        return isValid;    
    }
    // return isValid || "Pick a number!";
}

function displayTable(res) {
	var table = new Table({
        head: ['Item ID', 'Product Name', 'Department', 'Cost', 'Stock'], 
        colWidths: [10, 65, 20, 8, 8]
	});
	for (var i = 0; i < res.length; i++) {
		table.push([res[i].itemID, res[i].product_name, res[i].department_name, res[i].item_cost, res[i].stock_quantity]);
	}
	console.log(table.toString());
}

var openWallet = function() {
	connection.query('SELECT * FROM products', function(err, res) {
		displayTable(res);
		var choiceArray = [];
		for (var i = 0; i < res.length; i++) {
			choiceArray.push(res[i].product_name);
		}
		inquirer.prompt([{
			name: 'item',
            type: 'input',
            validate: validateNumber,
			message: colors.warn('ID NUMBER OF THE ITEM YOU WANT TO PURCHASE:')
		},
		{
			name: 'quantity',
            type: 'input',
            validate: validateNumber,
			message: colors.warn('INPUT PURCHASE QUANTITY:')
		}]).then(function(answer) {

            var itemID = answer.item;

            var chosenItem = res[itemID-1];

            if (!chosenItem) {
                console.log(colors.error("ERROR NO SUCH NUMBER"));
                openWallet();
            } else {

            var newQuantity = chosenItem.stock_quantity - answer.quantity;
			if (newQuantity >= 0) {
				connection.query('UPDATE products SET ? WHERE itemID = ?', [{ stock_quantity: newQuantity }, itemID]);
				openWallet();
			} else {
				console.log(colors.error('There are not enough in stock for you to purchase that many.'));
				openWallet();
			}

            }
		})
	})
}

connection.connect(function(err) {
	if (err) throw err;
	console.log(colors.info('Connection ID: ' + connection.threadId));
	openWallet();
});