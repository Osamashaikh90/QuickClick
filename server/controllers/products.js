const upload = require("../middleware/multer");
const Product = require("../models/product");
const getAllProducts = async (req, res) => {
  try {
    const myData = await Product.find(); //return all data
    res.json(myData);
  } catch (error) {
    console.log(error);
  }
};

const Create = async (req, res) => {
  const {
    name,
    company,
    price,
    colors,
    description,
    category,
    featured,
    rating,
  } = req.body;
  try {
    if (req.files) {
      const imageurl = req.files["image"][0].path;
      const upload = new Product({
        name: name,
        company: company,
        price: price,
        colors: colors,
        image: imageurl,
        description: description,
        stock: stock,
        category: category,
        featured: featured,
        rating: rating,
      });
      const uploadresult = await upload.save();
      res.json(uploadresult);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getSingleProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const getProductById = await Product.findById(id);
    res.json(getProductById);
  } catch (err) {
    res.json(err);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json(deletedProduct);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getQuery = async (req, res) => {
  try {
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
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getAllProducts,
  Create,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  getQuery,
};
