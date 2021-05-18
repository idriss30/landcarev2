import React from "react";

import "./service.scss";
import Footer from "../components/footer/footer";
import lush from "./serviceAssets/lush.svg";

import healthy from "./serviceAssets/healthy.svg";
import ScrollAnimation from "react-animate-on-scroll";
import LandingJson from "../Landing/landingsvg/landing.json";
import Lottie from "react-lottie-player";
class Services extends React.Component {
  render() {
    return (
      <div className="top__service">
        <ScrollAnimation animateIn="animated__animate animate__slideInUp">
          <section className="service">
            <div className="service__container">
              <div className="service__title">
                <h1>Our Services</h1>
                <h2>
                  Whether you need full-time lawn care services or a one-time
                  cleanup, Lawn Guy Pro offers a number of landscaping services
                  in Central Mass
                </h2>
              </div>
              <div className="service__content">
                <div className="service__content-group">
                  <div>
                    <Lottie
                      loop
                      animationData={LandingJson}
                      play
                      style={{ maxWidth: "100%", height: "74%" }}
                      rendererSettings={{ preserveAspectRatio: "none" }}
                    />
                  </div>

                  <h4>Green</h4>
                  <p>
                    Our basic lawn care package to keep your yard looking neat
                    and clean. This includes Mowing, Edging - to give your
                    landscape a sculpted look, Weed Whacking - to trim areas the
                    lawn mower cannot reach, and Blower Cleanup - to any debris
                    from your lawn care service.
                  </p>
                </div>
                <div className="service__content-group">
                  <img
                    src={healthy}
                    alt="service__image"
                    name="service__image"
                  />
                  <h4>Healthy</h4>
                  <p>
                    Our plus lawn care package to help increase the overall
                    health and appearance of grassy areas. This includes the
                    Green Package plus Weed Control - to restrict their ability
                    to hinder the growth of your grass, and Organic Fertilizer -
                    to promote growth, health, and color of your grass.
                  </p>
                </div>
                <div className="service__content-group">
                  <img src={lush} alt="service__image" name="service__image" />
                  <h4>Lush</h4>
                  <p>
                    Our premium lawn care package to help you achieve a healthy,
                    lush, green lawn. This includes the Green and Healthy
                    Packages plus Lime Soil Conditioning - to raise your soil's
                    pH to help your plants and lawn flourish, and Core-Aeration
                    - to reduce soil compaction which will allow oxygen, water,
                    and nutrients to penetrate into the soil.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <Footer />
      </div>
    );
  }
}

export default Services;
