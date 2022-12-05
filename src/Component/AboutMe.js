import Profile from './images/Profile.jpg'

const style ={
    profilePic:{
        borderRadius:90, 
        display: "block", 
        marginRight: "auto", 
        marginLeft: "auto" 
    },
    aboutMeText: {
        textAlign: "textCenter"
    }
}
export default function AboutMe(){
    return(
        <div>
             <img className="text-center" style={style.profilePic} width="270px" src={Profile} alt="This is me"/>
             <div className='text-center my-2' style={{marginLeft: "30%", marginRight: "30%"}}>
                <p>
                Welcome to my little React page.
                </p>
                <p>
                    My name is Philip Huang, and I was born and raised in San Francisco.
                </p>

                <p>
                   I enjoy software development because of the incremental and modular nature of modern frameworks.  I just enjoy taking projects down to their simplest components and reusing them piece for piece to build up more complicated parts. 
                </p>
                <p>
                TODO:
                    Need to add more stuff about software engineering 
                </p>
                
                <br className=''/>
                <p>
                    My hobbies include video games, taking care of my shrimps, and DnD.  I appreciate the challenge many video games offer and enjoy the various ways they guide and help the player through subtle ways.  I keep a tank of 60ish shrimps where they grow, breed, and lay eggs within a short lifespan of 6 months.  I enjoy watch them change and develop over time, and seeing the bunch of them move around and interact with each other.  And finally I used to host a campaign for D&D for my friends in college, where I would build a world of monster and villains, heroes and kings where they would tell the stories of their characters.  I enjoyed watching them approach every challenge and overcome every hurdle.  I would want to host another someday when I get the time.  
                </p>
                   
             </div>
        </div>
       
    )
}