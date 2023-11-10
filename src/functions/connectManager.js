import { socket } from "../socket";


function connect(){
    socket.connect()
    // socket.emit()
}
function disconnect(){
    socket.disconnect()
}


export {
    connect, disconnect
}