import * as readlineSync from 'readline-sync';

class Furniture {
    name: string;
    price: number;
    material: string;
    condition: string;
    category: string;
    manufacturer: string;

    constructor(name: string, price: number, material: string, condition: string, category: string, manufacturer: string) {
        this.name = name;
        this.price = price;
        this.material = material;
        this.condition = condition;
        this.category = category;
        this.manufacturer = manufacturer;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: $${this.price}`);
        console.log(`Material: ${this.material}`);
        console.log(`Condition: ${this.condition}`);
        console.log(`Manufacturer: ${this.manufacturer}`);
    }
}

class SalesPerson {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sellItem(item: Furniture, customer: string) {
        console.log(`${this.name} sold ${item.name} to ${customer} for $${item.price}`);
    }
}

class SalesManagementSystem {
    salesPeople: SalesPerson[];

    constructor() {
        this.salesPeople = [];
    }

    addSalesPerson(salesPerson: SalesPerson) {
        this.salesPeople.push(salesPerson);
    }

    makeSale(item: Furniture, customer: string, salesPersonIndex: number) {
        if (salesPersonIndex >= 0 && salesPersonIndex < this.salesPeople.length) {
            this.salesPeople[salesPersonIndex].sellItem(item, customer);
        } else {
            console.log("Invalid sales person index.");
        }
    }
}
const salesPerson1 = new SalesPerson("John");
const salesPerson2 = new SalesPerson("Alice");
const salesManagementSystem = new SalesManagementSystem();
salesManagementSystem.addSalesPerson(salesPerson1);
salesManagementSystem.addSalesPerson(salesPerson2);
const furnitureName = readlineSync.question("Enter the name of the furniture: ");
const category = readlineSync.question("Enter the category of the furniture: ");
const priceStr = readlineSync.question("Enter the price of the furniture: ");
const price = parseFloat(priceStr.replace('$', ''));
const material = readlineSync.question("Enter the material of the furniture: ");
const condition = readlineSync.question("Enter the condition of the furniture: ");
const manufacturer = readlineSync.question("Enter the manufacturer of the furniture: ");
const customer = readlineSync.question("Enter the customer's name: ");
const furniture = new Furniture(furnitureName, price, material, condition, category, manufacturer);
salesManagementSystem.makeSale(furniture, customer, 0);
furniture.displayDetails();
