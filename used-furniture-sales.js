"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Furniture = /** @class */ (function () {
    function Furniture(name, price, material, condition, category, manufacturer) {
        this.name = name;
        this.price = price;
        this.material = material;
        this.condition = condition;
        this.category = category;
        this.manufacturer = manufacturer;
    }
    Furniture.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("Category: ".concat(this.category));
        console.log("Price: $".concat(this.price));
        console.log("Material: ".concat(this.material));
        console.log("Condition: ".concat(this.condition));
        console.log("Manufacturer: ".concat(this.manufacturer));
    };
    return Furniture;
}());
var SalesPerson = /** @class */ (function () {
    function SalesPerson(name) {
        this.name = name;
    }
    SalesPerson.prototype.sellItem = function (item, customer) {
        console.log("".concat(this.name, " sold ").concat(item.name, " to ").concat(customer, " for $").concat(item.price));
    };
    return SalesPerson;
}());
var SalesManagementSystem = /** @class */ (function () {
    function SalesManagementSystem() {
        this.salesPeople = [];
    }
    SalesManagementSystem.prototype.addSalesPerson = function (salesPerson) {
        this.salesPeople.push(salesPerson);
    };
    SalesManagementSystem.prototype.makeSale = function (item, customer, salesPersonIndex) {
        if (salesPersonIndex >= 0 && salesPersonIndex < this.salesPeople.length) {
            this.salesPeople[salesPersonIndex].sellItem(item, customer);
        }
        else {
            console.log("Invalid sales person index.");
        }
    };
    return SalesManagementSystem;
}());
// Example usage:
// Create salespersons
var salesPerson1 = new SalesPerson("John");
var salesPerson2 = new SalesPerson("Alice");
// Create sales management system
var salesManagementSystem = new SalesManagementSystem();
salesManagementSystem.addSalesPerson(salesPerson1);
salesManagementSystem.addSalesPerson(salesPerson2);
// Get input for furniture items
var furnitureName = readlineSync.question("Enter the name of the furniture: ");
var category = readlineSync.question("Enter the category of the furniture: ");
var priceStr = readlineSync.question("Enter the price of the furniture: ");
var price = parseFloat(priceStr.replace('$', '')); // Remove dollar sign and parse
var material = readlineSync.question("Enter the material of the furniture: ");
var condition = readlineSync.question("Enter the condition of the furniture: ");
var manufacturer = readlineSync.question("Enter the manufacturer of the furniture: ");
// Get input for customer
var customer = readlineSync.question("Enter the customer's name: ");
// Create furniture item
var furniture = new Furniture(furnitureName, price, material, condition, category, manufacturer);
// Make sales
salesManagementSystem.makeSale(furniture, customer, 0); // Assuming the first salesperson is making the sale
// Display details of furniture item
furniture.displayDetails();
