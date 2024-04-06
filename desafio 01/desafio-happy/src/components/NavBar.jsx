import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



const NavBar = () => {
return (
<Navbar
bg="danger"
variant="dark"
>
<Container className="justify-content-between">
<div>
<Link
to="/"
className="text-white ms-3 text-decoration-none"
>
🏠 Home
</Link>
<Link
to="/contacto"
className="text-white ms-3 text-decoration-none"
>
📒 Contacto 
</Link>

</div>
<Navbar.Brand className="mr-auto"> <strong>Happy Cake</strong> 🍰</Navbar.Brand>
</Container>
</Navbar>
);
};

export default NavBar