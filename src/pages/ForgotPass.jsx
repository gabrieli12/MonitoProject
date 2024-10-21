import googleIcon from '../assets/icons/Google.svg'
import divider from '../assets/images/Dividers.png'
import Input from '../components/simpleComponents/Input'
import Label from '../components/simpleComponents/Label'
import Button from '../components/simpleComponents/Button'
import { Link, useNavigate } from "react-router-dom";
import { useLang } from '../components/LangProvider'
import { useState } from 'react'

function ForgotPass() {
    const { register, handleSubmit, data, setData, errors } = useLang();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false); 
    const navigate = useNavigate();


    const onSubmit = (formData) => {
        const storedEmail = localStorage.getItem('email');
        
        if (storedEmail !== formData.email) {
            setEmailError("Invalid email");
        } else {
            setEmailError("");
            setIsEmailVerified(true);  
        }
    };

    const handlePasswordChange = (formData) => {
        if (formData.newPassword !== formData.repeatPassword) {
            setPasswordError("Passwords do not match");
        } else {
            localStorage.setItem('pass', formData.newPassword);
            setPasswordError("")
            navigate('/login')
        }
    };

    return (
        <section className="flex justify-center items-center h-screen p-9 pb-40 my-20">
            {!isEmailVerified ? (
                <form className="max-w-80" onSubmit={handleSubmit(onSubmit)}>
                    <p className='font-inter font-medium text-[12px] text-darkBlue mb-7 hover:underline cursor-pointer'>
                        Please enter the email address associated with your account. We'll promptly send you a link to reset your password.
                    </p>

                    <Label value={'Email'} For={'email'} />
                    <Input emailError={emailError} isError={emailError !== ""} required={{ required: "Please Enter Email" }} registerVal={'email'} type={'email'} id={'email'} />
                    <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{emailError}</p>

                    <Button bgColor={'bg-darkBlue'} width={'w-full'} textColor={'text-white'} radius={'rounded'} value={'Verify Email'} font={'font-inter'} y={'py-3'} />
                </form>
            ) : (
                <form className="max-w-80" onSubmit={handleSubmit(handlePasswordChange)}>

                    <Label value={'New Password'} For={'newPassword'} />
                    <Input registerVal={'newPassword'} type={'password'} id={'newPassword'} required={{ required: "Please enter a new password" }} />
                    <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{errors.newPassword?.message}</p>

                    <Label value={'Confirm password'} For={'repeatPassword'} />
                    <Input registerVal={'repeatPassword'} type={'password'} id={'repeatPassword'} required={{ required: "Please repeat your password" }} />
                    <p className='font-inter text-sm text-red-500 mt-1 mb-4'>{passwordError || errors.repeatPassword?.message}</p>

                    <Button bgColor={'bg-darkBlue'} width={'w-full'} textColor={'text-white'} radius={'rounded'} value={'Change Password'} font={'font-inter'} y={'py-3'} />
                </form>
            )}
        </section>
    );
}

export default ForgotPass;
