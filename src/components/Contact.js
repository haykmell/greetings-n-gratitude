import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    document.title = "Contact Us"

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500)
    }, [])

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hmneknp', 'gmail', e.target, 'user_Lt8CidRi57uxSXsWaqqBB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        alert('Thank you for you message.\nWe will reply to message soon as possible.')
    }


    return (
        <div>
            {/* page wrapper start */}
            <div className="page-wrapper">
                {/* preloader start */}
                <div id="ht-preloader" style={isLoading ? { display: "block" } : { display: "none" }}>
                    <div className="loader clear-loader">
                        <span />
                        <p>Greetings and Gratitude</p>
                    </div>
                </div>
                {/* preloader end */}
                {/*hero section start*/}
                <section className="position-relative">
                    <div id="particles-js" />
                    <div className="container">
                        <div className="row  text-center">
                            <div className="col">
                                <h1>Contact Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                        <li className="breadcrumb-item"><a className="text-dark" href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active text-primary" aria-current="page">Contact Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        {/* / .row */}
                    </div>
                    {/* / .container */}
                </section>
                {/*hero section end*/}
                {/*body content start*/}
                <div className="page-content">
                    <section>
                        <div className="container">
                            <div className="row justify-content-center mb-5 text-center">
                                <div className="col-12 col-lg-8">
                                    <div> <span className="badge badge-primary-soft p-2">
                                        <i className="la la-bold ic-3x rotation" />
                                    </span>
                                        <h2 className="mt-4 mb-0">Drop A Line</h2>
                                        <p className="lead mb-0">Get in touch and let us know how we can help. Fill out the form and we’ll be in
                        touch as soon as possible.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-lg-10">
                                    <form id="contact-form" className="row" onSubmit={sendEmail}>
                                        <div className="messages" />
                                        <div className="form-group col-md-6">
                                            <input id="form_name" type="text" name="firstName" className="form-control" placeholder="First Name" required="required" data-error="Name is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input id="form_name1" type="text" name="lastName" className="form-control" placeholder="Last Name" required="required" data-error="Name is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows={4} required="required" data-error="Please,leave us a message." defaultValue={""} />
                                            <div className="help-block with-errors" />
                                        </div>
                                        <div className="col-md-12 text-center mt-4">
                                            <button className="btn btn-primary" type="submit"><span>Send Messages</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className="py-11 bg-primary position-relative mt-5" data-bg-img="./images/bg/03.png">
                    <div className="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                            <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                        </svg>
                    </div>
                    <div className="container mt-11">
                        <div className="row text-white text-center mt-8">
                            <div className="col">
                                <hr className="mb-8" />Copyright <u><a className="text-white" href="/">Greetings and Gratitude
</a></u> | All Rights
Reserved</div>
                        </div>
                    </div>
                </footer>
                {/*body content end*/}
            </div>
            {/* page wrapper end */}
            {/*back-to-top start*/}
            <div className="scroll-top"><a className="smoothscroll" href="#top"><i className="las la-angle-up" /></a></div>
            {/*back-to-top end*/}
            {/* inject js start */}
            {/* inject js end */}
        </div>
    )
}

export default Contact
