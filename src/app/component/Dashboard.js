import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "../store/feature/userInfo/userInfo"
import { useEffect } from "react";

const Dashboard=()=>{

    const dispatch= useDispatch();
    const {data,loading ,error}= useSelector((state)=>state.userInfo);
   
    useEffect(()=>{
        dispatch(fetchUserInfo())
    },[])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  
    return(
        <div>
  {data && data.map(user => (
        <div key={user.id} style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
        </div>
    )
}

export default Dashboard