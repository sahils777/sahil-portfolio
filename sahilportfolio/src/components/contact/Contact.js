import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!username || !email || !message || !emailValidation) {
      setErrMsg("All fields are required!");
      return;
    }

    setErrMsg("");

    const slackMessage = {
      text: `📩 *New Contact Form Submission* 📩\n\n*Name:* ${username}\n*Email:* ${email}\n*Message:* ${message}`,
    };

    try {
      const response = await fetch("https://sahilportfolio-lyart.vercel.app/api/send-to-slack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackMessage),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Slack API Response:", data);

      if (response.ok) {
        setSuccessMsg(`Thank you ${username}, your message has been sent to Slack!`);
        setUsername("");
        setEmail("");
        setMessage("");
      } else {
        setErrMsg("Failed to send message.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setErrMsg("Something went wrong. Check your backend and try again.");
    }
  };


  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Connect With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 text-center text-orange-500 text-base animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 text-center text-green-500 text-base animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                <input onChange={(e) => setUsername(e.target.value)} value={username} className="contactInput" type="text" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="contactInput" type="email" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="contactTextArea" cols="30" rows="8"></textarea>
              </div>
              <div className="w-full">
                <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
