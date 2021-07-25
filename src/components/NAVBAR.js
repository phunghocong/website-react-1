import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import {Button} from './Button'



function NAVBAR() {
    const [click,setClick] = useState(false);

    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click); 

    const closemobiMenu = () =>setClick(false);

    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };  

    useEffect(()=>{
        showButton();
    }, []);

    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className ='Navbar'>
                <div className = 'navbar-container'>
                    <Link to ='/' className='navbar-logo' onClick={closemobiMenu}>
                        TRAVELX <i className="fas fa-compass"></i>
                    </Link>
                    <div className ='menu-icon' onClick = {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to= '/' className='nav-links' onClick={closemobiMenu}>Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to= '/services' className='nav-links' onClick={closemobiMenu}>
                                Services
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to= '/product' className='nav-links' onClick={closemobiMenu}>
                                Products
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to= '/sign-in' className='nav-links' onClick={closemobiMenu}>
                                Sign In
                            </Link>
                        </li>
                        <li className = 'nav-item-add'>
                            <Link to= '/sign-up' className='nav-links-mobile' onClick={closemobiMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
                </div>
            </nav>

        </>
    )
}

export default NAVBAR
