import React from "react";
import "../Css/Contact.css"
import { scrollToSection } from "../utils/ScrollUtils";
import {MailOutlined, InstagramOutlined, TwitterOutlined, CopyrightOutlined} from '@ant-design/icons'
export default function Contact() {
    return(
        <section className="contact" id="contact">
            <div className="footer-logo" onClick={() => scrollToSection("hero")}>
        <img src="/images/cat.svg" alt="logo" />
        <p className="brand">CATSCARF</p>
      </div>
      <div className="contact-icons">
         <span className="icon-circle"><MailOutlined /></span>
        <span className="icon-circle"><InstagramOutlined /></span>
        <span className="icon-circle"><TwitterOutlined /></span>
      </div>
      <h2 className="contact-text">A portion of every CatScarf goes to help animals in need</h2>
      <div className="footer-strip">
        <p><CopyrightOutlined/> 2025 CATSCARF</p>
      </div>
        </section>
    );
}