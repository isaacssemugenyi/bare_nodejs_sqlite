const sqlite3 = require('sqlite3').verbose();
const {
    FIND_ALL_SQL,
    PRODUCT_CREATION_QUERY,
    FIND_BY_ID,
    CREATE_NEW_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} = require('../data/products')



let db = new sqlite3.Database('./data/product.db', (err) => {
    if (err) {
        console.error(err.message);
    }
});

db.serialize(() => {
    db.run(`${PRODUCT_CREATION_QUERY}`, (err) => {
        if (err) {
            throw err;
        }
    });
});

function findAll() {
    return new Promise((resolve, reject) => {
        db.all(`${FIND_ALL_SQL}`, [], (err, rows) => {
            if (err) { throw err }
            resolve(rows)
        })
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        db.get(`${FIND_BY_ID}`, [id], (err, row) => {
            if (err) return console.error(err.message)
            if (row) {
                return resolve(row)
            } else {
                return resolve({ message: `No product found with the id ${id}` })
            }
        });
    })
}

function create(product) {
    return new Promise((resolve, reject) => {
        const { name, description, price } = product
        db.run(`${CREATE_NEW_PRODUCT}`, [`${name}`, `${description}`, `${price}`],
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                return resolve({
                    id: this.lastID,
                    ...product
                })
        })
    })
}

function update(id, product){
    return new Promise((resolve, reject) => {
        const { name, description, price } = product
        db.run(`${UPDATE_PRODUCT}`,
            [name, description, price, id],
            function (err) {
                if (err){
                    return console.log(err.message);
                }
                return resolve({
                    id,
                    ...product
                })
        });
    })
}

function remove(id){
    return new Promise((resolve, reject) => {

        db.run(`${DELETE_PRODUCT}`,
            id, function (err) {
                if (err){
                    return console.log(err.message);
                }
                resolve()
        });
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}