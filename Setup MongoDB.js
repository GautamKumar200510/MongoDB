const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("MongoDB Connected Successfully");

    const db = client.db("Ecommerce");
    const collection = db.collection("product");

    const result = await collection.insertMany([
      {
        name: "Wireless Mouse",
        price: 799,
        category: "Electronics",
        stock: 120
      },
      {
        name: "Mechanical Keyboard",
        price: 2499,
        category: "Electronics",
        stock: 80
      },
      {
        name: "Gaming Laptop",
        price: 85999,
        category: "Computers",
        stock: 30
      }
    ]);

    console.log("Inserted Documents:", result.insertedCount);

    const contacts = db.collection("contacts");
    await contacts.insertMany([
      {
        name: "Alice",
        message: "Loved your website!",
        phone: "9876543210",
        createdAt: new Date()
      },
      {
        name: "Bob",
        message: "Do you have discounts on laptops?",
        phone: "9123456789",
        createdAt: new Date()
      },
      {
        name: "Carol",
        message: "I want to cancel my order.",
        phone: "9988776655",
        createdAt: new Date()
      }
    ]);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
