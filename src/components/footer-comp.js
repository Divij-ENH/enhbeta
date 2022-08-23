import React from "react";
import { LogoImage } from "@/data";


const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              
                <img src={light} alt=""  width="100" height="150"/>
              
              <p>
                Welcome to our web design agency. Lorem ipsum is simply free
                text dolor sit amet consectetur adipisicing elit. Tempore
                corrupti temporibus fuga earum asperiores, alias excepturi sit
                mpedit fugit laudantium.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                #207, Arcade Building, AL Garhoud
                <br />
                Dubai, United Arab Emirates
              </p>
              <p>Phone : <a href="tel:info@enhmedia.com">+971 42 390 828</a></p>
              <p>
                Email : <a href="mailto:info@enhmedia.com">info@enhmedia.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="https://www.instagram.com/enhmedia/">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/enhmedia">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/enhmedia">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by {""}
              ENH Media
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
