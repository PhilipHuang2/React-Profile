import Project from './Project'
import DogRater from "./images/DogRater.PNG";
export default function Portfolio(){
    return(
        <div>
            <h1 className="text-center">Portfolio</h1>
            <Project title="Dog-Rater" img={DogRater} link="https://fetchdograter.herokuapp.com/"/>
        </div>
    )
}