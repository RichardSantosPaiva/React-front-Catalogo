import './Sidebar.css'
import { Link } from 'react-router-dom'

export default props => 
    <aside>
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/catalogo">Catálogo</Link>
                </li>
            </ul>
        </nav>
    </aside>