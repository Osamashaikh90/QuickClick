const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  // const myData = await Product.find();  //return all data
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (featured) {
    queryObject.featured = featured;
  }
  //regex is used to search a word which a sub word of other word
  //like iphone is searched so it will conside iphone word present in iphone10
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  //Sorting by user input in addressbar
  //sort = name,company
  //sort = name -->ascending
  //sort = -name -->descending

  let apiData = Product.find(queryObject);
  if (sort) {
    let sortFix = sort.split(",").join(" "); //why? bcoz in sort funct we dont use ',' we use " ".
    apiData = apiData.sort(sortFix);
  }
  //! Filter based on selection
  //select = name,company
  if (select) {
    // let selectFix = select.replace(",", " ");
    //another way of replacing
    let selectFix = select.split(",").join(" ");

    apiData = apiData.select(selectFix);
  }

  //! Pagination
  let page = Number(req.query.page) || 1; //by default 1
  let limit = Number(req.query.limit) || 4; //by default 4
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const Products = await apiData;
  res.status(200).json({ Products, nbHits: Products.length });
};
const getAllProductsTesting = async (req, res) => {
  const Products = await Product.find(req.query); //return queried adata after using req.query
  res.status(200).json({ Products });
};

module.exports = { getAllProducts, getAllProductsTesting };
