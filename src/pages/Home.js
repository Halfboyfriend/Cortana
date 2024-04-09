import React from "react";
import { Container } from "semantic-ui-react";
import "../App.css";
import logo from "../carta.jpg";
import jup from "../images/jup.jpg";
import dex from "../images/dex.png";
import discord from "../images/discord.png";
import tg from "../images/tg-logo.png";
import x from "../images/x-logo.png";
import intro from "../images/intro.mp4";

function Home() {
  return (
    <>
      <section className="landing__page">
        <div className="container content">
          <h1>AI -</h1>

          <div className="content__image">
            <img src={logo} alt="cortana" className="img-fluid" />
          </div>

          <span>
            {" "}
            <h1>CORTANA</h1>
          </span>
        </div>
      </section>

      <section className="container py-5">
        <p className="content__body">
          Welcome to our innovative project that seeks to revolutionize the
          gaming industry by bringing gamers into the exciting world of
          cryptocurrency. Our platform aims to bridge the gap between gamers and
          crypto, offering a seamless and rewarding experience for all. One of
          the key aspects of our project is the integration of BASE, a
          cryptocurrency backed by ETH, renowned for its high value and low
          transaction fees. By joining our platform, gamers can not only enjoy
          their favorite games but also delve into the lucrative realm of
          crypto, potentially enhancing their gaming experience and financial
          portfolio.
        </p>
      </section>

      <section className="container py-1">
        <div className="socials">
          <a href="https://x.com/CortanaCoin?t=4GFBZgpW0JxqvxbLXPh2Ww&s=08">
            {" "}
            <img src={x} alt="4" />
          </a>
          <a href="https://t.me/+Q5M_PO8Tfms2ZDBh">
            <img src={tg} alt="4" />
          </a>
          <a href="/">
            <img src={discord} alt="4" />
          </a>

          <a href="/">
            <img src={dex} alt="4" />
          </a>
          <a href="/">
            <img src={jup} alt="4" />
          </a>
        </div>
      </section>

      <section className="container py-5 mt-5">
        <div className="about">
          <h1 className="text-center">
            "Why Choose Cortana? – Unleash Your Unique Voice in the Crypto
            Landscape"
          </h1>

        
        </div>
        <div className="text-center mt-5 intro__vide">
         <video autoPlay loop muted>
            <source src={intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         </div>
      </section>

      <section className="container py-5">
        <div className="socials">
          <a href="https://x.com/CortanaCoin?t=4GFBZgpW0JxqvxbLXPh2Ww&s=08">
            {" "}
            <img src={x} alt="4" />
          </a>
          <a href="https://t.me/+Q5M_PO8Tfms2ZDBh">
            <img src={tg} alt="4" />
          </a>
          <a href="/">
            <img src={discord} alt="4" />
          </a>

          <a href="/">
            <img src={dex} alt="4" />
          </a>
          <a href="/">
            <img src={jup} alt="4" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
