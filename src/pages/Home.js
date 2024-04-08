import React from "react";
import { Container } from "semantic-ui-react";
import "../App.css";
import logo from "../carta.jpg"

function Home() {
  return (
    <>
      <Container>
        <section className="py-5">
          <header>
            <span>
              <h1>CORTANA</h1>
            </span>

            <div className="list__content">
              <ul className="d-flex">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Socials</a>
                </li>
              </ul>
            </div>
          </header>
        </section>

        <section className="py-5">
          <div className="content">
            <div className="content__text">
             
              <h2>
              Introducing Cortana on BASE (Base-chain if it seems better use your imagination).
              </h2>
            </div>

            <div className="content__image">
              <img
              src={logo}
                alt="cortana"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Home;
