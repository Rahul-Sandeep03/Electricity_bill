import { Link } from "react-router-dom";
const Nav=()=>{
    return(<>

    <div >
        <Link to="/" style={{marginRight:100 , textDecoration:"none" , color:"white" }}>Add Consumer</Link>
        <Link to="/update" style={{marginRight:100 , textDecoration:"none",color:"white"}}>Update Consumer</Link>
        <Link to="/delete" style={{marginRight:100 , textDecoration:"none",color:"white"}}>Delete Consumer</Link>
        <Link to="/getAll" style={{marginRight:100 , textDecoration:"none",color:"white"}}>View All Consumer Details</Link>
        <Link to="/getone" style={{marginRight:100 , textDecoration:"none",color:"white"}}>View one Consumer</Link>
    </div>
    </>)
}

export default Nav;