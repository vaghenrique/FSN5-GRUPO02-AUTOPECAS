import "@styles/Components/HeaderMenor/HeaderMenor.css"
import logo from "@assets/img/logo.svg"
import { Link } from "react-router-dom";

function HeaderMenor() {

  return (
    <>
      <header>
        <nav className="nav-menor">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </nav>
      </header>
    </>
  );
}

export default HeaderMenor
