import React from 'react'

const AboutUs = () => {
    return (
        <div>
            {/* page wrapper start */}
            <div className="page-wrapper">
                {/* preloader start */}
                <div id="ht-preloader">
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
                                <h1>About Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                        <li className="breadcrumb-item"><a className="text-dark" href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active text-primary" aria-current="page">About Us</li>
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
                    {/*about start*/}
                    <section className="pb-11">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-12 col-lg-6 mb-6 mb-lg-0">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <img src="./images/about/10.jpg" className="img-fluid rounded shadow-lg" alt="..." />
                                        </div>
                                        <div className="col-6">
                                            <img src="./images/about/11.jpg" className="img-fluid rounded shadow-lg mb-5" alt="..." />
                                            <img src="./images/about/13.jpg" className="img-fluid rounded shadow-lg" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 col-xl-5">
                                    <div> <span className="badge badge-primary-soft p-2 font-w-6">
                                        About Business
                      </span>
                                        <h2 className="mt-3 font-w-5">Bootsland Small Tean Crafting Beautiful Experience</h2>
                                        <p className="lead">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam
                        rem aperiam.</p>
                                        <p className="mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium, totam
                        rem aperiam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*about end*/}
                    {/*counter start*/}
                    <section>
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-12 col-lg-6 col-xl-5">
                                    <div id="accordion" className="accordion">
                                        <div className="card border-0 active mb-2">
                                            <div className="card-header border mb-0 bg-transparent">
                                                <h6 className="mb-0">
                                                    <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">When our power of choice Business ?</a>
                                                </h6>
                                            </div>
                                            <div id="collapse1" className="collapse show" data-parent="#accordion">
                                                <div className="card-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a
                                                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                                                Many desktop publishing packages and web page editors now use Nor again is there anyone who loves
                            or pursues or desires to obtain pain of itself.</div>
                                            </div>
                                        </div>
                                        <div className="card border-0 mb-2">
                                            <div className="card-header border mb-0 bg-transparent">
                                                <h6 className="mb-0">
                                                    <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Nam libero
                              tempore, cum soluta nobis ?</a>
                                                </h6>
                                            </div>
                                            <div id="collapse2" className="collapse" data-parent="#accordion">
                                                <div className="card-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a
                                                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                                                Many desktop publishing packages and web page editors now use Nor again is there anyone who loves
                            or pursues or desires to obtain pain of itself.</div>
                                            </div>
                                        </div>
                                        <div className="card border-0">
                                            <div className="card-header border mb-0 bg-transparent">
                                                <h6 className="mb-0">
                                                    <a className="text-dark" data-toggle="collapse" data-parent="#accordion" href="#collapse3">which is
                              the same as saying through ?</a>
                                                </h6>
                                            </div>
                                            <div id="collapse3" className="collapse" data-parent="#accordion">
                                                <div className="card-body text-muted">Looked up one of the more obscure Latin words, consectetur, from a
                                                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                                                Many desktop publishing packages and web page editors now use Nor again is there anyone who loves
                            or pursues or desires to obtain pain of itself.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-8 mb-lg-0">
                                    <div className="row text-center">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="counter bg-primary rounded p-5 shadow">
                                                <div className="counter-desc text-white">
                                                    <h5>Project</h5>
                                                    <span className="count-number display-4" data-to={234} data-speed={10000}>234</span>
                                                    <span className="display-4">k</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-5">
                                            <div className="counter bg-white rounded p-5 shadow">
                                                <div className="counter-desc">
                                                    <h5>Member</h5>
                                                    <span className="count-number display-4 text-primary" data-to={455} data-speed={10000}>455</span>
                                                    <span className="display-4 text-primary">k</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-5 mt-md-0">
                                            <div className="counter bg-white rounded p-5 shadow">
                                                <div className="counter-desc">
                                                    <h5>Love Us</h5>
                                                    <span className="count-number display-4 text-primary" data-to={365} data-speed={10000}>365</span>
                                                    <span className="display-4 text-primary">k</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 mt-5">
                                            <div className="counter bg-orange rounded p-5 shadow">
                                                <div className="counter-desc text-white">
                                                    <h5>Happy Client</h5>
                                                    <span className="count-number display-4" data-to={528} data-speed={10000}>528</span>
                                                    <span className="display-4">k</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*counter end*/}
                    {/*services start*/}
                    <section className="custom-pt-1 custom-pb-2 bg-dark position-relative" data-bg-img="./images/bg/02.png">
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-4 col-md-6 mb-8 mb-lg-0 text-white">
                                    <div> <span className="badge badge-primary-soft p-2 font-w-6 text-white">
                                        Business Services
                      </span>
                                        <h2 className="mt-3 mb-0">One Platform, Deep Insight Why Choose Business</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src="./images/icon/01.svg" alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">App Development</h5>
                                        </div>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6 mt-md-0">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src="./images/icon/02.svg" alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Clean Code</h5>
                                        </div>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src="./images/icon/03.svg" alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Software Development</h5>
                                        </div>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src="./images/icon/04.svg" alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">Easy to customize</h5>
                                        </div>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-6">
                                    <div className="bg-primary-soft rounded p-5">
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="mr-3">
                                                <img className="img-fluid" src="./images/icon/05.svg" alt="" />
                                            </div>
                                            <h5 className="m-0 text-light">24/7 Support</h5>
                                        </div>
                                        <p className="mb-0">Serspiciatis unde omnis iste natus laudantium, totam rem aperiam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shape-1" style={{ height: '150px', overflow: 'hidden' }}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                <path d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                            </svg>
                        </div>
                        <div className="shape-1 bottom" style={{ height: '200px', overflow: 'hidden' }}>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#fff' }} />
                            </svg>
                        </div>
                    </section>
                    {/*services end*/}
                    {/*team start*/}
                    <section className="pt-0">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                        Business Team
                      </span>
                                        <h2 className="mt-3">Meet Our Team Of Expert</h2>
                                        <p className="lead mb-0">All types of businesses need access to development resources, so we give you the
                        option to decide how much you need to use.</p>
                                    </div>
                                </div>
                            </div>
                            {/* / .row */}
                            <div className="row">
                                <div className="col-12 col-lg-3 col-md-6 mb-8 mb-lg-0">
                                    <div className="text-center hover-translate p-5">
                                        <div className="mb-3">
                                            <img className="img-fluid rounded-top" src="./images/team/01.png" alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Vinit Saw</h6>
                                            <small className="text-muted mb-3 d-block">Manager</small>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item"><a className="text-muted" href="/"><i className="la la-facebook h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-dribbble h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-twitter h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-linkedin h4" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 mb-8 mb-lg-0">
                                    <div className="text-center shadow hover-translate p-5">
                                        <div className="mb-3">
                                            <img className="img-fluid rounded-top" src="./images/team/02.png" alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Nina Loe</h6>
                                            <small className="text-muted mb-3 d-block">Ceo</small>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item"><a className="text-muted" href="/"><i className="la la-facebook h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-dribbble h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-twitter h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-linkedin h4" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-6 mb-8 mb-md-0">
                                    <div className="text-center hover-translate p-5">
                                        <div className="mb-3">
                                            <img className="img-fluid rounded-top" src="./images/team/03.png" alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Renut John</h6>
                                            <small className="text-muted mb-3 d-block">Founder</small>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item"><a className="text-muted" href="/"><i className="la la-facebook h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-dribbble h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-twitter h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-linkedin h4" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-6">
                                    <div className="text-center hover-translate p-5">
                                        <div className="mb-3">
                                            <img className="img-fluid rounded-top" src="./images/team/04.png" alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-1">Biton Leeny</h6>
                                            <small className="text-muted mb-3 d-block">Supervisor</small>
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item"><a className="text-muted" href="/"><i className="la la-facebook h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-dribbble h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-twitter h4" /></a>
                                                </li>
                                                <li className="list-inline-item"><a className="text-muted h6" href="/"><i className="la la-linkedin h4" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*team end*/}
                    {/*client start*/}
                    <section className="text-center">
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                                    <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                                        Brand Logo
                      </span>
                                        <h2 className="mt-3">Market leaders use app to nrich their brand &amp; business.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/07.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/08.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/09.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/10.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/11.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/12.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/08.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/09.png" alt="" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="clients-logo">
                                        <img className="img-fluid" src="./images/client/10.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*client end*/}
                </div>
                {/*body content end*/}
                {/*footer start*/}
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


export default AboutUs
