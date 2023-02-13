import { Card, CardContent, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'

export default function Dashboard() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  // const navigate = useNavigate();

  function Logout(){
    sessionStorage.removeItem('token')
}
  
  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(res => setUsers(res.data))
      .catch(error => setError(error))
  }, [])
  // console.log(users);
  // .catch(error => setError(error.message))


  if (sessionStorage.getItem('token')) {
    return (
      
      <div className='row mb-3'>
          <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
             <a className='btn text-light' style={{ backgroundColor: "#AD1982"}} href='/login' type="submit" onClick={Logout}>Logout</a>
               
             </div>
             {
                        error !== '' ? <span className="text-center alert alert-danger">{error}</span> : <span></span>
                    }

        {
          users.map(obj => <div className="col-md-4 mt-2">

            <Card variant="outlined">
            <h3>Welcome to our Dashboard</h3>
              <CardContent>
                <Typography variant="h5" component="div">
                  {"Name: " + obj.name}
                </Typography>
                <Typography variant="h5" component="div">
                  {"Address " + obj.address}
                </Typography>
                <Typography variant="h5" component="div">
                  {"Mobile " + obj.mobile}
                </Typography>

              </CardContent>
            </Card>

          </div>
          )
        }
                    
      </div>
    )

  }
  return <Navigate to="/login" />

}
