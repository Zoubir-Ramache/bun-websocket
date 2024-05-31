import { Database } from "bun:sqlite";

export const createDatabase=async ()=>{
    // db.query("insert into Messages  (content  , userId) values ('first message' , 'hhhhhh') ").run();

// const  = db.query("select *  from Messages");
// const data = query.all();
// console.log(data);

const db = new Database("mydb.sqlite", { create: true });
db.query(
  "create table if not exists   Messages(id integer primary key  , content string , userId string)"
).run();

}