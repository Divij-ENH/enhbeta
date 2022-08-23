import React, { useState } from "react";
import { ContactFormTitle } from "@/data";
import axios from "axios";

// const ContactForm = (stats) => {
//   const { subTitle, title, description } = ContactFormTitle;
//   return (
//     <section className="commonSection ContactPage">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12 text-center">
//             <h4 className="sub_title">{subTitle}</h4>
//             <h2 className="sec_title">{title}</h2>
//             <p className="sec_desc">{description}</p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
//             <form
//               action="https://formsubmit.co/b29061cfa93b3c8ee7e0aa92d21a7fc1"
//               method="post"
//               className="contactFrom"
//               id="contactForm"
//             >
//               <div className="row">
//                 <div className="col-lg-6 col-sm-6">
//                   <input
//                     className="input-form required"
//                     type="text"
//                     name="f_name"
//                     id="f_name"
//                     placeholder="First Name"
//                   />
//                 </div>
//                 <div className="col-lg-6 col-sm-6">
//                   <input
//                     className="input-form required"
//                     type="text"
//                     name="l_name"
//                     id="l_name"
//                     placeholder="Last Name"
//                   />
//                 </div>
//                 <div className="col-lg-6 col-sm-6">
//                   <input
//                     className="input-form required"
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Email Address"
//                   />
//                 </div>
//                 <div className="col-lg-6 col-sm-6">
//                   <input
//                     className="input-form"
//                     type="text"
//                     name="phone"
//                     id="phone"
//                     placeholder="Phone Number"
//                   />
//                 </div>
//                 <div className="col-lg-12 col-sm-12">
//                   <textarea
//                     className="input-form required"
//                     name="con_message"
//                     id="con_message"
//                     placeholder="Write Message"
//                   ></textarea>
//                 </div>
//               </div>
//               <button
//                 className="common_btn red_bg"
//                 type="submit"
//                 id="con_submit"
//               >
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default function Forms(stats) {
  const { subTitle, title, description } = ContactFormTitle;
  // Input Change Handling
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (event) => {
    event.preventDefault();

    alert("Form Submitted");
    inputs("");
    stats="done";

    // axios({
    //   // method: "POST",
    //   // url: "https://formbold.com/s/60zM3",
    //   // data: inputs,
    // })
    //   .then((r) => {
       
    //   })
    //   .catch((r) => {
    //     console.log("error");
    //   });
  };

  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form onSubmit={handleOnSubmit}>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    onChange={handleOnChange}
                    className="input-form required"
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={inputs.firstname}
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    onChange={handleOnChange}
                    className="input-form required"
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={inputs.lastname}
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    onChange={handleOnChange}
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    value={inputs.email}
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    onChange={handleOnChange}
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    value={inputs.phone}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    onChange={handleOnChange}
                    className="input-form required"
                    name="message"
                    id="message"
                    value={inputs.message}
                    placeholder="Write Message"
                  ></textarea>
                </div>
              </div>
              <button className="common_btn red_bg" type="submit">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

//export default ContactForm;
