const mongoose = require('mongoose');

// Connection URL
const MONGO_URI = 'mongodb://localhost:27017/Week8';

// Connecting to MongoDB
mongoose
  .connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log(`Connected to ${MONGO_URI}`))
  .catch((err) => console.error(`Error occurred during connection: ${err}`));

// Define the schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0, // Optional validation to ensure age is non-negative
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // Optional: Limit gender values
  },
  Salary: {
    type: Number,
    min: 0, // Optional validation for non-negative salaries
  },
});

// Create a model named `Person` with the `personCollection`
const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Create multiple documents and insert them
const manypersons = [
  { name: 'Simon', age: 42, Gender: "Male", Salary: 3456 },
  { name: 'Neesha', age: 23, Gender: "Female", Salary: 1000 },
  { name: 'Mary', age: 27, Gender: "Female", Salary: 5402 },
  { name: 'Mike', age: 40, Gender: "Male", Salary: 4519 }
];

Person.insertMany(manypersons)
  .then(function() {
    console.log("Data inserted successfully!");
  })
  .catch(function(error) {
    console.log("Error during insertion: ", error);
  });

// Fetch all documents, limiting to 5 records
Person.find({})
  .limit(5)
  .then((docs) => {
    console.log("All records (limit 5):", docs);
  })
  .catch((error) => {
    console.log("Error fetching documents: ", error);
  });

// Fetch documents with filtering criteria: Gender = Female and age > 25
Person.find({ Gender: "Female", age: { $gt: 25 } })
  .then((docs) => {
    console.log("Filtered records (Female and age > 25):", docs);
  })
  .catch((error) => {
    console.log("Error fetching filtered documents: ", error);
  });

// Return the total number of documents in the collection
Person.countDocuments()
  .then((count) => {
    console.log("Total number of documents:", count);
  })
  .catch((error) => {
    console.log("Error counting documents: ", error);
  });

// Delete documents with specific criteria: Age < 30
Person.deleteMany({ age: { $lt: 30 } })
  .then((result) => {
    console.log("Documents deleted:", result);
  })
  .catch((error) => {
    console.log("Error deleting documents: ", error);
  });

// Update documents with criteria: Gender = Female, and set Salary to 5555
Person.updateMany({ Gender: "Female" }, { $set: { Salary: 5555 } })
  .then((result) => {
    console.log("Documents updated:", result);
  })
  .catch((error) => {
    console.log("Error updating documents: ", error);
  });
