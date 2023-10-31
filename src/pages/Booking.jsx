import React, { useRef } from "react";
import "@dotlottie/player-component";
import FooterTwo from "./FooterTwo";
import emailJs from "@emailjs/browser";
import { LazyLoadImage } from "react-lazy-load-image-component";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Booking() {
  const form = useRef();
  const serviceId = process.env.CONTACT_SERVICE_ID2;
  const templateId = process.env.CONTACT_TEMPLATE_ID2;
  const publicKey = process.env.CONTACT_PUBLIC_KEY2;

  const sendEmail = (e) => {
    e.preventDefault();

   
    emailJs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
        toast.success("Well done");
      },
      (error) => {
        console.log(error.text);
        toast.error("not submitted");
      }
    );
  };
  return (
    <>
      <div className="grid-row-2  grid bg-white dark:bg-black  ">
        <div className=" mt-14 justify-center p-10 ">
          <h1 className="  text-center text-2xl font-extrabold  dark:text-white ">
            Book an appointment
          </h1>
          <p className=" p-3 text-center text-lg  dark:text-white">
            Get an appointment with our experienced Stylists & therapists
          </p>
        </div>

        <div className="grid md:grid-cols-2 ">
          {" "}
          <div className="m-3 items-center">
            <LazyLoadImage
              className=" left-0 top-0 -z-10 h-full w-full object-cover"
              src="/img/book.jpg"
              alt=""
            />
          </div>{" "}
          <div className="flex items-center justify-center">
            <form
              className=" w-2/3 justify-center "
              ref={form}
              onSubmit={sendEmail}
            >
              {" "}
              <div className="">
                {" "}
                <label
                  htmlFor="name"
                  className="  m-3 block text-base font-medium text-[#07074D] dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-blue-gray-900 bg-white p-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="  mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-blue-gray-900 bg-white p-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="  mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-blue-gray-900 bg-white p-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="  mb-3 block text-base font-medium text-[#07074D] dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="w-full rounded-md border border-blue-gray-900 bg-white p-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      className="w-full rounded-md border border-blue-gray-900 bg-white p-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button type='submi'className= "  hover:shadow-form w-full rounded-md bg-[#6A64F1] p-2 px-8 text-center text-base font-semibold text-white outline-none dark:text-white">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

export default Booking;
