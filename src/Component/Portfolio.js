import Project from "./Project";
import projects from "../Files/projects";
export default function Portfolio() {
  return (
    // <div>
    //     <h1 className="text-center">Portfolio</h1>
    //     <Project title="Dog-Rater" img={DogRater} link="https://fetchdograter.herokuapp.com/"/>
    // </div>
    <div>
      <h1 className="text-center">Portfolio</h1>
      {projects.map((project) => {
        return (
          <Project
            title={project.title}
            img={project.img}
            link={project.link}
            github={project.github}
          />
        );
      })}
    </div>
  );
}
