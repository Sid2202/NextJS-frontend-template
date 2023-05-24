import { useState, useEffect} from "react";
import axios from "axios";

export default function Database(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await axios.get('http://localhost:5080/getdata');
        setData(response.data);
        } catch (error) {
        console.error(error);
        }
    };
    return(
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="h-1/2 w-1/2 flex flex-col items-center">
                    <p className="text-4xl font-Quicksand m-4">This is the Database</p>

                    <div>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Phrase</th>
                                    {/* Add more table headers as needed */}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.age}</td>
                                        <td>{item.phrase}</td>
                                        {/* Add more table cells as needed */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}