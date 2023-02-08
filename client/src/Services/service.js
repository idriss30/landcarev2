import React from "react";

import "./service.scss";
import Footer from "../components/footer/footer";

import lush from "../svgs/lush.jpg";
import green from "../svgs/green.jpg";
import healthy from "../svgs/healthy.jpg";
class Services extends React.Component {
  render() {
    return (
      <div className="top__service">
        <section className="service">
          <div className="service__container">
            <div className="service__title">
              <h1>Our Services</h1>
              <h2>
                Whether you need full-time lawn care services or a one-time
                cleanup, LandCare offers a number of landscaping services in
                Central Mass
              </h2>
            </div>
            <div className="service__content">
              <div className="service__content-group">
                <div>
                  <img src={green} alt="green services" name="green" />
                </div>

                <h3>Green</h3>
                <p>
                  Our basic lawn care package to keep your yard looking neat and
                  clean. This includes Mowing, Edging - to give your landscape a
                  sculpted look, Weed Whacking - to trim areas the lawn mower
                  cannot reach, and Blower Cleanup - to any debris from your
                  lawn care service.
                </p>
              </div>
              <div className="service__content-group healthy">
                <img src={healthy} alt="service__image" name="service__image" />
                <h3>Healthy</h3>
                <p>
                  Our plus lawn care package to help increase the overall health
                  and appearance of grassy areas. This includes the Green
                  Package plus Weed Control - to restrict their ability to
                  hinder the growth of your grass, and Organic Fertilizer - to
                  promote growth, health, and color of your grass.
                </p>
              </div>
              <div className="service__content-group">
                <img src={lush} alt="service__image" name="service__image" />
                <h3>Lush</h3>
                <p>
                  Our premium lawn care package to help you achieve a healthy,
                  lush, green lawn. This includes the Green and Healthy Packages
                  plus Lime Soil Conditioning - to raise your soil's pH to help
                  your plants and lawn flourish, and Core-Aeration - to reduce
                  soil compaction which will allow oxygen, water, and nutrients
                  to penetrate into the soil.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Services;
