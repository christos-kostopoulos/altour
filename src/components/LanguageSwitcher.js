import React from "react";
import { Link } from "gatsby";
import nav from "../data/navbar";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = ({ slug }) => {
  const componentStyle = "LanguageSwitcher";
  let activeLanguage = slug.startsWith("/en/") ? "en" : "gr";
  let url = slug.startsWith("/en/")
    ? slug.replace("/en/", "/")
    : slug.replace("/", "/en/");
  return (
    <div className="nav-wrapper">
      <div className="sl-nav">
        <ul>
          <li>
            <i className={`sl-flag flag-${activeLanguage}`}>
              <div id="germany"></div>
            </i>
            <b>{activeLanguage}</b>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="triangle"></div>
            <ul>
              {nav.map((item) => (
                <li>
                  <Link
                    className={`${componentStyle}-item${
                      activeLanguage === item.lang ? "-active" : ""
                    }`}
                    to={url}
                  >
                    <i className={`sl-flag flag-${item.lang}`}>
                      <div id="germany"></div>
                    </i>
                    <span className="active"> {item.lang}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
