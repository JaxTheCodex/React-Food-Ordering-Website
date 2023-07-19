import React from "react";
import AboutImg from "../assets/images/item6.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
              Fresh, high-quality ingredients: We use only the freshest, highest-quality ingredients in our dishes. Our produce is delivered daily, and our meats and seafood are sourced from reputable suppliers.
            </p>
            <p>
              Authentic recipes: Our dishes are made with authentic recipes from the countries of origin. We have a team of experienced chefs who are passionate about cooking traditional dishes with the utmost care and attention to detail.
            </p>
            <a href="#" className="btn">
              Show more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
