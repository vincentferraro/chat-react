import { socket } from "../socket"


export default function setUsername(username){

    console.log("hereee Username", username)
    socket.emit('setUsername',username)
    console.log("After Username")
}