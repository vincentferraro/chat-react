
import { Link } from "react-router-dom"

const Nav = ()=>{

    
    const links = [
        {
            to:"/",
            name:"Home"
        },
        {
            to:"/first-floor",
            name:"First Floor"
        },
        {
            to:"/second-floor",
            name:"Second Floor"
        }
    ]

    // h-1/5 w-auto  rounded-lg pl-2 pr-2 bg-white text-black
    return(<nav className="flex h-[10%] justify-center p-3 bg-[#2F2C53]">
        
            {
        links.map( link => <Link key={link.to} to={link.to} className="w-auto  rounded-lg pl-2 pr-2 text-white bg-[#5F5C89] m-2 text-black">{link.name}</Link>)
       }
        
       
    </nav>)
}

export default Nav