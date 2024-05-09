import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { getstudentDetailAPI } from '../Services/allAPI';
import { SERVER_URL } from '../Services/serverUrl';



function StudentDetails() {
    const [Details,setDetails] = useState({
        
    })

    useEffect(()=>{
        getAlldetails()

    },[])

    const getAlldetails = async ()=>{
        try{
            const result = await getstudentDetailAPI()
            console.log(result);
            if(result.status == 200){
                setDetails(result.data)
            }

        }catch(err){
            console.log(err);
        }
    }

    

  return (
    <>
    <Header/>
    <h1 style={{fontWeight:'bold'}} className='text-center text-primary mt-3'>Student Details</h1>
    <Link to={'/'}><button className='btn bg-info ms-5'>Back</button></Link>
    <div className='container'>
        <table className='table shadow mt-5'>
            <thead className='bg-info'>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Course</th>
            </thead>
            <tbody>

           {  Details?.length>0 &&
               Details?.map(details=>(
                <tr>
                <td>{details?.firstname}</td>
                <td>{details?.lastname}</td>
                <td>{details?.address}</td>
                <td>{details?.email}</td>
                <td>{details?.mobile}</td>
                <td>{details?.dateofbirth}</td>
                <td>{details?.gender}</td>
                <td>{details?.course}</td>
                
       </tr>
               ))
          
           }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default StudentDetails