import React from "react";
import { Link } from "gatsby";
import nav from "../data/navbar";
import "./LanguageSwitcher.scss";

const LanguageSwitcher = ({ slug }) => {
  const componentStyle = "LanguageSwitcher";
  let activeLanguage = "";
  let url = "";
  if (slug.startsWith("/en/")) {
    activeLanguage = "en";
  } else if (slug.startsWith("/al/")) {
    activeLanguage = "al";
  } else {
    activeLanguage = "gr";
  }

  return (
    <div className="nav-wrapper mt-2">
      <div className="sl-nav">
        <ul>
          <li>
            <i className={`sl-flag flag-${activeLanguage}`}>
              <div id="germany"></div>
            </i>
            <b className="ml-2">{activeLanguage}</b>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className="triangle"></div>
            <ul>  
              {nav.map((item) => {
                return (
                  <Link
                   key={item.lang}
                    className={`${componentStyle}-item${
                      activeLanguage === item.lang ? "-active" : "" 
                    }`}
                    to={activeLanguage !== 'gr' ? item.path + slug.substring(4) : item.path + slug.substring(1) }
                  >
                    <li>
                      <i className={`sl-flag flag-${item.lang}`}>
                        <div id="germany"></div>
                      </i>
                      <span className="active"> {item.lang}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
