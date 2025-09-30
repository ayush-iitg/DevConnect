//ye apna main file hai yahi se sab start hoga ;
// node module folder me saari dependancies hai express ka;
// jaise iss project ka dependancy hai express waise hi express ka dependancies hai node modules folder me ;
const express = require("express"); // expess ko import kiye
const app = express(); // app express ko call kr rha hai ;
// abb jo server create kiye hai uss se response bhejne ke liye app.use krenege.
// agar ham app.use kr rhe hai to particular url ke liye saare HTTP methods ko wahi handle krega , chahe wo get,post,delete etc. me se kuch bhi ho ;
// app.get,app.post,app.delete specific use ke liye hai ;
// since node js me odering matters isiliye agar app.use ko upar kr denge to app.get,app.post sab ka ek hi response aayega jo app.use ka hai ;
// /m/ ka matlab hai ki url me kahi bhi agar m hai to apple iphone is good show hoga ;
app.get(/m/, (req, res) => {
  res.send("apple iphone is good");
});
app.get("/product", (req, res) => {
  res.send("my name is ayu");
});
app.post("/product", (req, res) => {
  res.send("my name is ayu_ post request");
});
app.use("/product", (req, res) => {
  // ye hai ki localhost:7777/product krne pr ye reponse aayega and /user krne pr  neeche wala response aayega ;
  res.send("hello product page ");
});
app.use("/users", (req, res) => {
  res.send("hello from ayush ggg");
});
// routing me starting se route matching hoga  starting me hi agar "/" hai then aage kuch bhi ho "/" ka hi response sabme same aayega ;
// means order of different rounting matters
app.listen(7777, () => {
  console.log("hello ayush raj"); // ye hai ki server start hone ke baad kya print hoga terminal me ;
}); // apna jo server hai usko start krne ke liye kahi pe listen krana hoga ;
//abs
