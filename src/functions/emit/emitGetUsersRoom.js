import { socket } from "../../socket";

export function emitGetUsersRoom(roomName){
    try{
        console.log('emitGetUsersRoom', roomName)
        socket.emit('get users room', roomName)
    }catch(err){
        console.error('ERROR emitGetUsersRoom function', err)
    }
    
}