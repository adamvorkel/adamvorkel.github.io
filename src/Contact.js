import React from "react";

const Contact = (props) => {
    return (
        <section id="Contact" className="contact dark App-section">
          <div className="container">
            <div className="content">
              <div className="section-heading">
                {/* <span className="tag line-before">Contact</span> */}
                <h2>Let's Get in Touch</h2>
              </div>
              <div className="details">
                <p>If you’re interested in getting in touch, feel free to contact me at any time.</p>
                <ul>
                  <li>082 465 3228</li>
                  <li><a href="mailto:adamvorkel@gmail.com">adamvorkel@gmail.com</a></li>
                </ul>
              </div>
              <div className="social-media-links">
                <ul>
                {props.links.map(l => (<li><a href={l.url} target="_blank" rel="noopener noreferrer">{l.name}</a></li>))}
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
};

export default Contact;