import "../sass/style.scss"; // Import the CSS file

function Card({ cardData }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={cardData.image}
        className="card-img-top"
        alt={cardData.title}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title mb-3">{cardData.title}</h5>{" "}
        {/* Adds gap below title */}
        <p className="card-text">{cardData.text}</p>
        <a href={cardData.link} className="btn btn-dark">
          🤝 Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
