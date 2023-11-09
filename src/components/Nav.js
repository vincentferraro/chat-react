
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
    return(<nav className="flex justify-center p-3 bg-white">
       {
        links.map( link => <Link to={link.to} className="h-1/5 w-auto  rounded-lg pl-2 pr-2 border-2 border-solid border-gray-500 bg-white m-2 text-black">{link.name}</Link>)
       }
    </nav>)
}

export default Nav