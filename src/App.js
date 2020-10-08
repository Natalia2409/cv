import React from 'react';
import Header from './components/header';
import Contact from './components/contacts';
import Knowledge from './components/knowledge';
import avatar from './components/photo.JPG';
import {
    Photo
} from './components/name';

function App() {
    return (
        <div className="container">
            <Header>CV</Header>
            <div className="header">
                <Photo src={avatar}/> Nataliia Rudomyr
                <div classname="contact">
                    <Contact>Num: +380994788***</Contact>
                    <Contact>Email: nataliarudomyr1@gmail.com</Contact>
                </div>
            </div>
            <hr/>
            <div className="know">
                <Knowledge className='border'>
                    English B1<br/>
                    HTML5 <br/>
                    CSS3/SASS <br/>
                    JavaScript <br/>
                    PhotoShop <br/>
                    React/Redux <br/>
                    Adaptive layout <br/>
                    Bootstrap <br/>
                </Knowledge>
                <Knowledge className='border'>
                    Responsibility <br/>
                    Ability to work in team <br/>
                    Desire to learn new tools <br/>
                    Focus on results <br/>
                    Ability to adhere to deadlines <br/>
                    Attention to details <br/>
                </Knowledge>
            </div>
        </div>
    )
}

export default App;