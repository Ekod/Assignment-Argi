const express = require("express");
const app = express();
const router = express.Router();
const allControllers = require('../controllers/allControllers');

router.post('/edit-product', allControllers.postEditProduct);

router.post('/delete-product', allControllers.postDeleteProduct);

router.post('/add-product', allControllers.postAddProduct);

router.get('/products', allControllers.getProducts);

app.listen(3000, _ => [console.log(`It's alive on port 3000`)]);


/*
    UPDATE a product

    DELETE a product

    CREATE a product

    READ all products  
*/