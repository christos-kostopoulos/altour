import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Navbar from "../components/Navbar";
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact({ data }) {
  const [state, setState] = React.useState({ isValidated: false });
  //   const { frontmatter: page } = data.page;
  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
  console.log(data);
  return (
    <Layout>
      {/* <Navbar lang={page.language} slug={data.page.fields.slug} /> */}
      <StaticImage
        src="../img/pool2.jpg"
        alt="contact"
        placeholder="blurred"
        objectFit={"cover"}
        layout="fullWidth"
        aspectratio={3 / 1}
      />
      <section
        className="section"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
      >
        <div className="container">
          <div className="content">
            {/* <FullWidthImage img={heroImage} /> */}
            <h1>Contact</h1>
            <div className="columns">
              <div className="column is-half">
                <h5>Program Management Contacts</h5>
                <p>
                  Υπουργείο Τουρισμού Λεωφόρος Αμαλίας 12, 105 57, Αθήνα
                  <br />
                  mailbox@mintour.gr <br />
                  +30 210 3736001 | +30 210 3736001
                </p>

                <h1>Useful links</h1>
                <a href="https://greece-albania.eu/" target={"_blank"}>
                  www.greece-albania.eu
                </a>
                <br />
                <br />
                <a
                  href="https://ec.europa.eu/regional_policy/en/"
                  target={"_blank"}
                >
                  https://ec.europa.eu/regional_policy/en/
                </a>
              </div>
              <div className="column is-half">
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"name"}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"text"}
                        name={"name"}
                        onChange={handleChange}
                        id={"name"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"email"}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"message"}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={"message"}
                        onChange={handleChange}
                        id={"message"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const ContactPageQuery = graphql`
  query ContactPageById($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        language
        title
      }
    }
  }
`;
