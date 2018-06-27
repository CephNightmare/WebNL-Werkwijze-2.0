const API = {
    products: {}
};

API.products.fetchProductsFromDatabase = function(value) {
    return new Promise((resolve, reject) => {
        resolve("it worked");
    });
};
