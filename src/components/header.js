
import React from 'react';
import './header.css';

class Header extends React.Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <header className="mainHeader">
                <h1>Random Pokemon Card</h1>
                <nav><div>Home</div><div>About</div></nav>
            </header>
        )
    }
}

export default Header;