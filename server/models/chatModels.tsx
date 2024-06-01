import { db } from "../megration/initial_megration"

const createChat=(chatName:string ,userID:string )=>{
    const query1 = `insert into SingleChat(chatName) values (${chatName})`
    db.query(query1).run()
    const chatID= (db.query( `select last_insert_rowid() as chatId`).get() as {chatID:number}).chatID
    
    const query2 = `insert into Chats(chatID,userID ) values (${chatID},${userID})`
    db.query(query2).run()
    
}

export {createChat}