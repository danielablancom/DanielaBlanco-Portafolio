import React from 'react';
import '../Components/Buttons.css';
// npm install --save-dev @iconify/react @iconify/icons-el
import { Icon } from '@iconify/react';
import playCircle from '@iconify/icons-el/play-circle';
// npm install --save-dev @iconify/react @iconify/icons-bx
import bxCodeAlt from '@iconify/icons-bx/bx-code-alt';



const Buttons = () => {
    return (
        <div className="container-buttons">
             <div className="firstButton">
             <a href="https://pamelabarboza.github.io/SCL014-data-lovers/src/index.html" target="_blank">
            <button className="button-style"><Icon icon={playCircle} className="iconPlay"/>DEMO
            </button>
            </a>
            </div>
            <div className="firstButton"> 
            <a href="https://github.com/danielablancom/SCL014-data-lovers" target="_blank">
            <button className="button-style"><Icon icon={bxCodeAlt} className="iconPlay"/>
                CODE
            </button>
            </a>
            </div>
        </div>
    );
}

export default Buttons; 