class Topbar extends React.Component {
    render () {
        return (
            <nav>
                <div className="nav-wrapper">
                  <a href="http://www.superpickem.co/picks">                    
                    <img className="superPickemLogo" src='http://aroncey.com/nfl_pickemL/images/superpickem.png'></img>
                  </a>
                    <a href="#" className="brand-logo title"></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/signout">Sign Out</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
