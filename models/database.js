const sqlite = require('sqlite')
const open = require('sqlite').open
const filename = "./database.db"

module.exports = {
    createDatabase(){
        open({
            filename: filename,
            driver: sqlite.driver
          }).then((db) => {
              db.run(`create table Producer (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  products_id INTEGER,
                  description VARCHAR(255),
                  category VARCHAR(100)
              );`)
          }).then(()=> console.log("database ready !"))
          .catch(error => console.log)
          
                  
    }
}