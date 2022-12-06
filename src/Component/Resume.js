import resume from '../Files/Resume.docx';

const frontEnd = ["Javascript", "Html", "CSS", "Bootstrap", "React"]
const backEnd = ["Node JS", "Mysql", "MongoDB", "Express"]
    

export default function Resume(){
    return(
        <div>
            <h1 className="text-center">Resume</h1>
            <p className='text-center'>Download my <a download="PhilipHuangResume.docx" href={resume}>Resume</a> </p>
            <h2 className='text-center'>Front end Proficiencies</h2>
            <ul className='text-center'>
                {frontEnd.map((skill)=>{
                    return (<li>{skill}</li>)
                })}
            </ul>
            <h2 className='text-center'>Back End Proficiencies</h2>
            <ul className='text-center'>
                {backEnd.map((skill)=>{
                    return (<li>{skill}</li>)
                })}
            </ul>
        </div>
        
    )
}