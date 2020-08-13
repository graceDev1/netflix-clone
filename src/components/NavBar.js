import React,{useState,useEffect} from 'react'
import '../css/Nav.css';

function NavBar() {

    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false)
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    }, []);  
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="netflix logo"
            />
            <img
            className="nav__avatar"
            src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png"
            alt="Netflix Logo"/>
        </div>
    )
}

export default NavBar
