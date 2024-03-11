// Using import syntax with CommonJS modules
import { MongoClient } from 'mongodb';

// Rest of your code remains the same
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});