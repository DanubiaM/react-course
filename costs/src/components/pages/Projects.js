import {useLocation} from 'react-router-dom'
import Message from "../layout/Message"
import LinkButton from '../layout/LinkButtton'
import Container from '../layout/Container'
import Styles from './Projects.module.css'
import {useState, useEffect} from 'react'
import ProjectCard from '../project/ProjectCard'

function Projects(){

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        }).then(resp => resp.json() )
          .then(data =>{
            setProjects(data)
        })
        .catch((err) => console.log(err))
                
    },[])

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    return (
        <div className={Styles.project_container}>
            <div className={Styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>

            </div>    
            {message && <Message type="success" msg={message}/>}
            
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) =>(
                        <ProjectCard id= {project.id} 
                                     name={project.name} 
                                     budget={project.budget}
                                     category={project.category.name}
                                     key={project.id}
                                    >
                        </ProjectCard>
                    ))}
            </Container>
        </div>
    )
}

export default Projects