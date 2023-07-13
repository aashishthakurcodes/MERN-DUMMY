const fs = require("fs");
const jsonfile = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const data = jsonfile.carts;

exports.patchdata = (req, res) => {
  const id = +req.params.id; //for getting url id
  const productsIndex = data.findIndex((p) => p.id === id); //for getting product based on url id
  const previousArray = data[productsIndex];
  const filter = data.splice(productsIndex, 1, {
    ...previousArray,
    ...req.body,
  }); //Updated the data Array

  res.json(filter);
};

exports.deleteItem = (req, res) => {
  const id = +req.params.id; //for getting url id
  const productsIndex = data.findIndex((p) => p.id === id); //for getting product based on url id

  const previousArray = data[productsIndex];
  data.splice(productsIndex, 1); //Deleted the data Array

  res.json(previousArray);
};

exports.createUser = (req, res) => {
  // console.log(req.body);
  data.push(req.body);
  res.json(req.body);
};

exports.getData = (req, res) => {
  const id = +req.params.id;
  const products = data.find((p) => p.id === id);
  res.json(products);
};

exports.getall=(req,res)=>{
    res.json(data)
}
