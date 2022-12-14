// Components
import Loading from './Loading';

// Hooks
import { useContext } from 'react';

// Promise Tracking
import { trackPromise } from 'react-promise-tracker';

// Context
import { Context } from '../pages/_app';

export default function ContactContainer() {

    // Access the application states
    const { darkTheme, formData, setFormData, confirmFormData, setConfirmFormData, messageSent, setMessageSent } = useContext(Context);

    // Styles 
    const textColor = darkTheme ? 'text-[#efefef]' : 'md:text-black';
    const formBgColor = darkTheme ? 'bg-[#424141]' : 'bg-[#efefef]';
    const formInputColor = darkTheme ? 'bg-[#efefef] text-black' : '';
    const btnBgColor = darkTheme ? 'bg-[#272727]' : 'bg-gray-500 text-[#ffffff]';
    const bgColor = darkTheme ? 'bg-[#272727]' : 'bg-[#d7dee1]';

    // Boolean variable to validate email format with regex. Code referenced from 'https://www.w3resource.com/javascript/form/email-validation.php'
    const emailVerification = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email);

    // Updates form data state when input fields are changed by user
    function updateFormData(event) {
        setConfirmFormData(true);
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    }

    // Submit form after validating data
    function submitForm(event) {
        event.preventDefault();
        // Validate form completion and email format. 
        if (formData.fullName && formData.email && formData.message && emailVerification) {
            console.log('Sending');
            // Store form data in 'data', this variable will be used during the message submission process
            let data = formData;
            // Fetch the custom API (submitMessage.js). Set the method, headers, and body to the form data, track the async operation with trackPromise to render the Loading component while promise is being resolved
            trackPromise(
                fetch('/api/submitMessage', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  }).then((res) => {
                    // Tell user that the message has been sent. Remove message after 8 seconds.
                    setMessageSent('Message Sent!');
                    setTimeout(() => {
                        setMessageSent('');
                    }, 8000);
                    console.log('Response received');
                    if (res.status === 200) {
                        console.log('Response succeeded!');
                        // Once submission is completed, return form data state to default, this will remove the text from the input fields in the form
                        setFormData(() => {
                            return {fullName: '', email: '', message: ''}
                        });
                    }
                  })
            );
        } else {
            setConfirmFormData(false);
        }
    }

    return(
        <main className={`contact-main ${textColor} ${bgColor}`}>
            <div id='contact-container' className='relative -top-[100px]'></div>
            <section className='md:mt-8 mb-8'>
                <h1 className='header'>Get In Touch</h1>
                <p>Reach out by sending me a message. I&apos;ll get back to you as soon as I can.</p>
            </section>
            <form onSubmit={(e) => submitForm(e)} className={`contact-form ${formBgColor}`}>
                {/* Name */}
                <section className='form'>
                    <label htmlFor='fullName'>Full Name <span className={`${!formData.fullName ? 'text-red-500' : 'hidden'}`}>*</span></label>
                    <input type='text' id='fullName' name='fullName' value={formData.fullName} required onChange={updateFormData} className={`border form-input ${formInputColor} px-2 py-1`} />
                </section>
                {/* Email address */}
                <section className='form'>
                    <label htmlFor='email'>Email <span className={`${!formData.email || !emailVerification ? 'text-red-500' : 'hidden'}`}>*</span></label>  
                    <input type='email' id='email' name='email' value={formData.email} required onChange={updateFormData} className={`border form-input ${formInputColor} px-2 py-1`} />
                </section>
                {/* Message */}
                <section className='form pb-3'>
                    <label htmlFor='message'>Message <span className={`${!formData.message ? 'text-red-500' : 'hidden'}`}>*</span></label>  
                    <textarea id='message' name='message' rows='4' cols='40' value={formData.message} required onChange={updateFormData} className={`border form-input max-h-72 min-h-[34px] ${formInputColor} px-2 py-1`} />
                </section> 
                {/* Submit button, error message, and successful submission message */}
                <section className='flex items-center'>
                    <button type='submit' className={`${btnBgColor} contact-btn`}>Submit</button>
                    <p className={`ml-10 text-sm ${!confirmFormData ? 'text-red-500' : 'hidden'}`}>Please make sure your email is correct.</p>
                    <p className='ml-10'>{messageSent}<Loading /></p>
                </section>
            </form>
        </main>
    )
}
