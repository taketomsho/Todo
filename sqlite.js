const sqlite3 = require('sqlite3').verbose();
 
// open database in memory
let db = new sqlite3.Database('./db/task.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the filelist database.');
});

db.serialize(() => {
    db.each(`SELECT * FROM tasks`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.task_id + "\t" + row.title + "\t" + row.content);
    });
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});