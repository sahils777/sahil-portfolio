import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaFilePdf } from "react-icons/fa";
import { SiJavascript, SiFigma, SiAngular } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiAngular />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
          <div>
            <h2 className="text-base uppercase font-titleFont mb-5">
              CV & Resume
            </h2>
            <a
              href="assets/C.V..pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFilePdf title="View C.V." />
            </a>

            <a
              href="assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bannerIcon"
            >
              <FaFilePdf title="View Resume" />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media
