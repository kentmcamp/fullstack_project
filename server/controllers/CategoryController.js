
// Establish connection to db
const db = require('../connection');

module.exports = {
    index(req, res) {
        db.query('SELECT * FROM categories', (err, results) => {
            if (err) return res.sendStatus(500);
            return res.send({categories: results});
        })
    },
    store(req, res) {
        db.query(`INSERT INTO categories (name) VALUES (?)`,
        [req.body.category.name],
        (err, result) => {
            if (err) return res.sendStatus(500);
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ categories: results });
            });
        })
    },
    update(req, res) {
        db.query(`UPDATE categories SET name=? WHERE id=?`, [req.body.category.name, req.params.category], (err, result)=>{
            if (err) return res.sendStatus(500);
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ categories: results });
            });
        });
    },
    destroy(req, res) {
        db.query(`DELETE FROM categories WHERE id=?`, [req.params.category], (err, result)=>{
            if (err) return res.sendStatus(500);
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ categories: results });
            });
        });
    }
};
