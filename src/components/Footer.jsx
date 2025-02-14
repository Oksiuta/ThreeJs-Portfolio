import React from "react";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-center text-white">
            Welcome to my portfolio website! I, Artem, not only an adept 3D Web
            & developer, am delighted to present my collaborative prowess. I
            have harnessed my expertise to construct an impressive
            JavaScript-based portfolio site. My deftness in JavaScript is
            evident in the visually alluring and functionally impeccable
            website, engendering a superlative user experience. Seamless
            navigation and interactive elements synergistically weave an
            engaging tapestry. My mastery of Kubernetes facilitated deployment
            on a scalable container orchestration platform, adeptly leveraging
            GitLab's CI/CD pipeline for automated scaling, thus ensuring
            unwavering performance amidst surges in traffic. Embracing perpetual
            growth, I ardently pursue emerging technologies to deliver
            pioneering solutions aligned with evolving industry exigencies.
            Delve into my projects, including the dynamic portfolio website
            crafted by me, and envision how my combined prowess can enrich your
            forthcoming endeavors.
            <a href="https://www.youtube.com/@javascriptmastery">
              {" "}
              Credit: Artem -JavaScript Mastery
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-16">
          <div className="text-left">
            {" "}
            {/* Add text-left class */}
            <div className="flex items-center mb-4">
              <FaHome className="text-white mr-2" size={20} />
              <div>
                <p className="text-white">Kyiv, Ukraine</p>
                <p className="text-white">
                  38 Mykhailo Boichuk Street, Kyiv, 02000.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <FaMailBulk className="text-white mr-2" size={20} />
              <h4 className="text-white">artem11oksiuta@proton.me</h4>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-white mr-2" size={20} />
              <h4 className="text-white">+38(066)-091-2695</h4>
            </div>
            <div className="flex items-center">
              <DiGithubBadge className="text-white mr-2" size={20} />
              <h4 className="text-white">github.com/Oksiuta/Oksiuta</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
