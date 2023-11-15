import { socket } from "../socket";


export function connect(){
    socket.connect()
}
export function disconnect(){
    socket.disconnect()
}

