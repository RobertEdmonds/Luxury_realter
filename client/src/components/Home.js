import React, { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {
  const [homeArray, setHomeArray] = useState([]);
  const [homeImage, setHomeImage] = useState("");
  const [idNumber, setIdNumber] = useState(2);

  useEffect(() => {
    fetch("/home_images")
      .then((r) => r.json())
      .then((image) => setHomeArray(image));
  }, []);

  useEffect(() => {
    let myInterval = setInterval(() => {
      setIdNumber(idNumber + 1);
      if (idNumber < homeArray.length) {
        let check = homeArray
          .filter((image) => idNumber === image.id)
          .map((image) => image.img_url);
        setHomeImage(check[0]);
      } else if (idNumber === homeArray.length) {
        let second = homeArray
          .filter((image) => idNumber === image.id)
          .map((image) => image.img_url);
        setHomeImage(second[0]);
        setIdNumber(1);
      }
    }, 10000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      {homeImage.length > 0 ? (
        <div
          className="imageStyle"
          style={{ backgroundImage: `url(${homeImage})` }}
        >
          <br />
          <div className="writingBorder">
            <h1 className="imageWriting">YOUR FLORIDA DREAM HOME AWAITS</h1>
          </div>
          <div className="secondBorder">
            <h3 className="secondWriting">
              Luxury & Beach Realty makes it easy to find the home you’re
              looking for.
            </h3>
            <h3 className="secondWriting">
              Click on the button below and start your search today.
            </h3>
          </div>
        </div>
      ) : (
        <div
          className="imageStyle"
          style={{
            backgroundImage: `url(${
              homeArray
                .filter((image) => homeArray.length === image.id)
                .map((image) => image.img_url)[0]
            })`,
          }}
        >
          <br />
          <div className="writingBorder">
            <h1 className="imageWriting">YOUR FLORIDA DREAM HOME AWAITS</h1>
          </div>
          <div className="secondBorder">
            <h3 className="secondWriting">
              Luxury & Beach Realty makes it easy to find the home you’re
              looking for.
            </h3>
            <h3 className="secondWriting">
              Click on the button below and start your search today.
            </h3>
          </div>
        </div>
      )}
      <div className="bannerStyle">
        <h2 className="bannerWriting">
          A realtor is not a salesperson... they are a matchmaker
        </h2>
      </div>
      <div className="welcomeBanner">
        <h1 className="welcomeHOne">
          WELCOME TO LUXURY <span className="welcomeSpan">&</span> BEACH REALTY
        </h1>
        <h3 className="welcomeHThree">
          Extraordinary homes. Exceptional value. Unmatched peace of mind.
        </h3>
      </div>
      <div className="luxuryStatementStyle">
        <p style={{ width: "30rem", float: "left" }}>
          Whether you are buying or selling a home, Luxury & Beach Realty is
          passionate about delivering a truly exceptional experience. We’re a
          locally owned and operated brokerage dedicated to serving our
          community. Our agents are experts in the Naples Real Estate market
          because they live here, too. They’ll guide you through entire process,
          from preparing to list your home for sale, to marketing, to executing
          a purchase contract and all the way to closing.
        </p>
        <p style={{ width: "30rem", float: "right" }}>
          With extensive knowledge in residential real estate, commitment to
          customer service and industry-leading cybersecurity, you can feel
          confident in your decision to work with us. We are the best team for
          the job because we have your best interest at heart—always.{" "}
          <span style={{ color: "navy" }}>
            To connect with us today, call (239) 849-7109.
          </span>
        </p>
      </div>
    </>
  );
}

export default Home;
