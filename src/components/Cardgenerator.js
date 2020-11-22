import React, { useState, useRef } from 'react'
import '../assets/css/card-generator.css'

const Cardgenerator = () => {
    document.title = "Card Generator"

    const [receiversName, setReceiversName] = useState('');
    const [message, setMessage] = useState('');
    const [sendersName, setSendersName] = useState('');
    const [IsAlert, setIsAlert] = useState(false);
    const canvasRef = useRef(null)

    const canvas = canvasRef.current;

    function downloadImage() {

        if (window.navigator.msSaveBlob) {

            window.navigator.msSaveBlob(canvas.msToBlob(), "card.png");
        } else {

            const a = document.createElement("a");
            document.body.appendChild(a);
            a.href = canvas.toDataURL();
            a.download = "card.png";
            a.click();
            document.body.removeChild(a);
        }
    }

    function previewCanvas(e) {
        e.preventDefault();
        if (receiversName === '' || message === '' || sendersName === '') {
            setIsAlert(true)
        }
        else {
            canvas.height = canvas.width / 1.616;
            const ctx = canvas.getContext("2d");
            ctx.font = "20px Helvetica";

            ctx.fillStyle = "#159";
            ctx.rect(0, 0, 300, 56);
            ctx.fill();
            ctx.fillStyle = "#fff";
            ctx.fillText("Thank You", 100, 25);
            ctx.font = "16px Arial";
            // ctx.drawImage(logo, 230, 3, 50, 50);
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.rect(0, 35, 300, 300);
            ctx.fill()
            ctx.fillStyle = "black";
            ctx.fillText("To: " + receiversName, 20, 90);
            ctx.fillText(message, 20, 125);
            ctx.fillText("From: " + sendersName, 20, 165);
            // ctx.fillText("SubN° " + num.innerHTML, 110, 165);
            // ctx.drawImage(image, 10, 65, 80, 110);
        }
    }




    return (
        <>
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
                                <h1>Card Generator</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
                                        <li className="breadcrumb-item"><a className="text-dark" href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active text-primary" aria-current="page">Card Generator</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        {/* / .row */}
                    </div>
                    {/* / .container */}
                </section>
                {/*hero section end*/}
                <div className="back">
                    <form onSubmit={previewCanvas}>
                        <h3 className={IsAlert ? "alert-danger alert" : 'alert alert-success'}>Please fill-in the form</h3>
                        <label>Receiver's Name</label>
                        <input type="text" id="receivers-name" placeholder="Your name..." value={receiversName} onChange={(e) => setReceiversName(e.target.value)} />
                        <label>Message</label>
                        <textarea name="message" placeholder="Your message" id="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} maxLength="true" cols="20" rows="5"></textarea>
                        <label>Sender's Name</label>
                        <input type="text" id="senders-name" placeholder="Name" value={sendersName} onChange={(e) => setSendersName(e.target.value)} />
                        <input type="submit" className="submit-btn" value='Submit' />
                        {/* <label htmlFor="file" className="upload">Upload an Image</label> */}
                        <br />
                        {/* <span>Choose one that desrcibes you perfectly</span> */}
                        {/* <input type="file" id="file" accept="image/*" onchange="loadImage(event)" /> */}
                    </form>
                    {/* <button type="submit" id="preview" onClick={previewCanvas}>Preview</button> */}
                    <div className="container">
                        <canvas id="result" className="card" ref={canvasRef} >
                            <header id="head">
                                <div className="camp">
                                    <h4>Campus Card</h4>
                                    <span>Undergraduate</span>
                                </div>
                                <img src="./lorem.jpg" id="logo" alt='img' />
                            </header>
                            <div className="content">
                                <img src="" id="imgDisplayed" alt="img" />
                                <ul>
                                    <li id="name" ></li>
                                    <li id="birth"></li>
                                    <li id="fieldYear"></li>
                                    <li>SubN°:<span id="num" /></li>
                                </ul>
                            </div>
                        </canvas>
                        <button id="down" onClick={downloadImage}>Download</button>
                    </div>
                </div>

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
        </>
    )
}

export default Cardgenerator