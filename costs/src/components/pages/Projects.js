import {useLocation} from 'react-router-dom'
import Message from "../layout/Message"
import LinkButton from '../layout/LinkButtton'
import Container from '../layout/Container'
import Styles from './Projects.module.css'
import Loading from '../layout/Loading'
import {useState, useEffect} from 'react'
import ProjectCard from '../project/ProjectCard'

function Projects(){
    console.log(Loading)

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(true)

    useEffect(()=>{
       setTimeout(()=>{
        fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        }).then(resp => resp.json() )
          .then(data =>{
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
                
       },3000)
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
                    {!removeLoading & <Loading/>}
                    {removeLoading & projects.length === 0 && (
                        <p>Não há projetos cadastrados</p>
                    )}

            </Container>
        </div>
    )
}

export default Projects