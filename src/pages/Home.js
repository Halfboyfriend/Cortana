import React from "react";
import { Button } from "semantic-ui-react";
import "../App.css";
import logo from "../carta.jpg";
import jup from "../images/jup.jpg";
import dex from "../images/dex.png";
import discord from "../images/discord.png";
import tg from "../images/tg-logo.png";
import x from "../images/x-logo.png";
import intro from "../images/intro.mp4";
import base from "../images/base.png";
import bs from "../images/baseLogo.jpg";

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

      <section className="container int__welc py-5">
        <img src={base} alt="base" className="img-fluid" />
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
          <a
            href="https://x.com/CortanaCoin?t=4GFBZgpW0JxqvxbLXPh2Ww&s=08"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={x} alt="4" />
          </a>
          <a
            href="https://t.me/+Q5M_PO8Tfms2ZDBh"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tg} alt="4" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <img src={discord} alt="4" />
          </a>

          <a
            href="https://dexscreener.com/base/0x913ee36000bfe0ba10043a9ff5ed0d4680d35962"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dex} alt="4" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
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
          <video controls>
            <source src={intro} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>


      <section className="container">
        <div className="trade">

          <h1>Trade Cortana</h1>

          <div className="d-flex content mt-5">
            <img src={bs} alt="." />
            <div>
            <h3>Base</h3>
            <p>0xCCC7E9B7a1E2Fa193683f23e23C495eCde3C4DB8</p>
            </div>
          </div>

          <div className="content">
          <a href="https://basescan.org/address/0xCCC7E9B7a1E2Fa193683f23e23C495eCde3C4DB8" target="_blank" rel="noreferrer">
            <Button fluid>
              Explorer
            </Button>
            </a>

            <br/>

            <a href="https://app.uniswap.org/swap?outputCurrency=0xCCC7E9B7a1E2Fa193683f23e23C495eCde3C4DB8&chain=base" target="_blank" rel="noreferrer">
            <Button fluid primary>
              Buy Now
            </Button>
            </a>


          </div>

        </div>
      </section>





      <section className="container py-5 mt-5">
        <div className="about">
          <h1 className="text-center">
            "Cortana Social Network - Your Based AI in Crypto Space!"
          </h1>

          <p className="text-center mt-5">
            Want to stay updated with the latest news? Join our social media
            communities! With a simple click, you can join the Cortana
            community: Follow us on Twitter for regular updates or join our
            Telegram channel for engaging discussions.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="socials">
          <a
            href="https://x.com/CortanaCoin?t=4GFBZgpW0JxqvxbLXPh2Ww&s=08"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={x} alt="4" />
          </a>
          <a
            href="https://t.me/+Q5M_PO8Tfms2ZDBh"
            target="_blank"
            rel="noreferrer"
          >
            <img src={tg} alt="4" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <img src={discord} alt="4" />
          </a>

          <a
            href="https://dexscreener.com/base/0x913ee36000bfe0ba10043a9ff5ed0d4680d35962"
            target="_blank"
            rel="noreferrer"
          >
            <img src={dex} alt="4" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <img src={jup} alt="4" />
          </a>
        </div>
      </section>

      <section className="py-5">
        <hr />

        <footer className="container text-center">
          <p>
            © 2024 Cortana- Leading the AI in Crypto. All rights reserved, but
            we offer free belly rubs!
          </p>
        </footer>
      </section>
    </>
  );
}

export default Home;
