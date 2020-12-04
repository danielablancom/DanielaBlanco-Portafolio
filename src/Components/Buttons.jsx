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
            <button className="button-style"><Icon icon={playCircle} className="iconPlay"/>DEMO
            </button>
            </div>
            <div className="firstButton"> 
            <button className="button-style"><Icon icon={bxCodeAlt} className="iconPlay"/>
                CODE
            </button>
            </div>
        </div>
    );
}

export default Buttons; 