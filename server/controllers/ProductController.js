const db = require('../connection');

module.exports = {
    index(req, res) {
        db.query('SELECT * FROM products', (err, results) => {
            if (err) return res.sendStatus(500);
            return res.send({products: results});
        })
    },
    store(req, res) {
        db.query(`INSERT INTO products (title, description, price, quantity, sku, category_id) VALUES (?, ?, ?, ?, ?, ?)`,
        [req.body.product.title, req.body.product.description, req.body.product.price, req.body.product.quantity, req.body.product.sku, req.body.product.category_id],
        (err, result) => {
            console.log("result: " + JSON.stringify(result));
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM products`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ products: results });
            });
        })
    },
    update(req, res) {
        db.query (`UPDATE products SET title=?, description=?, price=?, quantity=?, sku=?, category_id=? WHERE product_id=?`,
        [req.body.product.title, req.body.product.description, req.body.product.price, req.body.product.quantity, req.body.product.sku, req.body.product.category_id, req.params.product], (err, result)=>{
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM products`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ products: results });
            });
        });
    },
    destroy(req, res) {
        db.query(`DELETE FROM products WHERE product_id=?`,
        [req.params.product], (err, result)=>{
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM products`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ products: results });
            });
        });
    }
};
