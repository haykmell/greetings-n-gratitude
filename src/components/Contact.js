import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    document.title = "Contact Us"

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
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
                        <p>Lanyard</p>
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
                {/*body content end*/}
                {/*footer start*/}
                <footer className="py-11 bg-primary position-relative" data-bg-img="assets/images/bg/03.png">
                    <div className="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                            <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                        </svg>
                    </div>
                    <div className="container mt-11">
                        <div className="row">
                            <div className="col-12 col-lg-5 col-xl-4 mr-auto mb-6 mb-lg-0">
                                <div className="subscribe-form bg-warning-soft p-5 rounded">
                                    <h5 className="mb-4 text-white">Newsletter</h5>
                                    <h6 className="text-light">Subscribe Our Newsletter</h6>
                                    <form id="mc-form" className="group">
                                        <input type="email" defaultValue name="EMAIL" className="email form-control" id="mc-email" placeholder="Email Address" required style={{ height: '60px' }} />
                                        <input className="btn btn-outline-light btn-block mt-3 mb-2" type="submit" name="subscribe" defaultValue="Subscribe" />
                                    </form> <small className="text-light">Get started for 1 Month free trial No Purchace required.</small>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-7">
                                <div className="row">
                                    <div className="col-12 col-sm-4 navbar-dark">
                                        <h5 className="mb-4 text-white">Pages</h5>
                                        <ul className="navbar-nav list-unstyled mb-0">
                                            <li className="mb-3 nav-item"><a className="nav-link" href="aboutus.html">About</a>
                                            </li>
                                            <li className="mb-3 nav-item"><a className="nav-link" href="product-grid.html">Shop</a>
                                            </li>
                                            <li className="mb-3 nav-item"><a className="nav-link" href="error-404.html">Faq</a>
                                            </li>
                                            <li className="mb-3 nav-item"><a className="nav-link" href="blog.html">Blog</a>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm-4 mt-6 mt-sm-0 navbar-dark">
                                        <h5 className="mb-4 text-white">Legal</h5>
                                        <ul className="navbar-nav list-unstyled mb-0">
                                            <li className="mb-3 nav-item"><a className="nav-link" href="terms-and-conditions.html">Term Of Service</a>
                                            </li>
                                            <li className="mb-3 nav-item"><a className="nav-link" href="privacy-policy.html">Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-12 col-sm-6">
                                        <a className="footer-logo text-white h2 mb-0" href="index.html"> Greetings and Gratitude
<span className="font-weight-bold">UX</span>
                                        </a>
                                    </div>
                                    <div className="col-12 col-sm-6 mt-6 mt-sm-0">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item"><a className="text-light ic-2x" href="/"><i className="la la-facebook" /></a>
                                            </li>
                                            <li className="list-inline-item"><a className="text-light ic-2x" href="/"><i className="la la-instagram" /></a>
                                            </li>
                                            <li className="list-inline-item"><a className="text-light ic-2x" href="/"><i className="la la-twitter" /></a>
                                            </li>
                                            <li className="list-inline-item"><a className="text-light ic-2x" href="/"><i className="la la-linkedin" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-white text-center mt-8">
                            <div className="col">
                                {/* <hr className="mb-8" />Designed by <u><a className="text-white" href="#">Harshita and Team</a></u> | */}All Rights
                  Reserved</div>
                        </div>
                    </div>
                </footer>
                {/*footer end*/}
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
