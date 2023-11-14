import User from "./User"

const ListUserPanel = (props)=>{
    console.log('ListPanel',props.users[0])
    
    const uniqueIds = {};
    const filteredArray = props.users[0]?.filter((item) => {
      if (!uniqueIds[item.id]) {
        uniqueIds[item.id] = true;
        return true; // Include the first occurrence of each ID
      }
      return false; // Exclude duplicates
    });

    console.log(props.users)
    return (
        <div className="w-[100%] h-auto bg-[#3B395D] text-white" >
            {filteredArray?.map( (user) => <User  key={user.id} name={user.name} status={user.status}/>)}
        </div>
    )
}

export default ListUserPanel