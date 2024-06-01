import { db } from "../megration/initial_megration"
const createUser=(username:string , userID:string)=>{
const query = `insert into Users (username , userID) values (${username} , ${userID})`
db.query(query).run()


}
 const getUser=async (userID:string)=>{
const query = `select * from Users where userID=${userID}`
return db.query(query).get()

}

export {createUser , getUser}