import { Text } from "@chakra-ui/react"
const Message = (props)=>{

    return(<div className="flex h-[4%] w-[96%] p-auto m-[2%] border-2 border-black border-solid rounded-md">
        <div className="w-[10%] ml-[1%]">
            <Text color={props.color}>{props.username} </Text>
        </div>
        <div className="ml-[1%]">
            <span> {props.message}</span>
        </div>
    </div>)
}

export default Message