import {useEffect, useState} from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input.js';
import Select  from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() =>{
        fetch('http://localhost:5000/categories',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        console.log(project)
    } 
    function handleCategory(e){
        setProject({...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
        console.log(project)
    }

    return (
        <form onSubmit={submit} className={styles.form}> 
            <div>
                <Input
                    type="text"
                    text="Nome Projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value = {project.name ? project.name : ''}
                />
            </div>
            <div>
            <Input
                    type="number"
                    text="Orçamento do Projeto"
                    name="budget"
                    placeholder="Insira o orçamento total"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                />
            </div>
            <Select name="category_id" 
                    text="Selecione a categoria" 
                    handleOnChange={handleCategory} 
                    options={categories} 
                    value={project.category ? project.category.id : '' } />
            <SubmitButton text={btnText}/>
        </form>
    );

}

export default ProjectForm;