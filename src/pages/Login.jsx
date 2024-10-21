import googleIcon from '../assets/icons/Google.svg'

import divider from '../assets/images/Dividers.png'
import Input from '../components/simpleComponents/Input'
import Label from '../components/simpleComponents/Label'
import Button from '../components/simpleComponents/Button'
import { Link, useNavigate  } from "react-router-dom";
import { useLang } from '../components/LangProvider'
import { useState } from 'react'



function Login() {
  const {register, handleSubmit, data, setData, errors, isAutorized, setIsAutorized} = useLang()
  let isError = false
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  localStorage.setItem('isAutorized', false)


  
  const navigate = useNavigate(); 




  const onSubmit = (formData) => {
    setData(JSON.stringify(formData));

    const storedEmail = localStorage.getItem('email'); 
    const storedPass = localStorage.getItem('pass'); 


    if (storedEmail !== formData.email) {
      setEmailError("Invalid email"); 
    } else {
      setEmailError(""); 
      if(storedPass !== formData.pass){
        setPassError('Invalid password')
      }else{
        setPassError('')
        localStorage.setItem('isAutorized', true)
        setIsAutorized(true);
        console.log('all succes')
        navigate('/');
      }
    }
  }




  // Object.keys(errors).length === 0 ? isError = false : isError = true
  // console.log(errors == String({}) ? 'no error' : 'error' )

  


  return (
    <section className="flex justify-center items-center p-9 pb-40 my-20">
        <form className='max-w-80' 
          onSubmit={handleSubmit(onSubmit)}>
            <button className='flex justify-center items-center border border-[#B6B7BC] py-3 px-6 rounded-[4px] gap-2 font-inter font-medium leading-6 w-full'><img src={googleIcon} alt="google icon" />Continue with Google</button>
            <img className='mt-8 mb-10' src={divider} alt="divider" />

            {/* email input */}
            <Label value={'Email'} For={'email'} />
            <Input  emailError={emailError} isError={isError} required={{required: "please Enter Email"}} registerVal={'email'} type={'email'} id={'email'} />
            <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.email?.message || emailError}</p>

            {/* password input */}
            <Label value={'Password'} For={'pass'} />
            <Input emailError={''} isError={isError} required={{required: "please Enter Password", minLength: {value: 4, message: 'min length is 4'} }} length={4} registerVal={'pass'} type={'password'} id={'pass'} />
            <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.pass?.message || passError}</p>

            <Link to={'/forgotPass'}><p className='font-inter font-medium text-[12px] text-darkBlue text-right mb-7 hover:underline cursor-pointer'>Forgot Password?</p></Link>
            
            <Button bgColor={'bg-darkBlue'} width={'w-full'} textColor={'text-white'} radius={'rounded'} value={'Login'} font={'font-inter'} y={'py-3'} />

            <p className='font-inter font-normal text-sm text-darkBlue text-center mt-6'>Don't have an account?<Link to='/register'><span className='hover:underline cursor-pointer'> Sign up</span></Link>
            </p>

        </form>
    </section>
  )
}

export default Login