import googleIcon from '../assets/icons/Google.svg'

import divider from '../assets/images/Dividers.png'
import Input from '../components/simpleComponents/Input'
import Label from '../components/simpleComponents/Label'
import Button from '../components/simpleComponents/Button'
import { Link, useNavigate } from "react-router-dom";
import { useLang } from '../components/LangProvider'




function Register() {

  const {register, handleSubmit, data, setData, errors} = useLang()
  let isError = false

  Object.keys(errors).length === 0 ? isError = false : isError = true

  for(let element in data){
    element == 'name' ? localStorage.setItem(element, data[element][0].toUpperCase() + data[element].slice(1,)) : localStorage.setItem(element, data[element])
    
  }
  const navigate = useNavigate()



  return (
    <section className='w-full h-screen flex justify-center items-center'>
      <form className='max-w-80' 
          onSubmit={handleSubmit((data) => {
            setData(data)
            console.log(data)
            navigate('/login');

        })}>
            <button className='flex justify-center items-center border border-[#B6B7BC] py-3 px-6 rounded-[4px] gap-2 font-inter font-medium leading-6 w-full'><img src={googleIcon} alt="google icon" />Continue with Google</button>
            <img className='mt-8 mb-10' src={divider} alt="divider" />

            {/* name input */}
            <Label value={'Name'} For={'name'} />
            <Input isError={isError} required={{required: "please Enter Name", maxLength: {value: 16, message: 'max length is 16'}}} registerVal={'name'} type={'text'} id={'name'} />
            <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.name?.message}</p>


            {/* email input */}
            <Label value={'Email'} For={'email'} />
            <Input isError={isError} required={{required: "please Enter Email", }} registerVal={'email'} type={'email'} id={'email'} />
            <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.email?.message}</p>

            {/* password input */}
            <Label value={'Password'} For={'pass'} />
            <Input isError={isError} required={{required: "please Enter Password", minLength: {value: 4, message: 'min length is 4'}}} registerVal={'pass'} type={'password'} id={'pass'} />
            <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.pass?.message}</p>

            <p className='font-inter font-medium text-[12px] text-darkBlue mb-7 hover:underline cursor-pointer'>By creating an account you agree with our Terms of Service, Privacy Policy,?</p>
            

            <Button bgColor={'bg-darkBlue'} width={'w-full'} textColor={'text-white'} radius={'rounded'} value={'Create account'} font={'font-inter'} y={'py-3'} />

            <p className='font-inter font-normal text-sm text-darkBlue text-center mt-6'>Already have an account?<Link to='/login'><span className='hover:underline cursor-pointer'> Log in</span></Link>
            </p>

        </form>
    </section>
  )
}

export default Register