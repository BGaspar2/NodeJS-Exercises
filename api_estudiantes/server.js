const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https"), fs = require("fs");


const app = express();

const options = {
   
};

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


const db = require("./models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });



// simple route
app.get("/", (req, res) => {
    res.json({message: "Bienvenidos a mi API."});
});


//middleware
//app.use ((req,res,next)=>{
    //validaFechasEvaluacion(req, res, next);
    //next();
//});

require("./routes/producto.routes")(app);


// set port, listen for requests
const PORT = 8080;

https.createServer(options, app).listen(3000);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

