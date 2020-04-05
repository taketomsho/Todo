const sqlite3 = require('sqlite3').verbose();
 
// open database in memory
let db = new sqlite3.Database('./db/filelist.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the filelist database.');
});

db.serialize(() => {
    db.each(`SELECT directory,foldersize
             FROM foldersizes`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.directory + "\t" + row.foldersize);
    });
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});