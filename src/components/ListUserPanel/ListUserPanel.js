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
        <div className="w-[100%] h-auto bg-[#3B395D] text-white" >
            {usersList.map( (user,index) => <User  key={user.name+index} name={user.name} status={user.status}/>)}
        </div>
    )
}

export default ListUserPanel