import React,{useState,useRef} from "react";
import axios from "axios";
const Insert=()=>{
    const [res,setRes]=useState({});
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);

    const post_data=()=>{
        postEx();
    }
     const postEx = async ()=>{
        const res=await axios.post("http://localhost:9000/save",{"name":ref1.current.value,
            "current_reading":ref2.current.value,
            "previous_reading":ref3.current.value,});
            const {data} = res;
            setRes(data);


            ref1.current.value="";
            ref2.current.value="";
            ref3.current.value="";
    

     }
    
    return(<>
    <div style={{textAlign:"center", border:"double", borderColor:"aqua", 
            marginLeft:400, marginRight:400, marginTop:50}}>
        Consumer Name : <input type="text" ref={ref1}></input><br></br><br></br>
        Current Reading : <input type="text" ref={ref2}></input><br></br><br></br>
        Previous Reading : <input type="text" ref={ref3}></input><br></br><br></br>
        <button onClick={post_data}>Post</button>
        <p>{JSON.stringify(res)}</p>
        </div>

    
    </>)

}
export default Insert;