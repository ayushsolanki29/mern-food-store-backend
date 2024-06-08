# Food Store / Backend
- a plateform for purchase food items with cool UI and Faster response. A webapp is totally work with backend apis. and secured payment gatways. and more details for his order.

## Tech Stacks
- React 
- Mongo DB
- Express
- Node JS
- stripe
- other Tools

## Featuers
### ALL API IS FOR create/ update/ read/ delete
- /user 
- /product
- /category
- /payment
- /order
- /cart
- etc

# Setup Backend

 - ``npm init``
 - ``npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon``
 - add Script in `packge.json`
    - `"server" : "nodemon server.js"`
-add in `packge.json` `"type": "module"`
- setup folders
- add code in server.js
- add config/db.js for database
- add model for database
- add controllers 
- add routes