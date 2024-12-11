const express = require("express");
const mongoose = require("mongoose")
const dishes = require("./routes/dishesRoutes");
const user = require("./routes/userRoutes");
const orders = require("./routes/ordersRoutes");
const app = express();
const cors = require("cors");
const port = 5000;

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");



const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
    
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://chouhananupsinhshivaji:kAoqtON2J7diBYm8@swigato.mwfbk.mongodb.net/?retryWrites=true&w=majority&appName=Swigato"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });


// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/swigato');
//   console.log("Database Connected");
// }


// main().catch(err => console.log(err));


app.use("/api", dishes);
app.use("/api", user);
app.use("/api", orders);

app.use("/api-docs", swaggerUI.serve,swaggerUI.setup(openapiSpecification));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  
});

// http://localhost:3000/ -> Whenever someone does a GET request on this endpoint, send him/her "Hello World"

// Browser by default, considers a GET request
