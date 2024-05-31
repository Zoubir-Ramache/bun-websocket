import { Database } from "bun:sqlite";

export const createDatabase =  () => {

  const db = new Database("mydb.sqlite", { create: true });
   createTables(db);
  return db
};

const createTables =  (db: Database) => {
  db.query(
    "create table if not exists   Messages(id integer primary key  , content string , userID string , ChatID integer)"
  ).run();
  db.query(
    "create table if not exists   Users(id integer primary key  , username string , userID string )"
  ).run();

  db.query(
    "create table if not exists   Chats(id integer primary key  , userID string , ChatID integer)"
  ).run();

  db.query(
    "create table if not exists   SingleChat(id integer primary key  , chatName string )"
  ).run();
};


export const db =createDatabase()