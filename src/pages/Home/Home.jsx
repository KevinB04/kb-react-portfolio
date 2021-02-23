import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <main className="container">
        <section className="row">
          <div className="col-sm-12">
            <h1 className="display-4">About Me</h1>
            <hr />
            <img src="./src/images/profile-image.jpeg" className="m-1"></img>
            <p>
              {" "}
              <p>
                Thank you for visiting my page! I have recently acquired a new
                love for web development as I navigate through a full-stack web
                development boot camp at Georgia Tech. Before this endeavor, I
                dabbled in Hollywood with numerous credits in film and
                television. Credits include a few crime reenactment shows on
                Investigation Discovery, a scene with Ryan Gosling in First Man,
                and a small scene in Ant-Man!</p>
                <br></br>
                <p>Aside from film, I have recently began developing skills in
                woodworking in order to create cutting boards. A separate page
                for that will be coming soon!
              </p>
              <br></br>
              <p>Continue to the 'Portfolio' page to see some of my work!</p>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
