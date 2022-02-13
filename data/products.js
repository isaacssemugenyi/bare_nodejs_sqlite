const PRODUCT_CREATION_QUERY = `
CREATE TABLE IF NOT EXISTS products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    price INT NOT NULL
)`

const FIND_ALL_SQL = `SELECT * FROM products`;

const FIND_BY_ID = `SELECT * FROM products WHERE id  = ?`;

const CREATE_NEW_PRODUCT = `INSERT INTO products(name, description, price) VALUES(?, ?, ?)`;

const UPDATE_PRODUCT = `UPDATE products set name = COALESCE(?,name), description = COALESCE(?,description), price = COALESCE(?,price) WHERE id = ?`;

const DELETE_PRODUCT = `DELETE FROM products WHERE id = ?`;

module.exports = {
    PRODUCT_CREATION_QUERY,
    FIND_ALL_SQL,
    FIND_BY_ID,
    CREATE_NEW_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
}