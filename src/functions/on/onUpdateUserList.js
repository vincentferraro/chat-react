import errorMessage from "../../messages/errorMessage";
import { socket } from "../../socket";

export function onUpdateUserList(){
    try{

        socket.on('update user list',(usersList)=>{
            const jsonList = usersList.map(user => JSON.parse(user))
            return jsonList
        } )

    }catch(err){
        errorMessage('onUpdateUserList',err)
    }
}