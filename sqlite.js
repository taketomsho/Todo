const sqlite3 = require('sqlite3').verbose();
 
// open database in memory
let db = new sqlite3.Database('./db/task.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the task database.');
});

// let sql = `SELECT * FROM tasks` ;
// let sql2 = `SELECT * FROM tasks where task_id > ?`; 
// const taskid = 2

// // get method
// db.get(sql2, [taskid],(err, row) => {
//   if (err) {
//     console.error(err.message);
//   }
//   return row
//     ? console.log(row.task_id + "\t" + row.title + "\t" + row.content)
//     : console.log("Not found");
// });

// each method
// db.each(sql, (err, row) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log(row.task_id + "\t" + row.title + "\t" + row.content);
// });

// // all method
// db.all(sql2, [taskid],(err, rows) => {
//   if (err) {
//     console.error(err.message);
//   }
//   rows.forEach((row) => {
//     console.log(row.task_id + "\t" + row.title + "\t" + row.content);
//   });
// });



// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });