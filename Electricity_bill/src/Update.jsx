import axios from "axios";
import { useRef,useState } from "react";
const Update = ()=>{
    const [res,setRes] = useState({});
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const update_data=()=>{
        updateEx();
    }
    const updateEx = async ()=>{
        const res = await axios.put(`http://localhost:9000/update/${ref1.current.value}`,{
        "name":ref2.current.value,
        "current_reading":ref3.current.value,
        "previous_reading":ref4.current.value,});
        const {data} = res;
        setRes(data);
    }
    return(<>
        <div style={{textAlign:"center", border:"double", borderColor:"aqua", 
            marginLeft:400, marginRight:400, marginTop:50}}>
        Consumer ID : <input type="text" ref={ref1}></input><br></br><br></br>
        Name        : <input type="text" ref={ref2}></input><br></br><br></br>
        Current Reading : <input type="text" ref={ref3}></input><br></br><br></br>
        Previous Reading : <input type="text" ref={ref4}></input><br></br><br></br>
        <button onClick={update_data}>update</button>
        <p>{JSON.stringify(res)}</p>
        </div>
        </>)
}
export default Update;