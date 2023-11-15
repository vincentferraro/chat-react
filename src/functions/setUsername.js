import { socket } from "../socket"


export default function setUsername(username){
    socket.emit('setUsername',username)
}