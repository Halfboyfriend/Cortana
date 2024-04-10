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
import paper from "../images/paper.png";
import MyTimelineComponent from "../components/TimeLine";
import Tokenomics from "../components/Token";

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
          <a href="https://www.dextools.io/app/en/base/pair-explorer/0x913ee36000bfe0ba10043a9ff5ed0d4680d35962?t=1712774600718" target="_blank" rel="noreferrer">
            <img src={jup} alt="4" />
          </a>

          <a
            type="button"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            href="."
          >
            <img src={paper} alt="4" />
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
            <a
              href="https://basescan.org/address/0xCCC7E9B7a1E2Fa193683f23e23C495eCde3C4DB8"
              target="_blank"
              rel="noreferrer"
            >
              <Button fluid>Explorer</Button>
            </a>

            <br />

            <a
              href="https://app.uniswap.org/swap?outputCurrency=0xCCC7E9B7a1E2Fa193683f23e23C495eCde3C4DB8&chain=base"
              target="_blank"
              rel="noreferrer"
            >
              <Button fluid primary>
                Buy Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}

      <section className="container py-5">
        <Tokenomics />
      </section>

      {/* ROADMAP */}

      <section className="container py-5">
        <h2>Roadmap:</h2>
        <MyTimelineComponent />
      </section>

      <section className="container py-5 mt-5">
        <div className="about">
          <h1 className="text-center">
            "Cortana Social Network - Your Based AI in Crypto Space!"
          </h1>

          <p
            className="text-center mt-5"
            style={{ maxWidth: "500px", margin: "auto", fontSize: "16px" }}
          >
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
          <a href="https://www.dextools.io/app/en/base/pair-explorer/0x913ee36000bfe0ba10043a9ff5ed0d4680d35962?t=1712774600718" target="_blank" rel="noreferrer">
            <img src={jup} alt="4" />
          </a>
          <a
            type="button"
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            href="."
          >
            <img src={paper} alt="4" />
          </a>
        </div>
      </section>

      <section className="py-5">
        <hr />

        <footer className="container text-center">
          <p>
          Copyright © 2024 Cortana Coin. All rights reserved.
          </p>
        </footer>
      </section>

      <section>
        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div
              class="modal-content"
              style={{ backgroundColor: "#0f1111", color: "#fff" }}
            >
              <div className="p-5">
                <div class="modal-header">
                  <h2 class="modal-title"> Cortana Coin White Paper</h2>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <h3>Introduction:</h3>

                <p>
                  Welcome to the future of finance with Cortana Coin, a
                  revolutionary cryptocurrency poised to transform the digital
                  economy. Cortana Coin is not just another digital currency; it
                  represents a paradigm shift in how we perceive and utilize
                  cryptocurrencies. Built on the principles of transparency,
                  security, and decentralization, Cortana Coin aims to empower
                  users with a reliable store of value and efficient means of
                  exchange. This white paper outlines the core concepts,
                  mechanics, and benefits of Cortana Coin, illustrating its
                  potential to redefine the landscape of decentralized finance.
                </p>
                <h3>Concept</h3>
                <p>
                  Cortana Coin introduces a novel approach to cryptocurrency
                  management, prioritizing stability and sustainability. At its
                  core, Cortana Coin is designed to provide users with a
                  versatile and reliable digital asset that can be seamlessly
                  utilized for various purposes, including peer-to-peer
                  transactions, remittances, and store of value. Unlike
                  traditional cryptocurrencies, Cortana Coin places a strong
                  emphasis on maintaining a stable floor price through a
                  strategic reserve mechanism. This mechanism, coupled with
                  incremental token burns over time, aims to enhance the
                  long-term value proposition of Cortana Coin, thereby fostering
                  confidence and trust among investors and users.
                </p>

                <h3>Mechanics:</h3>
                <p>
                  <ul>
                    <li>
                      Reserve Mechanism: Cortana Coin implements a unique
                      reserve mechanism to maintain price stability and enhance
                      value over time. Initially, 70% of the total coin supply
                      is held in reserve, serving as a foundation to support the
                      floor price of the cryptocurrency. A percentage of the
                      total supply will be held in reserve to ensure that the
                      floor price remains stable, facilitate controlled token
                      burns, Marketing campaigns, and for listing on centralized
                      exchanges (CEXs).
                    </li>

                    <li>
                      Incremental Burns: Over time, portions of the reserved
                      Cortana Coins will be systematically burned in
                      predetermined increments. This strategic approach to token
                      burning reduces the overall supply of Cortana Coins
                      circulating in the market, thereby increasing scarcity and
                      driving up the value of the remaining coins.
                    </li>

                    <li>
                      Value Enhancement: By gradually reducing the circulating
                      supply through controlled burns, Cortana Coin aims to
                      create scarcity and stimulate demand among investors and
                      users. This process not only stabilizes the floor price
                      but also enhances the long-term value proposition of the
                      cryptocurrency. Benefits:
                    </li>

                    <li>
                      Price Stability: The reserve mechanism, coupled with
                      incremental burns, ensures a stable floor price for
                      Cortana Coin, instilling confidence in its value and
                      reducing market volatility.
                    </li>

                    <li>
                      Value Appreciation: Through controlled token burns,
                      Cortana Coin seeks to increase scarcity and drive up the
                      value of the remaining coins, providing investors with the
                      potential for long-term capital appreciation.
                    </li>

                    <li>
                      Economic Sustainability: The strategic management of the
                      reserve and token burns promotes economic sustainability
                      by aligning supply dynamics with market demand, thereby
                      fostering a healthy and vibrant ecosystem for Cortana
                      Coin.
                    </li>
                  </ul>
                </p>

                <h3> Conclusion: </h3>
                <p>
                  Cortana Coin's innovative approach to reserve management and
                  incremental burns demonstrates a commitment to long-term value
                  creation and sustainability. Join us on this journey as we
                  harness the power of blockchain technology to redefine the
                  future of finance with Cortana Coin.
                </p>

                <div class="modal-footer">
                  <a href="/">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
