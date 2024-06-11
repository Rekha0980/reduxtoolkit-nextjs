import { useDispatch, useSelector } from "react-redux"
import { deletUser } from "../store/feature/user-management/userManagementSlice";

const UserList=()=>{
    const {userList}= useSelector((state)=>state.userManagement);
    const dispatch= useDispatch();


    return(
        <>
        {/* <h3>user</h3> */}
        {userList.map((el)=>(<div>{el.name}<button onClick={()=>dispatch(deletUser(el.name))}>delet</button></div>))}
        </>
    )
}

export default UserList