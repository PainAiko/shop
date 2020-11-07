const fs = require('fs');
const path = require('path');
const _path = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);
getProductsFromFile =(callback) => {
    fs.readFile(_path, ( err, fileContent) => {
        if(err) {
         callback([]);
        }
       else{
           callback(JSON.parse(fileContent));
       } 
    });
};
module.exports = class Product {
    constructor(_title) {
        this.title = _title;
    }

    save() { 
       getProductsFromFile(products => {
            products.push(this);
            fs.writeFileSync(_path, JSON.stringify(products));
       });
    }

    static fetchAll(callback) {
       getProductsFromFile(callback);
    }
}