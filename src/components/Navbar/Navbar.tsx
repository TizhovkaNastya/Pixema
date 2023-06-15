import './navbar.css';  
import { useState } from "react";
import { Button } from '../Button/Button';
import { NavLink } from 'react-router-dom';


export const Navbar = () => {

    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(true)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }


    return (
        <div style={{ maxWidth: '100px', height: '100hv' }}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
            </nav>
            <div className={menu_class}>
                <NavLink to={"/"}>
                    <Button className={'button'} content={'Home'}
                        callback={() => { }} />
                </NavLink>
                <NavLink to={"favorites"}>
                    <Button className={'button'} content={'Favorites'}
                        callback={() => { }} />
                </NavLink>
                <NavLink to={"/log-out"}>
                    <Button className={'button'} content={'Log Out'}
                        callback={() => { }} />
                </NavLink>
            </div>
        </div>
    )
};