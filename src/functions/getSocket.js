import { socket } from "../socket";


// Send request to receiver the list of sockets in the room
export function emitGetSockets(){
    socket.emit('getSockets')
}


// Get all socket in the room
export function onGetSockets(){
    const array=[]
    socket.on('getSocket',(data)=>{
        array.push(data[0])
    })
    return array
}
