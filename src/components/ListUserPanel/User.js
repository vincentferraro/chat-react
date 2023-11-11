import { Avatar, Wrap, WrapItem, Text } from "@chakra-ui/react"
const User = (props)=>{

    
    return(<div className="flex items-center w-[100%] pl-[2%] mt-[2%] h-11 bg-[#2F2C53]">
        <Wrap spacing="20px">
            <WrapItem >
            <Avatar size='sm'/>
            </WrapItem>
            <WrapItem spacing="20px">  
                <Text fontSize='xl'>{props.name}</Text>
            </WrapItem>
        </Wrap>
        
        
        
        
    </div>)
}

export default User