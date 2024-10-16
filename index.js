const express = require('express');
const product = require('./routes/productCategories');
const app = express();
const cors = require('cors');

app.use(cors());
app.use("/",product);

const PORT = 5001;
const server = app.listen(PORT,()=>{
    console.log("App is running on the posrt - "+PORT);
})

