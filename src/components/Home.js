import React, { useState, useEffect } from 'react'

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500)
    }, [])


    return (
        <div>
            {/* page wrapper start */}
            <div className="page-wrapper">
                {/* preloader start */}
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
                        <section className="custom-pt-1 custom-pb-3 bg-primary position-relative parallaxie" data-bg-img="./images/bg/03.png">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-5 col-xl-5 mr-auto mb-8 mb-lg-0">
                                        {/* Image */}
                                        <img src={'./images/hero/02.png'} className="img-fluid" alt="img1" />
                                    </div>
                                    <div className="col-12 col-lg-7 col-xl-6">
                                        {/* Heading */}
                                        <h1 className="display-4 text-white">
                                            As we express our gratitude, we must never forget that the highest appreciation is not to utter words but  <span className="font-weight-bold">to live by them.</span>
                                        </h1>
                                        {/* Text */}
                                        <p className="lead text-light"> Enjoy the little things, for one day you may look back and realize they were the big things. - Robert Brault</p>
                                        {/* Buttons */} <a href="/" className="btn btn-outline-light mr-1">
                                            Read More
                  </a>
                                        <a href="/" className="btn text-white popup-vimeo"> <i className="la la-play-circle mr-1 ic-3x align-middle line-h-0" /> Watch Video</a>
                                    </div>
                                </div>
                                {/* / .row */}
                            </div>
                            {/* / .container */}
                            <div className="shape-1 bottom" style={{ height: '250px', overflow: 'hidden' }}>
                                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                                </svg>
                            </div>
                        </section>
                        {/*hero section end*/}
                        {/*body content start*/}
                        <div className="page-content">
                            {/*about start*/}
                            <section>
                                <div className="container">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                            <img src="./images/about/03.png" alt="someImg" className="img-fluid" />
                                        </div>
                                        <div className="col-12 col-lg-6 col-xl-5">
                                            <div> <span className="badge badge-primary-soft p-2">
                                                <i className="la la-exclamation ic-3x rotation" />
                                            </span>
                                                <h2 className="mt-3">Not what we say about our blessings, but how we use them, is the real measure of our thanksgiving.</h2>
                                                <p className="lead mb-0">We must find time to stop and thank the people who make a difference in our lives.It’s so easy to get caught up in our busy lives. From New Years resolutions to spring cleaning, and summer vacations to the holidays— life can come and go as quickly as the seasons. That’s why it’s so important to pause, reflect, and feel gratitude for all the blessings we have in our lives.</p>
                                            </div> <a href="/" className="btn btn-outline-primary mt-5">
                                                Read More </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*about end*/}



                        </div>
                        {/*body content end*/}

                    </div>
                    {/* page wrapper end */}
                    {/*back-to-top start*/}
                    <div className="scroll-top"><a className="smoothscroll" href="#top"><i className="las la-angle-up" /></a></div>
                    {/*back-to-top end*/}
                    {/* inject js start */}
                    {/* inject js end */}
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
                </div>
                {/* preloader end */}
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

export default Home
