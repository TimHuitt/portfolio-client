import { Link } from 'react-router-dom'
import "./Resume.css"
import resumeImage from '../../assets/resume.png'



const Resume = () => {
  const resume_url = "https://docs.google.com/document/d/1_sAfRg1CnfYK6I2_q3yoDlR0f7ZbxTHAT0Y6fEnLhyI/edit?usp=sharing"
  return (
    <div className="Resume">
      <Link to={resume_url} target="_blank" rel="noopener noreferrer" title="Open in Google Docs">
        <div className="download">
          <button>
            Open PDF
          </button>
        </div>
      </Link>
      <div className="resume-container">
        <img src={resumeImage} />
      </div>
      <div className='spacer'>
        
      </div>
    </div>
  )
}

export default Resume
