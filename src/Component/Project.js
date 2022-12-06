import GitHub from './images/GitHub.png';

export default function Project(props) {
  return (
    <div className="card mx-auto my-2 mb-4 border-secondary border-5 border" style={{ width: "30rem", borderRadius: "5px" }}>
      <img className="class-img-top" src={props.img} alt="dog rater website" />
      <div className="card-body">
        <h3 className="text-center card-title">{props.title}</h3>

        <p className="text-center card-text">
        <a href={props.github}>
              <img src={GitHub} alt="Link to the GitHub repository"/>
            </a>
            {" "}
          <a href={props.link} className="btn btn-primary">Check it out!</a>
        </p>
      </div>
    </div>
  );
}
