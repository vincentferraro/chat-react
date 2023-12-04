import { socket } from "../../socket";

export function onGetPreviousMessages(){
    try{
  
            socket.on('get previous messages', (data)=>{
                 return data.map((message)=>JSON.parse(message)).sort((a,b)=>a.date - b.date).reverse()
            })

    }catch(err){
        console.error('ERROR emitGetPreviousMessage function :', err)
    }
}