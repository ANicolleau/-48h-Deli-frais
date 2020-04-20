const sqlite3 = require('sqlite3')
const fs = require('fs')
const open = require('sqlite').open
const filename = "./database.sqlite"

module.exports = {
    createDatabase(){
        open({
            filename: filename,
            driver: sqlite3.Database
        }).then(async (db) => {
            return Promise.all([
                db.run(await fs.readFileSync('sql_script/create/User.sql').toString()),
                db.run(await fs.readFileSync('sql_script/create/Basket.sql').toString()),
                db.run(await fs.readFileSync('sql_script/create/Contain.sql').toString()),
                db.run(await fs.readFileSync('sql_script/create/Producer.sql').toString()),
                db.run(await fs.readFileSync('sql_script/create/ProducerCategory.sql').toString()),
                db.run(await fs.readFileSync('sql_script/create/Product.sql').toString()),
                db.run(await fs.readFileSync('sql_script/create/ProductCategory.sql').toString()),
            ])
        }).then(()=> console.log("database ready !"))
        .catch(error => console.log(error))
          
                  
    }
}