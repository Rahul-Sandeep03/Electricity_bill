import { useEffect,useState } from "react"
import axios from "axios";
const GetOne=()=>{
    const [arr,setArr]=useState([]);
    const getData=async ()=>{
        const res=await axios.get("http://localhost:9000/getone/56");
        const {data}=res;
        setArr(data);
    }
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
             <div className="container mt-5">
                <table border={1}
                style={{textAlign:"center",  borderColor:"aqua",
                    marginTop:50,marginLeft: 250
                    }}>
                    <thead>
                        <tr>
                            <th>CID</th>
                            <th>NAME</th>
                            <th>CURRENT READING</th>
                            <th>PRIVOIUS READING</th>
                            <th>UNITS</th>
                            <th>SERVICE CHARGES</th>
                            <th>TOTAL BILL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           
                                    <tr key={arr.cid}>
                                        <td>{arr.cid}</td>
                                        <td>{arr.name}</td>
                                        <td>{arr.current_reading}</td>
                                        <td>{arr.previous_reading}</td>
                                        <td>{arr.units}</td>
                                        <td>{arr.service_charges}</td>
                                        <td>{arr.total_bill}</td>

                                  
                                    </tr>
                           
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
             </div>
        </>
    )
}
export default GetOne;