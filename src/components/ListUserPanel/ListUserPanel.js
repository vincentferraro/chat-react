import User from "./User"

const ListUserPanel = ()=>{

    const usersList = [{
        name: "Alice",
        status: "Online"
    },{
        name:"Georges",
        status:"Absent"
    }]
    return (
        <div className="w-[20%] h-auto border-2 border-red-500 border-solid" >
            {usersList.map( user => <User name={user.name} status={user.status}/>)}
        </div>
    )
}

export default ListUserPanel