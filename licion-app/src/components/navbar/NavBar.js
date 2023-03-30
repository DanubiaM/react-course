import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"



function NavBar(){

    return (
        <ul className={styles.navbar}>
            <li>
                <Link  to="/">Home</Link>
            </li>
            <li>
                <Link  to="/empresa">Busines Movie</Link>
            </li><li>
                <Link to="/contato">Contact Movie</Link>
            </li>

        </ul>

    )

}

export default NavBar