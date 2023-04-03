import React, {useState} from "react";
import Cookies from 'universal-cookie';
import './navbar.css'
const cookies = new Cookies();
const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    const cerrarSesion=()=>{
        cookies.remove("nombreusuario",{path: "/"});
        cookies.remove("id", {path: "/"});
        cookies.remove("token", {path: "/"});
        cookies.remove("rol",{path: "/"});
        window.location.href='/Login'
      }

    return(
        <div class="logo-menu">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>

            <div className={menu_class}>
                <a href="/"><div>Inicio</div></a>
                <a href="/login"><div>Iniciar Sesión</div></a>
                <a href="/Create_user"><div>Registrarse</div></a>
                { cookies.get('rol')=="ADMINISTRADOR" &&
                  <a href="/usuarios"><div>Usuarios</div></a>
                }
                { cookies.get('nombreusuario') &&
                <button onClick={()=>cerrarSesion()}>Cerrar Sesión ( {cookies.get('nombreusuario')} )</button>}
                <hr/>
                <a href="/servicios/salones"><div class="flotar">Salones</div></a>
                <a href="/servicios/comida"><div class="flotar">Comida</div></a>
                <a href="/servicios/musica"><div class="flotar">Música</div></a>
                <a href="/servicios/bartender"><div class="flotar">Bartender</div></a>
            </div>
        </div>
    )
}

export default Navbar