import React, { useRef, useState } from "react";

export default function HaveAQuestionService(props) {
    const [clicked, setClicked] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [Question, setQuestion] = useState("");

    const ContactDetails = [
        {
            DetailsisActive: true,
            Title: "Email",
            Icon: "fas fa-envelope",
            Description: "ruknovo10@gmail.com",
        },
        {
            DetailsisActive: true,
            Title: "Phone",
            Icon: "fas fa-phone",
            Description: "+91 (9617) 246–882",
        },
        {
            DetailsisActive: true,
            Title: "Address",
            Icon: "fa-solid fa-location-dot",
            Description: "Vaibhav Luxmi Nagar Gali No. 5, near Radisson Blu Square, Indore, MP 452001",
        },
    ];

    const nameBox = useRef();
    const phoneBox = useRef();
    const emailBox = useRef();
    const lookingBox = useRef();
    const messageBox = useRef();
    const sourcePageBox = useRef();

    const RegisterForm = (e) => {
        e.preventDefault();
        setClicked(true);

        const name = nameBox.current.value.trim();
        const phone = phoneBox.current.value.trim();
        const email = emailBox.current.value.trim();
        const lookingFor = lookingBox.current.value.trim();
        const message = messageBox.current.value.trim();
        const sourcePage = sourcePageBox.current.value;

        if (name && phone && email && lookingFor && message) {
            console.log({
                name,
                phone,
                email,
                lookingFor,
                message,
                sourcePage,
            });

            setQuestion("Thank you! Your message has been submitted successfully.");
            setIsAlertVisible(true);

            // Clear the form
            nameBox.current.value = "";
            phoneBox.current.value = "";
            emailBox.current.value = "";
            lookingBox.current.value = "";
            messageBox.current.value = "";

            // Reset validation
            setClicked(false);

            setTimeout(() => {
                setIsAlertVisible(false);
            }, 3000);
        } else {
            setQuestion("Please fill all required fields.");
            setIsAlertVisible(true);
        }
    };

    return (
        <div className="bg-gradient pb-5 pt-5">
            <div className="container">
                <div className="card border-0 rounded-20 common-shadow py-4 pb-5 pt-5">
                    <div className="row m-0">
                        {/* Contact Info */}
                        <div className="col-lg-4 col-md-4">
                            <div className="px-xl-4 border_bottom">
                                <div className="border-bottom">
                                    <img
                                        className="img-fluid w-100 px-5 py-3"
                                        src="/assets/image/effect10.png"
                                        alt="Contact Us"
                                    />
                                </div>
                                {ContactDetails.map((obj, index) => (
                                    obj.DetailsisActive && (
                                        <div className="py-2" key={index}>
                                            <label className="line-height-0px m-2 p-0 text-secondary">
                                                <small>
                                                    <i className={` ${obj.Icon}`}></i>{" "}
                                                    <span className="text-secondary">{obj.Title}:</span>
                                                </small>
                                            </label>
                                            <h3   className="pxl-2">
                                                {obj.Description}
                                            </h3>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* Form & Content */}
                        <div className="col-lg-8 col-md-8 border-start">
                            <div className="rs-slider style1">
                                <div
                                    className="mt--20 slide1 slider-content"
                                    style={{
                                        background: `linear-gradient(220deg,rgba(255, 255, 255, 0) 0%,rgba(255, 255, 255, 0) 79%)`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <div className="container rs-about style1">
                                        <div className="content-part text-left">
                                            <h3 className="title wow text-left" style={{
                                                fontSize: "40px",
                                                lineHeight: "45px",
                                                fontWeight: "700",
                                                color: 'black',
                                            }}>
                                                Let's Level Up Your Developments, Together!
                                            </h3>
                                            <h3 style={{
                                                fontSize: "20px",
                                                lineHeight: "20px",
                                                fontWeight: "500",
                                                color: 'black',
                                            }}>
                                                We are here to help you. Fill out the form and our team will get back to you shortly.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={RegisterForm}
                                className={clicked ? "was-validated wpcf7-form init" : "wpcf7-form init"}
                                noValidate
                            >
                                <div className="row m-0">
                                    {/* Name */}
                                    <div className="col-md-6 py-2 p-0 p-md-2">
                                        <label className="font-italic font-weight-600 form-label text-secondary">
                                            Name <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input
                                            size="40"
                                            ref={nameBox}
                                            className="form-control py-3"
                                            placeholder="Enter Your Name"
                                            required
                                            maxLength={20}
                                            autoComplete="off"
                                        />
                                        <div className="invalid-feedback">Please provide your name.</div>
                                    </div>
                                    {/* Phone */}
                                    <div className="col-md-6 py-2 p-0 p-md-2">
                                        <label className="font-italic font-weight-600 form-label text-secondary">
                                            Phone <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input
                                            size="40"
                                            ref={phoneBox}
                                            placeholder="Enter Your Number"
                                            maxLength={10}
                                            required
                                            autoComplete="off"
                                            className="form-control py-3"
                                        />
                                        <div className="invalid-feedback">Please provide your number.</div>
                                    </div>
                                    {/* Email */}
                                    <div className="col-md-6 py-2 p-0 p-md-2">
                                        <label className="form-label text-secondary">
                                            Email <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <input
                                            size="40"
                                            ref={emailBox}
                                            type="email"
                                            className="form-control py-3"
                                            placeholder="Email Address"
                                            required
                                            autoComplete="off"
                                            maxLength={50}
                                        />
                                        <div className="invalid-feedback">Please provide your email.</div>
                                    </div>
                                    {/* Looking For */}
                                    <div className="col-lg-6 py-2 p-0 p-md-2">
                                        <label className="font-italic font-weight-600 form-label text-secondary">
                                            What Are You Looking For? <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <select
                                            ref={lookingBox}
                                            className="form-select py-3 custom-select-font"
                                            required
                                        >
                                            <option value="" disabled hidden>Select Purpose...</option>
                                            <option value="Website Developments">Website Developments</option>
                                            <option value="WordPress Developments">WordPress Developments</option>
                                            <option value=".NET Developments">.NET Developments</option>
                                            <option value="MERN Stack Developments">MERN Stack Developments</option>
                                        </select>
                                        <div className="invalid-feedback">Please select your purpose.</div>
                                    </div>
                                    {/* Message */}
                                    <div className="col-md-12 py-2 p-0 p-md-2">
                                        <label className="font-italic font-weight-600 form-label text-secondary">
                                            Message <span style={{ color: "red" }}>*</span>
                                        </label>
                                        <textarea
                                            cols="40"
                                            rows="4"
                                            autoComplete="off"
                                            className="form-control"
                                            ref={messageBox}
                                            placeholder="Enter Your Message"
                                            required
                                            maxLength={60}
                                        ></textarea>
                                        <div className="invalid-feedback">Please provide your message.</div>
                                    </div>
                                    {/* Submit */}
                                    <div className="col-md-12 py-2 p-0 p-md-2">
                                        <input
                                            className="border-0 border-radius-100px learn-more p-3 readon w-100"
                                            type="submit"
                                            value="Submit"
                                        />
                                    </div>
                                    <input type="hidden" ref={sourcePageBox} value={props.id} />
                                </div>
                                {isAlertVisible && (
                                    <div
                                        className="wpcf7-response-output mt-2 mb-2"
                                        style={{ backgroundColor: "#f5f6ff" }}
                                        aria-hidden="true"
                                    >
                                        {Question}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
