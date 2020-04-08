drop table if exists tasks;
create table tasks(
    task_id integer primary key AUTOINCREMENT,
    title text,
    content text
);

insert into tasks(title,content) values ('first task','first task first task first task');
insert into tasks(title,content) values ('second task','second task second task second task');
insert into tasks(title,content) values ('third task','third task third task third task');
insert into tasks(title,content) values ('fourth task','fourth task fourth task fourth task');