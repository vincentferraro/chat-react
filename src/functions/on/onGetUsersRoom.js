import { socket } from "../../socket";


//
//  @Parameters: roomName: String
//  @Return:: listUsers: Array<Username>
//

export  function onGetUsersRoom(){
    try{
        let userListJson
        socket.on('get users room', (listUsers)=>{
            userListJson = listUsers.map(user => JSON.parse(user))
            console.log('ON LIST',userListJson)
        })
        return userListJson
    }catch(err){
        console.error('ERROR emitGetUsersRoom function', err)
    }
    
}