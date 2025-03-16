import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mohmadsahil Shaikh</h3>
        <p className="text-lg font-normal text-gray-400">
          FullStack/Android Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        If you have any questions, feedback, or would want to collaborate, please fill out the form on the right. I'd be delighted to hear from you if you want support, wish to discuss a project, or simply want to connect. Please submit your information and message, and I will respond as soon as possible.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <a href="mailto:ss4134928@gmail.com" className="text-lightText hover:underline">
                    ss4134928@gmail.com
                  </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a
            href="https://www.facebook.com//profile.php?id=100046591362935"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/GamerProhibited"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/mohmadsahil-shaikh-90131424a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft
