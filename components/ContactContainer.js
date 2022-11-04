// Hooks
import { useContext, useRef } from 'react';

// Context
import { Context } from '../pages/_app';

export default function ContactContainer() {

    // Access the application states
    const { darkTheme, formData, setFormData, confirmFormData, setConfirmFormData } = useContext(Context);

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
        // Validate form completion and email format (with regex). Email validation code referenced from 'https://www.w3resource.com/javascript/form/email-validation.php'
        if (formData.fullName && formData.email && formData.message && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            setConfirmFormData(true);
            // Add form functionality here ... 
        } else {
            setConfirmFormData(false);
        }
    }

    return(
        <main className='md:px-20 xl:px-32 2xl:px-40 md:h-[calc(100vh-140px)] lg:h-[calc(100vh-144px)]'>
            <section className='md:mt-8'>
                <h1 className='text-2xl mb-3 lg:mb-5 font-semibold'>Get In Touch</h1>
                <p>Reach out by sending me a message. I'll get back to you as soon as I can.</p>
            </section>
            <form className='form'>
                <section className='form'>
                    <label htmlFor='fullName'>Full Name <span className={`${!formData.fullName ? 'text-red-500' : 'hidden'}`}>*</span></label>
                    <input type='text' id='fullName' name='fullName' value={formData.fullName} required onChange={changeFormData} className='border border-black' />
                </section>
                <section className='form'>
                    <label htmlFor='email'>Email <span className={`${!formData.email ? 'text-red-500' : 'hidden'}`}>*</span></label>  
                    <input type='email' id='email' name='email' required onChange={changeFormData} className='border border-black' />
                </section>
                <section className='form'>
                    <label htmlFor='message'>Message <span className={`${!formData.message ? 'text-red-500' : 'hidden'}`}>*</span></label>  
                    <textarea id='message' name='message' rows='4' cols='40' required onChange={changeFormData} className='border border-black' />
                </section> 
                <input type='submit' value='Submit' onClick={submitForm} />
                <p className={`${!confirmFormData ? 'text-red-500' : 'hidden'}`}>Please fill out the required fields and/or make sure your email is correct.</p>
            </form>
        </main>
    )
}