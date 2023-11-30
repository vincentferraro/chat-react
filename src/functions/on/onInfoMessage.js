import { socket } from "../../socket";


//
//  @Parameters: ..
//  @Return: void
//

export function onInfoMessage(){
    try{
        socket.on('info message',(message)=>{
            console.log(message)
        })

    }catch(err){
        console.error('ERROR onInitialization function : ', err)
    }
}