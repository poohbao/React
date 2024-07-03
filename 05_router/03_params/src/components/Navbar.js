import {NavLink} from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        backfroundColor: 'purple',
        color: 'white'
    }

    return(
        <div>
            <ul>
                <li><navLink to="/main" style={({isActive}) => isActive? activeStyle : undefined}>HOME</navLink></li>
                <navLink to="/about" style={({isActive}) => isActive? activeStyle : undefined}>소개</navLink></li>
                <navLink to="/menu" style={({isActive}) => isActive? activeStyle : undefined}>메뉴목록</navLink></li>
            </ul>
        </div>
    );
}

export default Navbar;