import { Link } from 'react-router-dom'
import Styles from './ProjectCard.module.css'

function ProjectCard({id, name, budget, category, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }


    return (
    <div className={Styles.project_card}>
        <h4>{name}</h4>
        <p>
            <span>Orçamento:</span> R${budget}
        </p>
        <p className={Styles.category_text}>
            <span className={`${Styles[category.toLowerCase()]}`}></span> {category}
        </p>
        <div className={Styles.project_card_actions}>
           <Link to={`/project/`+id}>
           <p>Editar</p>
           
           </Link>
            <button onClick={remove}>
            <p>Remover</p>

            </button>
        </div>
    </div>
    );
}

export default ProjectCard