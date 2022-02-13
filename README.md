### Rest API built with pure nodejs modules

* On main branch, a products.json is used to store products data, based on Brad pure nodejs youtube video

* On db branch, an sqlite database is used to store data in product.db inside the data folder

[Example REST API with Expressjs](https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/)

### Routes to hit

| METHOD | ROUTE | RESPONSE |
| :-- | :-------:     | :-----      |
| GET | /api/products | Returns All Products |
| GET | /api/products/:id | Returns A Single Product |
| POST | /api/products | Returns Created Product |
| PUT | /api/products/:id | Returns an Updated Product |
| DELETE | /api/products/:id | Returns a successful Delete message |

#### Steps to run app
1. Clone project
2. Checkout to main branch
3. Run ```npm install``` to install nodemon and uuid modules
4. Run ```npm run dev``` and project will be accessible in postman or browser on 5000
5. Post body 
```json
{
    "title":"first title",
    "description":"First description",
    "price": 150
}
```

**If interested to run project with sqlite**
* Checkout to db branch
* Run ```npm install``` to install sqlite3
* Run ```npm run dev``` and project will be accessible in postman or browser on 5000
* 
```json
{
    "name":"first name",
    "description":"First description",
    "price": 150
}
```