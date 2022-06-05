import "./styles/footer.module.css";

function Footer() {
    let year = new Date()
    return (
        <>
            <footer>
                <p>Copyright &#169; {year.getFullYear()}</p>
            </footer>
        </>
    );
}

export default Footer;