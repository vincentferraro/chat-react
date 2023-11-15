import { socket } from "../socket"

export function emitJoinRoom(roomName){
    socket.emit('joinRoom',roomName)
}
