import { db } from "../megration/initial_megration"
const createUser=(username:string , userID:string)=>{
const query = `insert into Users (username , userID) values (?, ?)`
db.query(query).run(username ,userID)


}
 const getUserByID= (userID:string)=>{
const query = `select * from Users where userID=?`
return db.query(query).get(userID)

}
const getUserByName=(username:string)=>{
    const query = `select * from Users where username=?;`
    const data =db.query(query).get(username)
    
    
    return data
    
    }
    
    
export {createUser , getUserByID , getUserByName}