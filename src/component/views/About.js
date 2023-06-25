import React, { useState } from "react";
import myImg from '../../assets/imgs/_DSC6232.jpg';

let About = () => {
    let [contact,setContact] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    })

    let updateContact=(event)=>{
       setContact({
           ...contact,
            [event.target.name]:event.target.value
        });
    }

    let sendMessage = (e) => {
        let form = document.getElementById('contactForm');
        if (form.checkValidity() === true) {
           alert(JSON.stringify(contact));
            e.preventDefault();
            e.stopPropagation();
        }
    }
    return (
        <React.Fragment>
            <div className="container" style={{ marginTop: "100px", marginBottom: "100px" }}>
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">

                        <p className="h2">So , who am I ?</p>
                        <p className="text-monospace">Have 5+ years of Professional experience in developing Web-based, Client/Server applications, Internet/Intranet applications and Windows-based applications using Microsoft Technologies </p>
                        <div className="pt-5">
                            <a href="https://www.facebook.com/musab.katry/" className="text-blue mx-2" target="_blank"><i className=" bi bi-facebook"></i></a>
                            <a href="https://github.com/Musab-omer" target="_blank" className="text-dark mx-2"><i className="bi bi-github"></i></a>
                            <a href="" className="text-prmary mx-2" target="_blank"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.youtube.com/@CodeWithMusab" target="_blank" className="text-danger mx-2"><i className="bi bi-youtube"></i></a>
                            <a href="" target="_blank" className="text-info mx-2"><i className="bi bi-linkedin"></i></a>


                        </div>
                    </div>
                    <div className="col-md-6 alig-item-center">
                        <div className="text-center">
                            <img src={myImg} className="img-fluid rounded my-3" style={{ height: "400px" }} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row bg-light">

                    <div className="col-md-6">
                        <div className="card my-3 animated zoomIn">
                            <div className="card-header bg-warning">
                                <p className="h4">Contact Us</p>
                            </div>
                            <div className="card-body">
                                <form className=" my-2" id="contactForm" novalidate>
                                    <div className="mb-3">
                                        {/* <label>Name*</label> */}
                                        <input type="text" className="form-control" name="name"
                                            value={contact.name}
                                            onChange={updateContact}
                                            placeholder="Your Name" required />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label>Subject</label> */}
                                        <input type="text" className="form-control" name="subject"
                                            value={contact.subject}
                                            onChange={updateContact}
                                            placeholder="Message Subject" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label>Email*</label> */}
                                        <input type="text" className="form-control" name="email"
                                            value={contact.email}
                                            onChange={updateContact}
                                            placeholder="Your Email" required />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label>Message</label> */}
                                        <textarea cols="30" rows="5" className="form-control" name="message"
                                            value={contact.message}
                                            onChange={updateContact}
                                            placeholder="Your Message ..." required />
                                    </div>
                                    <button type="submit" onClick={sendMessage} className="btn btn-dark"  ><i className="bi bi-send"></i> Send</button>
                                    {/* <a href="mailto:mosab.katry@gmail.com?subject='Hello from Mohammed jallay!'&body='Just popped in to say hello'">Click to send an Email</a> */}
                                    <a href={`mailto:${contact.email}?subject=${contact.subject}&body=${contact.message}`}>Click to Send an Email</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.1328490939354!2d31.320705874498117!3d29.860442327267158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837fe66de7aff%3A0x5184394945da0b46!2sMohmmed%20Jally!5e0!3m2!1sen!2seg!4v1685865056150!5m2!1sen!2seg" className="border-0 img-fluid rounded w-100 h-75 float-left my-2" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default About