
//ye apna main file hai yahi se sab start hoga ;
// node module folder me saari dependancies hai express ka;
// jaise iss project ka dependancy hai express waise hi express ka dependancies hai node modules folder me ;
const express= require("express");// expess ko import kiye 
const app= express(); // app express ko call kr rha hai ;
// abb jo server create kiye hai uss se response bhejne ke liye app.use krenege.
app.use("/product",(req,res)=>{ // ye hai ki localhost:7777/product krne pr ye reponse aayega and /user krne pr  neeche wala response aayega ;
 res.send("hello product page ");
})
app.use("/users",(req,res)=>{
 res.send("hello from ayush ggg");
})
app.listen(7777,()=>{
  console.log("hello ayush raj");// ye hai ki server start hone ke baad kya print hoga terminal me ;
}) // apna jo server hai usko start krne ke liye kahi pe listen krana hoga ;
//abs
