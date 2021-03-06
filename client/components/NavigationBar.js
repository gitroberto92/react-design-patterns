import React from 'react'
import {Link} from 'react-router'

export default () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand" href="#">Project name</Link>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/signup" href="#">Home</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li className="dropdown-header">Nav header</li>
                                <li><a href="#">Separated link</a></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">All Elements <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><Link to="/designpatterns/Headers" href="#">Headers</Link></li>
                                <li><Link to="/designpatterns/Form" href="#">Forms</Link></li>
                                <li><Link to="/designpatterns/ColorPalette" href="#">Color Palette</Link></li>
                                <li><Link to="/designpatterns/Slabs" href="#">Slabs</Link></li>
                                <li><Link to="/designpatterns/tabs" href="#">Tabs</Link></li>
                                <li><Link to="/designpatterns/inputs" href="#">Inputs</Link></li>
                                <li><Link to="/designpatterns/shortcuts" href="#">Shortcuts</Link></li>
                                <li><Link to="/designpatterns/images" href="#">Images</Link></li>
                                <li><Link to="/designpatterns/buttons" href="#">Buttons</Link></li>
                                <li><Link to="/designpatterns/modals" href="#">Modals / Popups</Link></li>
                                <li><Link to="/designpatterns/font" href="#">Font</Link></li>
                                <li><Link to="/designpatterns/progressbars" href="#">Progress Bars</Link></li>
                                <li><Link to="/designpatterns/tables" href="#">Tables</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
