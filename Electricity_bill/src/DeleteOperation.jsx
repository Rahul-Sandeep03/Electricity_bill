import axios from "axios";
import { useRef, useState } from "react";

const DeleteOperation = () => {
    const [response, setResponse] = useState(null);
    const ref1 = useRef(null);

    const deleteData = async () => {
        const id = ref1.current.value.trim();
        if (!id) {
            setResponse({ status: "Error", message: "Please enter a valid ID" });
            return;
        }

        try {
            const res = await axios.delete(`http://localhost:9000/delete/${id}`);
            setResponse({ status: res.status, message: "Record deleted successfully!" });
        } catch (error) {
            setResponse({ status: "Error", message: error.response?.data || "Failed to delete record" });
        }
    };

    return (
        <div style={{textAlign:"center", border:"double", borderColor:"aqua", 
            marginLeft:400, marginRight:400, marginTop:50}}>
            <label htmlFor="recordId">Enter Record ID:</label><br />
            <input type="text" ref={ref1} id="recordId" /><br /><br />
            <button onClick={deleteData}>Delete Record</button>
            {response && <p style={{ color: response.status === "Error" ? "red" : "green" }}>{response.message}</p>}
        </div>
    );
};

export default DeleteOperation;
