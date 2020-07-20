const mongoose = require("mongoose"); //inclode mongoose in our page

//connection to mongodb
const db = mongoose
  .connect("mongodb://localhost:27017/books-finder", { useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(" Err when conecting To DataBase :( ", err);
  });

module.exports = db;
//schema about book info
// let booksSchema = mongoose.Schema({
//  title: { type: String },
//  author:[{
//     type:String,
// }],
//  dateOfPublication: { type: String },
//   img: { type: String }
// });
//
//
// let BooksModel = mongoose.model("books", booksSchema);
//
// module.exports.BooksModel = BooksModel;
