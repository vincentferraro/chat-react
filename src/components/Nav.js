
import { Link } from "react-router-dom"
import { Button , Stack} from "@chakra-ui/react"
import { emitJoinRoom } from "../functions/joinRoom"
const Nav = ()=>{

    
    const links = [
        {
            to:"general",
            name:"general"
        },
        {
            to:"first-floor",
            name:"First Floor"
        },
        {
            to:"second-floor",
            name:"Second Floor"
        }
    ]
    

    // h-1/5 w-auto  rounded-lg pl-2 pr-2 bg-white text-black
    return(<nav className="flex h-[10%] justify-center p-3 bg-[#2F2C53]">
        <Stack spacing={4} direction='row' align='center'>
        {
        links.map( link => 
            <Button size='md' colorScheme='blue' margin={4}>
            <Link key={link.to} to={link.to} onClick={()=>emitJoinRoom(link.to)}>{link.name}</Link>
            </Button>
        
        )
       }
        </Stack>
           
        
       
    </nav>)
}

export default Nav