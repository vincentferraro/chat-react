import { socket } from "../../socket";

export function emitInitialization(username){
    socket.emit('initialization',username)
}