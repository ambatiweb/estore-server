const express = require('express');
const product = express.Router();
const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "estore",
    multipleStatements: true
})

product.get("/productCategories",(req,res)=>{
    let categorydata;

            pool.query("select * from categories",(error,categories)=>{
                if(error){
                    categorydata = error;
                    res.status(500).send(categorydata);
                }else{
                    categorydata = categories;
                    res.status(200).send(categorydata);
                }
                
            })
 })

 product.get("/getProducts", (req,res)=>{
    let productData;

    pool.query("select * from products",(error,rows)=>{
        if(error){
            res.status(500).send(error);
        }else {
            productData = rows;
            res.status(200).send(productData);
        }
    })
 })

module.exports = product;

