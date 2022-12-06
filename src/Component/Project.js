import DogRater from "./images/DogRater.PNG";
export default function Project(props) {
  return (
    <div className="card mx-auto my-2" style={{ width: "30rem" }}>
      <img className="class-img-top" src={props.img} alt="dog rater website" />
      <div className="card-body">
        <h3 className="text-center card-title">{props.title}</h3>

        <p className="text-center card-text">
          <a href="https://fetchdograter.herokuapp.com/" className="btn btn-primary">Let's Go</a>
        </p>
      </div>
    </div>
  );
}
