import { socket } from "../../socket";

export function emitGetPreviousMessages(roomName){
    try{

        socket.emit('get previous messages',roomName)
    }catch(err){
        console.error('ERROR emitGetPreviousMessage function :', err)
    }
}