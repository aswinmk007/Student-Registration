import React, { useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../Services/allAPI';

function Register() {
    const navigate = useNavigate()
    const [userInput,setUserinput] = useState({
        firstname:"",lastname:"",address:"",email:"",gender:"",password:"",mobile:"",dateofbirth:"",course:""
    })
    console.log(userInput);
    const handleRegister =async (e)=>{
        e.preventDefault()
        if(userInput.firstname && userInput.lastname && userInput.address && userInput.email && userInput.gender && userInput.mobile && userInput.dateofbirth && userInput.course){
            //api call 
            try{
                const result = await registerAPI(userInput)
                console.log(result);
                if(result.status==200){
                    sessionStorage.setItem("students",JSON.stringify(result))
                    toast.success("Registration Successlly Completed")
                    navigate('/details')

                }else{
                    toast.error(result.response.data)
                }

            }catch(err){
                console.log(err);
            }
        }else{
            toast.warning("please fill the form completelt!!!")

        }
    }
  return (
    <div className='register'>
        <Header/>
        <h2 style={{fontSize:"35px",fontWeight:'bold'}} className='text-center mt-3 text-primary'>Apply as a Student</h2>
        <Link to={'/'}><button className='btn bg-info ms-5'>Back</button></Link>
        <div className='studentitems'>
            <div className="item">
                
                    <span>First Name</span>
                    <div><input value={userInput.firstname} onChange={e=>setUserinput({...userInput,firstname:e.target.value})} className='form-control w-100' type="text" placeholder='Enter yuor first name' /></div>
                
            
            
                     <span>Last Name</span>
                    <div><input value={userInput.lastname} onChange={e=>setUserinput({...userInput,lastname:e.target.value})} className='form-control w-100' type="text" placeholder='Enter yuor last name' /></div>

            

            
                     <span>Address</span>
                    <div><textarea value={userInput.address} onChange={e=>setUserinput({...userInput,address:e.target.value})}  className='form-control w-100' style={{height:'70px'}} name="" id="" cols="30" rows="10"></textarea></div>

            

            
                     <span>Email</span>
                    <div><input value={userInput.email} onChange={e=>setUserinput({...userInput,email:e.target.value})} className='form-control w-100' type="email" placeholder='Enter yuor email' /></div>

            

                     <span>Gender</span>
                    <div><select value={userInput.gender} onChange={e=>setUserinput({...userInput,gender:e.target.value})} className='form-control w-100' name="gender" id="gender">
                       <option value="">select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                        </select></div>

            </div>

            <div className='item'>
                <span>Mobile</span>
                    <div><input value={userInput.mobile} onChange={e=>setUserinput({...userInput,mobile:e.target.value})} className='form-control w-100'  type="text" placeholder='Enter yuor mobile no' /></div>

                    <span>Password</span>
                    <div><input value={userInput.password} onChange={e=>setUserinput({...userInput,password:e.target.value})} className='form-control w-100' type="password" placeholder='Enter password' /></div>

                    <span>Date of Birth</span>
                    <div><input value={userInput.dateofbirth} onChange={e=>setUserinput({...userInput,dateofbirth:e.target.value})} className='form-control w-100' type="date" id='birthday' name='birthday'/></div>

                    <span>Course</span>
                    <div><select value={userInput.course} onChange={e=>setUserinput({...userInput,course:e.target.value})} className='form-control w-100' name="course" id="course">
                       <option value="">select course</option>
                        <option value="Biology">Biology</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Humanities">Humanities</option>




                        </select></div>
                    
                    <button onClick={handleRegister} className='btn bg-primary mt-4'>Register</button>
            </div>


        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </div>
  )
}

export default Register