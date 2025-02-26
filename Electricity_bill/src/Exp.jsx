import { useRef,useState } from "react";
import axios from "axios";
const Exp=()=>{
    const [arr,setArr]=useState([]);
    const ref1=useRef(null);


    const fetch_data=()=>{
        getData();
    }    
    const getData=async ()=>{
        const res=await axios.get(`http://reqres.in/api/users?page=${ref1.current.value}`
         );

        const {data:x}=res;
        const {data}=x;
        setArr(data);
    }
    return(
        <>
            <input type="number" ref={ref1}></input>
            <button onClick={fetch_data}>GetData</button>
            <br></br>
            {
                arr.length!=0?(<table border={1}
                    align="center"
                    cellSpacing={10}
                    cellPadding={10}>
                  <tr>
                      <th>id</th>
                      <th>first_name</th>
                      <th>last_name</th>
                      <th>email</th>
                      <th>avatar</th>
                  </tr>
                  {
                      arr.map((element,index)=>{
                          return(
                              <tr key={index}>
                                  <td>{element.id}</td>
                                  <td>{element.first_name}</td>
                                  <td>{element.last_name}</td>
                                  <td>{element.email}</td>
                                  <td><img src={element.avatar}></img></td>
                              </tr>
                          )
                      })
                  }
            </table>):(<i className="fa fa-spin fa-spinner"></i>)
            }
        </>
    )
}
export default Exp;