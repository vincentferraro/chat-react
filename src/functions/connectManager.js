import { socket } from "../socket";


function connect(){
    socket.connect()
}
function disconnect(){
    socket.disconnect()
}

export {
    connect, disconnect
}