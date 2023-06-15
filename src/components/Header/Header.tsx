import { Button } from '../Button/Button';
import { NavLink } from 'react-router-dom';
import './header.css'
import PixemaIcon from '../Icons/PixemaIcon';
import { Navbar } from '../Navbar/Navbar';
import SearchFilter from '../Icons/SearchFilter';

export const Header = () => {
    return (
        <div className="container-head">
            <div className='navbar'>
                   <Navbar/>
            </div>
            <div className="main_container">
                <div className='pixema-icon'>
                  <PixemaIcon/>  
                </div>
                <form className='search-form'>
                    <input className='search' type="text"name="name" placeholder='Search'/>
                    <button className='search-btn' type="submit" value='Search'>
                            <SearchFilter/>
                    </button>
                </form>
            </div>
            <div className='btn-signin'>
            <NavLink to={"/sign-in"}>
                    <Button className={'button'} content={'SignIn'}
                        callback={() => { }} />
            </NavLink>   
            </div>  
        </div>
    )
};
