
const sqlite3 = require('sqlite3').verbose();
 
let db = new sqlite3.Database('./db/task.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the filelist database.');
});

db.serialize(() => {
  db.run(`drop table if exists tasks`)

  db.run(`create table if not exists tasks (
  task_id integer primary key AUTOINCREMENT,
  title text,
  content text)`);

  db.run(`insert into tasks(title,content) values ('first task','first task first task first task')`);
  db.run(`insert into tasks(title,content) values ('second task','second task second task second task')`);
  db.run(`insert into tasks(title,content) values ('third task','third task third task third task')`);
  db.run(`insert into tasks(title,content) values ('fourth task','fourth task fourth task fourth task')`);
})

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});