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
          CORTANA is an innovative project aiming to revolutionize the gaming
          industry by introducing gamers to the world of cryptocurrency. The
          platform bridges the gap between gamers and crypto, offering a
          seamless experience. With the integration of BASE, a cryptocurrency
          backed by ETH known for its high value and low fees, CORTANA allows
          gamers to enjoy their favorite games while exploring the lucrative
          realm of crypto, potentially enhancing their gaming experience and
          financial portfolio.
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
          <video autoPlay loop>
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
