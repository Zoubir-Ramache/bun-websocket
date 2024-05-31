import { db } from "../megration/initial_megration"
export const createUser=(username:string , userID:string)=>{
const query = `insert into Users (username , userID) values (${username} , ${userID})`
db.query(query).run()


}
export const getUser=async (userID:string)=>{
const query = `select * from Users where userID=${userID}`
return db.query(query).get()

}
