import { useEffect,useState } from "react"
import axios from "axios";
const Getall=()=>{
    const [arr,setArr]=useState([]);
    const getData=async ()=>{
        const res=await axios.get("http://localhost:9000/getAll");
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
                    marginTop:50,marginLeft: 250}}>
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
                            arr.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{element.cid}</td>
                                        <td>{element.name}</td>
                                        <td>{element.current_reading}</td>
                                        <td>{element.previous_reading}</td>
                                        <td>{element.units}</td>
                                        <td>{element.service_charges}</td>
                                        <td>{element.total_bill}</td>

                                  
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
             </div>
        </>
    )
}
export default Getall;