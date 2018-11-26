const Product = require('../model/products');

exports.postAddProduct = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const sku = req.body.sku;
  const price = req.body.price;
  const createdAt = req.body.createdAt;
  const product = new Product({
    id: id,
    name: name,
    sku: sku,
    price: price,
    createdAt: createdAt    
  });
  product
    .save()
    .then(result => {
      console.log('Created Product');
      res.redirect('/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.id;
  const updatedName = req.body.name;
  const updatedPrice = req.body.price;
  const updatedSku = req.body.sku;
  const updatedCreatedAt = req.body.createdAt;

  Product.findById(prodId)
    .then(product => {
      product.name = updatedName;
      product.price = updatedPrice;
      product.createdAt = updatedCreatedAt;
      product.sku = updatedSku;
      return product.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.render('/products', {
        prods: products,
        pageTitle: 'Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.id;
  Product.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/products');
    })
    .catch(err => console.log(err));
};
