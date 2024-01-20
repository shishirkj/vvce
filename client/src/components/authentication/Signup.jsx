import React, { useState } from 'react'
import { ToastContainer,toast } from "react-toastify";
import { registerUserApi } from './signupapi';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  
  const [form,setForm] = useState({name:'',email:'',password:''})
  
  const history  = useNavigate();
  
  let name,value
 
const handleInputs=(e)=>{ 

name = e.target.name;
value = e.target.value;
//we spread the operator because if not and just directly change we only get that property and value
setForm({...form,[name]:value})
}



const registerUser = async(e) => {
  try {
    e.preventDefault();
    const {name,password,email}=form;  
    if(name.length<=4)
    { 
      toast.error('Name should have more than 4 characters')
      
    }
    if(password.length<=8)
    { 
      toast.error('Password should be greater than 8 characters')
     return
    }
    if(email.length===0)
    { 
      
      toast.error('Please enter email')
      return
    }

    const {data} = await registerUserApi(form)
    if(data?.user?.name){
      console.log(data.user.name)
   toast.success(`Welcome ${data.user.name}`);
    history('/text')
    }

  } catch (error) {
    
    if(error.message==='Request failed with status code 400')
    {
   toast.error("User already exists")
    }
  console.log(error)
  }

    
};


  return (
    <div>
    <div className="bg-slate-600 pl-6 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
          <span className="flex flex-col mt-5 items-start max-md:mt-10">
            <div>
              <img alt='' src='/favicon.png' />
              <h1 className="text-4xl text-white">Research Sync</h1>
            </div>  
            <div className="text-white text-2xl leading-20 tracking-widest self-stretch mt-14 max-md:mt-10">
            ResearchCollab: Unifying Collaboration Efforts
            </div>
            <div className="text-white text-xl leading-9 tracking-widest self-stretch mt-12 max-md:mt-10">
            Manage your research and collaborate through an all-in-one platform.
            </div>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
          <span className="bg-white flex grow flex-col w-full pl-20 pr-7 pt-7 pb-12 rounded-[36px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <span className="flex items-stretch justify-between gap-5 self-end">
              <div className="text-neutral-400 text-sm leading-9">
                English (UK)
              </div>
              <img  alt = "img"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/98708c729f8732bb0914c1672794eef34cf9d4c20e624c1518de1b9bdcd1c301?"
                className="aspect-[1.67] object-contain object-center w-2.5 fill-stone-300 overflow-hidden shrink-0 max-w-full self-start"
              />
            </span>
            <div className="text-black text-2xl font-extrabold leading-9 tracking-widest mt-16 self-end max-md:max-w-full max-md:mt-10">
              Create Account
            </div>
            <div className="flex  items-stretch justify-between gap-5 mt-10 self-end max-md:max-w-full max-md:flex-wrap">
              <span className="border flex items-stretch justify-between gap-3 px-4 py-3 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                <img  alt = "img"
                  loading="lazy"
                  src="https://www.shutterstock.com/shutterstock/photos/2275269793/display_1500/stock-vector-google-popular-realistic-social-media-logotype-editorial-illustration-eps-2275269793.jpg"
                  className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-600 text-xs leading-9 my-auto">
                  Sign up with Google
                </div>
              </span>
              <span className="border flex items-stretch justify-between gap-3 px-4 py-3.5 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                <img  alt = "img"
                  loading="lazy"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlI_3rHTSCdcenWLKRHAl5e1G7DEI1TYSLpJthkxgaQ&s"
                  className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-zinc-600 text-xs leading-9 mt-1.5">
                  Sign up with Facebook
                </div>
              </span>
            </div>
            <div className="text-neutral-400 text-lg leading-9 self-center whitespace-nowrap mt-12 max-md:mt-10">
              - OR -
            </div>
            <form onSubmit={registerUser}>
            <input type='text'  name='name' value = {form.name} placeholder='Full Name'onChange={handleInputs}  style={{ outline: 'none' }} className="flex w-[536px] max-w-full justify-between gap-5 mt-11 pr-20 self-end items-start max-md:flex-wrap max-md:mt-10 max-md:pr-5"/>
            <div className="bg-gray-200 w-[536px] shrink-0 max-w-full h-px mt-2 self-end" />
            
            <input type='email' name='email' value = {form.email} placeholder='Email Adress'onChange={handleInputs}  style={{ outline: 'none' }} className="flex w-[536px] max-w-full justify-between gap-5 mt-11 pr-20 self-end items-start max-md:flex-wrap max-md:mt-10 max-md:pr-5"/>
            <div className="bg-gray-200 w-[536px] shrink-0 max-w-full h-px mt-2 self-end" />
            <span className="flex w-[536px] max-w-full justify-between gap-5 mt-11 pr-20 self-end items-start max-md:flex-wrap max-md:mt-10 max-md:pr-5">
              <input type='text' name='password' style={{ outline: 'none' }}  value = {form.password} placeholder='Password' onChange={handleInputs} className="text-neutral-400 text-base leading-9 mt-2"/>
              <img  alt = "img"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5802ae3301076bde43299f3b76efb62d6353263aa2b092a2ebe931711970c2fd?"
                className="aspect-square object-contain object-center w-[22px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </span>
            <div className="bg-gray-200 w-[536px] shrink-0 max-w-full h-px mt-1 self-end" />
            <button className="text-white text-center text-base font-extrabold leading-9 bg-slate-600 w-[536px] max-w-full justify-center items-center mt-12 px-16 py-4 rounded-lg self-end max-md:mt-10 max-md:px-5">
              Create Account
            </button>
            <div className="text-slate-600 text-base leading-9 mt-9 mb-10 self-end max-md:max-w-full max-md:mb-10">
              Allready have an account?{" "}
              <Link  to={'/login'} className="text-slate-600">Log in</Link>
            </div>
            </form>
          </span>
        </div>
      </div>
    </div>


    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   

    </div>
  )
}








