import Navigation from "../navigation/Navigation";
import { header } from './Header.module.css';

const Header = () => {
    return (
        <header className={header}>
            <Navigation />
        </header>
    );
}

export default Header;