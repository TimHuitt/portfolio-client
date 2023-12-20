import { useState, useEffect } from 'react'
import { getProjects } from '../../utilities/projects-service'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
// import AutoComponent from 'auto-component'
import AutoComponent from '../../components/auto-component'

import "./Projects.css"

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const handleRequest = async () => {
    try {
      const projectsData = await getProjects()
      if (projectsData) {
        setProjects(projectsData)
      }
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleRequest()
  }, [])

  if (isLoading) {
    return <h1 key="load">Loading...</h1>
  } else {
    return (
      <div className='Projects'>
        
        <div style={{fontSize: '24px', fontWeight: 'bold', color: 'white', textDecoration: 'underline', textAlign: 'center'}}>
          The Coolest of the Cool
        </div>
        <AutoComponent />

        <div className="pb-24">
          {projects.map((p) => (
            <ProjectCard  key={p._id + "-card"} p={p}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects