
import { socket } from "../../socket"
//
//  @Parameters : roomName (String)
//  @Return: void
//
export function emitJoinRoom(roomName){
    socket.emit('join room', roomName)
}