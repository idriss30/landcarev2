import React from "react";
import "./landing.scss";
import vet from "./landingAssets/vet.png";
import licenced from "./landingAssets/licenced.png";
import established from "./landingAssets/established.png";
import budget from "./landingAssets/budget.png";
import satisfaction from "./landingAssets/satisfaction.png";
import environment from "./landingAssets/environment.png";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import Form from "./form";
import Background from "../background.svg";
import Birds from "../components/birds/birds";
import { HashLink } from "react-router-hash-link";

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className="landing">
          <Birds />
          <div className="landing__container">
            <div className="landing__container-text">
              <h1> Professional Landscaping in central Mass</h1>
              <p>100% service guarantee</p>

              <Link to="/about">About us</Link>
              <HashLink smooth to={"/#contact-me"}>
                Contact us
              </HashLink>
            </div>
            <div className="landing__container-animation">
              <div className="landing__container-animation-image">
                <img src={Background} alt="background" />
              </div>
            </div>
          </div>
          <section className="section__one">
            <div className="section__one__container">
              <div className="section__one__container-text">
                <h2>RELIABLE SERVICE WITH QUALITY RESULTS</h2>

                <p>
                  <span>LandC@re </span>was built on customer service and
                  continue to grow through high standards of excellence.
                  Therefore, we stand behind our work with pride.
                </p>
                <p>
                  Our experts specialize in landscape maintenance and snow
                  removal. We are always ready to create outstanding experiences
                  for our clients and provide a service second to none.
                </p>
                <p>
                  We can work with you to design, install and maintain any new
                  or existing landscape.
                </p>
                <p>
                  We primarily cater to residential but also do select
                  commercial and multi-family properties. We also offer
                  enhancement services, seasonal color, irrigation, and
                  landscape lighting.
                </p>
              </div>
            </div>
          </section>

          <section className="section__two">
            <h3>What Makes us Unique</h3>

            <div className="section__two__container">
              <div className="section__two__container-group">
                <div>
                  <img src={established} alt="established" name="established" />
                </div>

                <p>established in 2014</p>
              </div>
              <div className="section__two__container-group second">
                <div>
                  <img src={environment} alt="environment" name="environment" />
                </div>

                <p>environment friendly</p>
              </div>
              <div className="section__two__container-group">
                <div>
                  <img src={licenced} alt="established" name="established" />
                </div>

                <p>Licenced professionals</p>
              </div>
              <div className="section__two__container-group second">
                <div>
                  <img src={vet} alt="veterans" name="veterans" />
                </div>

                <p>Owned by veterans</p>
              </div>
              <div className="section__two__container-group">
                <div>
                  <img
                    src={satisfaction}
                    alt="satisfaction"
                    name="satisfaction guarantee"
                  />
                </div>
                <p>Satisfaction Guarantee</p>
              </div>
              <div className="section__two__container-group second">
                <div>
                  <img src={budget} alt="budget" name="budget friendly" />
                </div>

                <p>Budget friendly</p>
              </div>
            </div>
            <div className="section__two__cta">
              <Link to="/about">Learn More</Link>
            </div>
          </section>

          <section
            className="get__in__touch"
            id="contact-me"
            ref={this.contactRef}
          >
            <div className="get__in__touch__container">
              <div className="get__in__touch__container-text">
                <h4>Get Started</h4>
                <p>
                  We'd love to hear from you. <br />
                  To find out about us and how we can make the landscaping
                  process pain-free, just get in touch.
                  <br />
                  We'll be happy to answer any questions and discuss your plans.
                  Contact us today!
                </p>

                <p>
                  <i className="fa fa-phone icons" aria-hidden="true">
                    <span> 508 444 9898</span>
                  </i>
                </p>
              </div>

              <div className="get__in__touch__container-form">
                <Form />
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Landing;
