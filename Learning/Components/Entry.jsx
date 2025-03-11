import marker from "../src/assets/marker.png";

export default function Entry(props) {
  return (
    <article className="entry">
      <div className="image-container">
        <img className="entry-image" src={props.entry.img.src} alt={props.entry.img.alt} />
      </div>
      <div className="info">
        <img className="marker" src={marker} alt="map marker icon" />
        <span className="country">{props.entry.country}</span>
        <a href={props.entry.googleLink}>View on Google Maps</a>
        <h2 className="entry-title"> {props.entry.name} </h2>
        <p className="trip-dates"> {props.entry.dates} </p>
        <p className="entry-text"> {props.entry.text} </p>
      </div>
    </article>
  );
}
