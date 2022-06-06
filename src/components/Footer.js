import * as React from "react";
import { Link } from "gatsby";
import sea_logo from "../img/footer/sea_logo.jpg";
import ministry from "../img/footer/ministry_gr.jpg";
import ministria from "../img/footer/ministria.jpeg";
import municipal from "../img/footer/municipalities.png";
import logo from "../img/logo.png";
import facebook from "../img/social/facebook_footer.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import navData from "../data/navbar";
import contactData from "../data/footer";

const Footer = () => {
  const path =
    typeof window !== "undefined" ? window.location.pathname.slice(1, 3) : "";
  let lang = path === "en" || path === "al" ? path : "gr";

  console.log(lang);

  const filteredNavData = navData.filter((data) => data.lang === lang)[0];
  const filteredContactData = contactData.filter(
    (data) => data.lang === lang
  )[0];

  return (
    <footer className="footer">
      <div className="content">
        <div className="container">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-3">
              <section className="menu" style={{ height: "100%" }}>
                <ul
                  className="menu-list has-text-centered-mobile is-flex is-flex-direction-column is-justify-content-space-between"
                  style={{ height: "100%" }}
                >
                  {filteredNavData.nav.map((item) => (
                    <li key={item.title}>
                      <Link className="has-text-weight-bold" to={item.href}>
                        {item.title}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <a
                      title="facebook"
                      target="_blank"
                      href="https://www.facebook.com/Alttour-Alternative-Tourism-106988367906271"
                    >
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: "2em", height: "2em" }}
                      />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-7">
              <section
                className="has-text-centered is-flex is-flex-direction-column is-justify-content-space-between"
                style={{ height: "100%" }}
              >
                <div className="has-text-weight-bold ">Contact info:</div>
                <p style={{ fontSize: "0.8rem" }}>
                  <small>{filteredContactData.contactTitle}</small>
                  <br />
                  <small>{filteredContactData.ministryTitle}</small>
                  <br />
                  <small>{filteredContactData.ministryAddress}</small>
                  <br />
                  <small>mailbox@mintour.gr</small>
                  <br />
                  <small>+30 210 3736001 | +30 210 3736001</small>
                </p>
                <hr
                  style={{
                    width: "50%",
                    margin: "0 auto",
                    marginTop: ".5rem",
                  }}
                />
                <div className="is-flex is-justify-content-center">
                  <Link
                    className="has-text-primary pr-1 pl-2 is-size-7 has-text-weight-bold"
                    to={`${
                      lang === "en" || lang === "al" ? "/" + lang : ""
                    }/gdpr`}
                  >
                    GDPR | COOKIES POLICY
                  </Link>
                </div>
              </section>
            </div>
            <div className="column is-2 has-text-centered-mobile">
              <Link to="/" title="Logo">
                <img src={logo} alt="Interreg" />
              </Link>
              <div className="is-flex pt-1">
                <Link to="/" title="Logo">
                  <img src={ministria} alt="sea logo" />
                </Link>
                <Link to="/" title="Logo">
                  <img
                    className="ministry-image"
                    src={ministry}
                    alt="ministry"
                  />
                </Link>
              </div>
              <div className="is-flex pt-1 pb-2">
                <Link to="/" title="Logo" style={{ width: "80%" }}>
                  <img src={municipal} alt="municipal" />
                </Link>
                <Link to="/" title="Logo" style={{ width: "20%" }}>
                  <img src={sea_logo} alt="sea logo" />
                </Link>
              </div>
              <p
                className="has-text-centered has-text-weight-bold pb-2"
                style={{ fontSize: "0.5rem" }}
              >
                The project is co-funded by the European Union and by National
                Funds of Greece and Albania
              </p>
            </div>
          </div>
          <p className="has-text-centered is-size-7 has-text-weight-light pb-2">
            This webpage has been produced with the financial assistance of the
            European Union. The content of the webpage are the sole
            responsibility of Beneficiary’s name and can in no way be taken to
            reflect the views of the European Union, the participating countries
            and the Managing Authority
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
