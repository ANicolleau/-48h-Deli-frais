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
            const dataSql = await fs.readFileSync('sql_script/create/User.sql').toString();
            await db.run(dataSql)
        }).then(()=> console.log("database ready !"))
        .catch(error => console.log(error))
          
                  
    }
}