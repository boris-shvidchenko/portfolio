// Hooks
import { useContext, useRef } from 'react';

// Context
import { Context } from '../pages/_app';

export default function ContactContainer() {

    // Access the application states
    const { darkTheme, formData, setFormData, confirmFormData, setConfirmFormData } = useContext(Context);

    // Boolean variable to verify email format with regex
    const emailVerification = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email);

    // Updates form data state when input fields are changed by user
    function changeFormData(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    // Submit form after validating data
    function submitForm(event) {
        event.preventDefault();
        // Validate form completion and email format. Email validation code referenced from 'https://www.w3resource.com/javascript/form/email-validation.php'
        if (formData.fullName && formData.email && formData.message && emailVerification) {
            setConfirmFormData(true);
            // Add form functionality here ... 
            // Once data has been submitted, clear values
        } else {
            setConfirmFormData(false);
        }
    }

    return(
        <main className={`pb-60 md:pb-0 px-7 pt-10 md:pt-0 md:px-20 xl:px-32 2xl:px-40 md:h-[calc(100vh-108px)] lg:h-[calc(100vh-112px)] ${darkTheme ? 'text-[#efefef]' : 'md:text-black'}`}>
            <div id='contact-container' className='relative -top-[110px]'></div>
            <section className='md:mt-8 mb-8'>
                <h1 className='text-2xl mb-3 lg:mb-5 font-semibold'>Get In Touch</h1>
                <p>Reach out by sending me a message. I'll get back to you as soon as I can.</p>
            </section>
            
            <form className={`form ${darkTheme ? 'border' : ''} shadow-md border-[#4e4e4e] md:w-[525px] p-3 rounded-md ${darkTheme ? 'bg-[#272727]' : 'bg-[#efefef]'}`}>

                {/* Name */}
                <section className='form'>
                    <label htmlFor='fullName'>Full Name <span className={`${!formData.fullName ? 'text-red-500' : 'hidden'}`}>*</span></label>
                    <input type='text' id='fullName' name='fullName' value={formData.fullName} required onChange={changeFormData} className={`border form-input ${darkTheme ? 'bg-[#efefef] text-black' : ''} px-2 py-1`} />
                </section>

                {/* Email address */}
                <section className='form'>
                    <label htmlFor='email'>Email <span className={`${!formData.email || !emailVerification ? 'text-red-500' : 'hidden'}`}>*</span></label>  
                    <input type='email' id='email' name='email' required onChange={changeFormData} className={`border form-input ${darkTheme ? 'bg-[#efefef] text-black' : ''} px-2 py-1`} />
                </section>

                {/* Subject */}
                <section className='form'>
                    <label htmlFor='subject'>Subject <span className={`${!formData.subject ? 'text-red-500' : 'hidden'}`}>*</span></label>
                    <input type='text' id='subject' name='subject' value={formData.subject} required onChange={changeFormData} className={`border form-input ${darkTheme ? 'bg-[#efefef] text-black' : ''} px-2 py-1`} />
                </section>

                {/* Message */}
                <section className='form pb-5'>
                    <label htmlFor='message'>Message <span className={`${!formData.message ? 'text-red-500' : 'hidden'}`}>*</span></label>  
                    <textarea id='message' name='message' rows='4' cols='40' required onChange={changeFormData} className={`border form-input max-h-72 min-h-[34px] ${darkTheme ? 'bg-[#efefef] text-black' : ''} px-2 py-1`}/>
                </section> 

                {/* Submit button and error message */}
                <input type='submit' value='Submit' onClick={submitForm} className={`font-semibold w-28 rounded-md p-1 ${darkTheme ? 'bg-[#424141]' : 'bg-gray-400'} ${darkTheme ? 'md:bg-[#424141]' : ''} min-w-fit onhover-social onhover`} />

                <p className={`${!confirmFormData ? 'text-red-500' : 'hidden'} pt-3 text-sm`}>Please fill out the required fields and/or make sure your email is correct.</p>

            </form>
        </main>
    )
}