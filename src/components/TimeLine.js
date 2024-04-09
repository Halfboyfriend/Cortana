import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MyTimelineComponent = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2024 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Concept Development (Q1 - Q2):
        </h3>

        <p>
          Refine the concept of Cortana Coin, outlining key features and
          benefits. Conduct market research and gather feedback from potential
          users and stakeholders.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=" - 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          White Paper Publication (Q2):
        </h3>

        <p>
          Develop a comprehensive white paper detailing the vision, mechanics,
          and benefits of Cortana Coin. Engage with the community to solicit
          input and suggestions for improvement.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=" - 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Token Development (Q3):
        </h3>

        <p>
          Initiate the development of the Cortana Coin token, leveraging
          blockchain technology to ensure security, transparency, and
          decentralization. Collaborate with experienced developers and auditors
          to ensure the integrity of the token's codebase.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=" - 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Token Sale (Q4):</h3>

        <p>
          Launch the Cortana Coin token sale, offering investors and users the
          opportunity to acquire tokens at an initial price. Implement measures
          to ensure a fair and transparent token sale process, adhering to
          regulatory requirements and best practices.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=" - 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Listing on Exchanges (Q1 - Q2):
        </h3>

        <p>
          Secure listings on major cryptocurrency exchanges to increase
          liquidity and accessibility for Cortana Coin. Implement marketing and
          promotional campaigns to raise awareness and drive demand for the
          token.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=" - 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Community Building (Ongoing):
        </h3>

        <p>
          Foster a vibrant and engaged community around Cortana Coin,
          encouraging active participation and feedback. Establish communication
          channels, such as social media, forums, and newsletters, to keep the
          community informed and engaged.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=" - 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Partnerships and Integrations (Ongoing):
        </h3>

        <p>
          Explore strategic partnerships and collaborations with key players in
          the cryptocurrency and fintech industries. Seek opportunities to
          integrate Cortana Coin into existing platforms and applications,
          expanding its utility and reach.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date=" - 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Continuous Improvement (Ongoing):
        </h3>

        <p>
          Continuously monitor and evaluate the performance of Cortana Coin,
          soliciting feedback from users and stakeholders to identify areas for
          improvement. Implement updates and enhancements to ensure the
          long-term success and sustainability of the project.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default MyTimelineComponent;
