import { socket } from "../socket"

export function emitJoinRoom(roomName){
    socket.emit('join room',roomName)
}
