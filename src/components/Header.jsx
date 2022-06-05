import Style from './styles/header.module.css'
import HighlightIcon from '@mui/icons-material/Highlight'

function Header() {
    return (
        <>
            <header>
                <nav>
                    <h1>
                        <HighlightIcon />
                        Keeper</h1>
                </nav>
            </header>
        </>
    );
}

export default Header;