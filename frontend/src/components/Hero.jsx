import { Link } from "react-router-dom";
import Card from "./Card";

function Hero() {
  const cardData = [
    {
      title: "Promise 1",
      text: "Details about Promise 1.",
      image:
        "https://i.abcnewsfe.com/a/7fe177b1-45f2-4741-8813-4ddb3a36f530/president-biden-ap-jef-241004_1728067249905_hpMain.jpg",
    },
    {
      title: "Promise 2",
      text: "Details about Promise 2.",
      image:
        "https://fortune.com/img-assets/wp-content/uploads/2024/09/GettyImages-2174056316-e1727285732484.jpg?w=1440&q=75",
    },
    {
      title: "Promise 3",
      text: "Details about Promise 3.",
      image:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/6EDE/production/_132928382_gettyimages-2071909768.jpg",
    },
    {
      title: "Promise 3",
      text: "Details about Promise 3.",
      image:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/6EDE/production/_132928382_gettyimages-2071909768.jpg",
    },
    {
      title: "Promise 3",
      text: "Details about Promise 3.",
      image:
        "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/6EDE/production/_132928382_gettyimages-2071909768.jpg",
    },
  ];

  return (
    <>
      <section
        className="hero bg-light text-center py-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-4 fw-bold mb-3">
            Welcome to Political Promises
          </h1>
          <p className="lead mb-4">
            Your platform to track and follow political commitments. Stay
            informed, stay engaged!
          </p>
          <Link to="/promises" className="btn btn-dark btn-lg">
            Explore Promises
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5">
          {cardData.map((value) => (
            <Card key={value.title} cardData={value} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
