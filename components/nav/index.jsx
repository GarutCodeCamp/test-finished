const Navbar = ({children, position}) => {
    return(
        <nav className={`navbar navbar-expand-sm navbar-dark bg-dark shadow ${position}`}>
            <div className="container-fluid">
                {children}
            </div>
        </nav>        
    )
}

export default Navbar;