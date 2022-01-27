import './navbar.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router';
import jwt_decode from 'jwt-decode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const history = useHistory();
    const logout = () => {
        localStorage.clear();
        setUser(null);
        history.push("/login");
    };

    useEffect( () => {
        const token = user?.accessToken;
        if(token){
            const decodedToken = jwt_decode(token);
            if(decodedToken.exp*1000 < new Date().getTime()) logout();
        }
        
    });
    
    return (
        <div className="n-container">
            <div className="n-wrapper">
                <div className="n-left">
                    <Link style={{textDecoration: "none"}} to="#">
                        <h1 className="logo">LOGO</h1>
                    </Link>
                </div>
                <div className="n-right">
                    {user ? ( 
                        <>
                            <Link style={{textDecoration: "none"}} to="/dashboard">
                                <div className="menu-item">Dashboard</div>
                            </Link>
                            <Link style={{textDecoration: "none"}} to="/userprofile">
                                <div className="menu-item">User profile</div>
                            </Link>
                            <Link style={{textDecoration: "none"}} to="/group">
                                <div className="menu-item">Group</div>
                            </Link>
                            <div className="n-dropdown">
                            <Avatar 
                                style={{cursor: "pointer", marginRight: "20px"}}
                                children={`${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}`}
                            />
                            <div className="dropdown-content" onClick={()=>{logout()}}>
                                <ExitToAppIcon style={{paddingRight: "5px"}}/>
                                <span>Logout</span>
                            </div>
                        </div>
                        </>
                        
                    ): (
                        <>
                            <Link style={{textDecoration: "none"}} to="/register">
                                <div className="menu-item">REGISTER</div>
                            </Link>
                            <Link style={{textDecoration: "none"}} to="/login">
                                <div className="menu-item">SIGN IN</div>
                            </Link>
                        </>  
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;