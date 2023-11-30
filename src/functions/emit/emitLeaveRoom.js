import errorMessage from "../../messages/errorMessage"
import { socket } from "../../socket"

//
//  @Parameters : roomName (String)
//  @Return: void
//
//
export function emitLeaveRoom(roomName){
    try{
        socket.emit('leave room', roomName)
    }catch(err){
       errorMessage('emitLeaveRoom', err)
    }
}