import React from 'react';
import { Button } from 'react-bootstrap';
import Nab from "../../LayOut/Navbar/Nab";

const ContactForm = () => {
  return (

    <>
        <Nab></Nab>
    <div className="Contact_form">

            <div className="col-lg-3 main ">
                <h1>Contact Form</h1>
                <div className="inner w-100 container">
                <form action="">
                    <label htmlFor="">Name</label>
                    <input className=' d-block' type="text" placeholder='Type your name'/>
                    <label htmlFor="">Number :</label>
                    <input className=' d-block text-lg-start' type="Number" placeholder='Type your Number'/>
                    <label htmlFor="">E-mail</label>
                    <input className=' d-block text-lg-start' type="email" required placeholder='Type your E-mail'/>
                    <label htmlFor="">Massage</label>
                    <textarea name="" id="" cols="30" placeholder='Type your massages' rows="10"></textarea>
                    <div className="button text-lg-end">
                    <Button className=' common_button mt-lg-4 '>SEND</Button>
                    </div>
                </form>

                </div>
            </div>
        
    </div>

    </>
  )
}

export default ContactForm