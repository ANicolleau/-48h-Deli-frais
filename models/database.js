const sqlite3 = require('sqlite3')
const fs = require('fs')
const open = require('sqlite').open
const filename = "./database.db"

module.exports = {
    createDatabase(){
        open({
            filename: filename,
            driver: sqlite3.Database
        }).then(async (db) => {
            return Promise.all([
                database.run(await fs.readFileSync('sql_script/create/User.sql').toString()), 
                database.run(await fs.readFileSync('sql_script/create/Basket.sql').toString()), 
                database.run(await fs.readFileSync('sql_script/create/Contain.sql').toString()), 
                database.run(await fs.readFileSync('sql_script/create/Producer.sql').toString()), 
                database.run(await fs.readFileSync('sql_script/create/ProducerCategory.sql').toString()), 
                database.run(await fs.readFileSync('sql_script/create/Product.sql').toString()), 
                database.run(await fs.readFileSync('sql_script/create/ProductCategory.sql').toString()), 
            ])
        }).then(()=> console.log("database ready !"))
        .catch(error => console.log(error))
          
                  
    }
}