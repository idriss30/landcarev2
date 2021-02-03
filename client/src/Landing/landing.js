import React from "react";
import "./landing.scss";
import Button from "../components/button/button";
import LottieAnimation from "../components/LottieComponent/lottieComponent";
import forestJson from "./landingsvg/forest.json";
import landingJson from "./landingsvg/landing.json";
import vet from "./landingAssets/vet.png";
import licenced from "./landingAssets/licenced.png";
import established from "./landingAssets/established.png";
import budget from "./landingAssets/budget.png";
import satisfaction from "./landingAssets/satisfaction.png";
import environment from "./landingAssets/environment.png";
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";
import Form from "./form";

class Landing extends React.Component {
  render() {
    return (
      <>
        <div className="landing">
          <div className="landing__container">
            <div className="landing__container-text">
              <h1> Professional Landscaping in central Mass</h1>
              <p>100% service guarantee</p>
              <Button scss={"btn"}>
                <Link to="/about">About us</Link>
              </Button>
              <Button scss={"btn"}>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
            <div className="landing__container-animation">
              <LottieAnimation source={forestJson} looping={false} />
            </div>
          </div>
          <section className="section__one">
            <div className="section__one__container">
              <div className="section__one__container-animation">
                <LottieAnimation source={landingJson} looping={true} />
              </div>
              <div className="section__one__container-text">
                <h2>RELIABLE SERVICE WITH QUALITY RESULTS</h2>

                <p>
                  <span>LandC@re </span>was built on customer service and
                  continue to grow through high standards of excellence.
                  Therefore, we stand behind our work with pride.
                </p>
                <p>
                  Our experts specialize in landscape maintenance We are always
                  ready to create outstanding experiences for our clients and
                  provide a service second to none.
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
              <div className="section__two__container-group">
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
              <div className="section__two__container-group">
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
              <div className="section__two__container-group">
                <div>
                  <img src={budget} alt="budget" name="budget friendly" />
                </div>

                <p>Budget friendly</p>
              </div>
            </div>
            <Button scss="btn">
              <Link to="/about">Learn More</Link>
            </Button>
          </section>

          <section className="get__in__touch">
            <div className="get__in__touch__container" id="contact">
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
