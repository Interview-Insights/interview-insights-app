// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose.set("strictQuery", false);

// // v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
// // const myURI = ;

// // UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI; //|| myURI;

// // UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// // const URI = process.env.PG_URI || myURI;

// mongoose
//   .connect(URI, { dbName: "blog" })
//   .then(() => console.log("Connected to DB"))
//   .catch((err) => console.log("Error connecting to DB" + err));

// const Schema = mongoose.Schema;

// const entrySchema = new Schema({
//   content: { type: String, required: true },
//   created_at: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Entry", entrySchema); // <-- export your model



const { Pool } = require('pg')
const PG_URI = process.env

console.log(PG_URI)

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI =
  'postgres://pnwonacz:KUNszBzca5Xvp_l3PVilYg0HQXkFzloH@lallah.db.elephantsql.com/pnwonacz';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI

const pool = new Pool({
  connectionString: URI,
  // password: password,
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query➡️', text)
    return pool.query(text, params, callback)
  },
} // <-- export your model