import React from "react";
import { Link } from "gatsby";
import staticData from "../data/navbar";
import LanguageSwitcher from "./LanguageSwitcher";
import facebook from "../img/social/facebook_footer.svg";
import logo from "../img/logo.png";


const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    const filteredData = staticData.filter(
      (data) => data.lang === this.props.lang
    )[0];
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container mt-4">
          <div className="navbar-brand pb-2 mr-4">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Interreg" style={{ width: "175px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className={`navbar-start has-text-centered`}>
              {filteredData.nav.map((item) => (
                <Link className="navbar-item" key={item.title} to={item.href}>
                  {item.title}
                </Link>
              ))}
              <Link className="navbar-item" to="https://www.facebook.com/Alttour-Alternative-Tourism-106988367906271">
                <img src={facebook} alt="Facebok"  target="_blank"/>
              </Link>
            </div>
            <LanguageSwitcher slug={this.props.slug} />
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
