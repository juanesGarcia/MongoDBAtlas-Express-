import React from "react";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import './Footer.css';
export const Footer = () => {
  return (
    <div
      className="fo container-fluid  bg-secondary bg-gradient text-white d-flex justify-content-end"
      style={{ minHeight: "12rm" }}
    >
      <div className="container pt-3 pb-3">
        <div className="row ">
          <div className="col-6  ">
          <div className="mb-2 d-line ps-4 d-flex align-items-start">
                <h5>Contact</h5>
            </div>
            <div className="mb-2 d-line ps-4 d-flex align-items-start">
              <AiOutlineMail className="me-2 mt-1"></AiOutlineMail>
            
                juanesgym2018@gmail.com
           
            </div>
            <div className="mb-2 ps-4 d-flex align-items-start">
              <AiFillGithub className="me-2 mt-1"></AiFillGithub>
              <a href="https://github.com/juanesGarcia" className="text-white">
                juanesGarcia
              </a>
            </div>
            <div className="mb-2 ps-4 d-flex align-items-start">
              <BsPhoneFill className="me-2 mt-1"></BsPhoneFill>
              +57 3186699925
            </div>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
