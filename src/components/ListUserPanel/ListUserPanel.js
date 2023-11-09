import User from "./User"

const ListUserPanel = ()=>{

    const usersList = [{
        name: "Alice",
        status: "Online"
    },{
        name:"Henry",
        status:"Absent"
    }]
    return (
        <div >
            {usersList.map( user => <User name={user.name} status={user.status}/>)}
        </div>
    )
}

export default ListUserPanel