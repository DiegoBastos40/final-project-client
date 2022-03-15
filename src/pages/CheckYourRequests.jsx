import React, { useState, useEffect ,useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/auth.context.js'

function CheckYourRequests() {
  const [request, setRequest] = useState(null);
  const { requestId } = useParams();
  const { authenticateUser } = useContext(AuthContext);
  const storedToken = localStorage.getItem('authToken');
  console.log(authenticateUser)

  const fetchRequest = async () => {
    try {

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/user`,{
        headers:{ Authorization: `Bearer ${storedToken}` }
      },);
      console.log(response.data)
      setRequest(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <div>


    {/*   {request && (
        <>
          <h1>{request.name}</h1>
          <p>{request.email}</p>
        </>
      )}
      {request &&
        request.ptRequest.map((req) => (
          <li key={req.name}>
            <h3>{req.typeOfWorkout}</h3>
          
            <p>{req.workoutSessionTime}</p>
          </li>
        ))} */}

      {/* {request && <Link to={`/projects/edit/${project._id}`}>Edit Project</Link>}
      <Link to="/projects"> Back to Project List</Link> */}
    </div>
  );
}



export default CheckYourRequests ;