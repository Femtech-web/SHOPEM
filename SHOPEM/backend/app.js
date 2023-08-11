require("dotenv").config();
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

const app = express();
const cors = require('cors');

app.use(cors(
  {
    origin: '*'
  }
));

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use(stripeRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


app.get('/success',  (req, res) => {
  res.sendFile(path.join(__dirname, '/success.html'));
});

app.post('/success',  (req, res) => {
  res.redirect('https://shopem-7029.onrender.com');
});

app.get('/cancel',  (req, res) => {

 res.sendFile(path.resolve(__dirname, 'cancel.html'));
});

app.post('/failure',  (req, res) => {
  res.redirect('https://shopem-7029.onrender.com');
});


// server
app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running")
})


