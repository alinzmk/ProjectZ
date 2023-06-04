import './App.jsx';
import "./App.css";
import { Link, NavLink} from 'react-router-dom';

function Navbar() {
return (
    <div >
        <nav class="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
                <Link class="navbar-brand " to="/ProjectZ">PROJECT Z</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                            <NavLink className="nav-link" to="/ProjectZ/Story">Story</NavLink>
                    </li>
                    <li class="nav-item">
                            <NavLink className="nav-link" to="/ProjectZ/WhoAreWe">Who Are We</NavLink>
                    </li>
                    <li class="nav-item">
                            <NavLink className="nav-link" to="/ProjectZ/Documentation">Documentation</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
);
}
export default Navbar;