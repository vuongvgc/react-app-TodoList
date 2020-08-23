/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faFacebook, faReact} from '@fortawesome/fontawesome-free-brands';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
// We are only using the user-astronaut icon
library.add(faUserAstronaut)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <figure className="information">
                    <img className="Avatar" src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/98204325_1785557908251023_4213461083148517376_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ycHcMWIcjQkAX8i894s&_nc_ht=scontent.fsgn4-1.fna&oh=4101c571058ad9a1ee910628c95ff148&oe=5F67A20D"/>
                    <figcaption className="Author__name">Victor Do</figcaption>
                </figure>
                <div className="Code-example">
                    <a href="http://todomvc.com/examples/react/#/completed" alt="React Example">
                        <FontAwesomeIcon className ='font-awesome icon__footer' icon={faReact} />
                        React To do List examples
                        <FontAwesomeIcon className ='font-awesome icon__footer' icon={faReact} />
                    </a>
                </div>
                <div className="Author__Social">
                    <a href="https://www.facebook.com/vuongvgc/" alt="facebook" >
                        <FontAwesomeIcon className ='font-awesome' icon={faFacebook} />
                    </a>
                    <a href='https://github.com/vuongvgc/react-app-TodoList'>
                        <FontAwesomeIcon className ='font-awesome' icon={faGithub} />
                    </a>
                    <a href='https://www.linkedin.com/in/vuongvgc/'>
                        <FontAwesomeIcon className ='font-awesome' icon={faLinkedin} />
                    </a>
                </div>

            </footer>
        )
    }
}
export default Footer;