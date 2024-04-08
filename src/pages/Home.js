import React from "react";
import { Container } from "semantic-ui-react";
import "../App.css";
import logo from "../carta.jpg"

function Home() {
  return (
    <>
     
        <section className="landing__page">

          <div className="container content">

            <h1>
              AI -
            </h1>

            <div className="content__image">
              <img
              src={logo}
                alt="cortana"
                className="img-fluid"
              />
            </div>

           <span> <h1>
              CORTANA
            </h1></span>

          </div>
          
        </section>

        <section className="py-5">
          <div className="content">
            <div className="content__text">
             
              <h2>
              Introducing Cortana on BASE (Base-chain if it seems better use your imagination).
              </h2>
            </div>

           
          </div>
        </section>
    </>
  );
}

export default Home;
