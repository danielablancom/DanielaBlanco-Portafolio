import React from 'react';
import './Contact.css';
import cv from '../../iconos/cv.svg';
import javascript from '../../iconos/javascript.png';
import react from '../../iconos/react.png';
// npm install --save-dev @iconify/react @iconify/icons-carbon
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-carbon/email';
// npm install --save-dev @iconify/react @iconify/icons-mdi
import fileDocumentOutline from '@iconify/icons-mdi/file-document-outline';
// npm install --save-dev @iconify/react @iconify/icons-bx
import bxlLinkedin from '@iconify/icons-bx/bxl-linkedin';
// npm install --save-dev @iconify/react @iconify/icons-bi
import codeSlash from '@iconify/icons-bi/code-slash';






const Contact = () => {
    return (
        <div className="container-contact">
            <div className="title-contact">
                <p>Contacto</p>
            </div>
            <div className="container-icon-contact">
                
            <div className="icon-box-contact">
            <Icon icon={emailIcon} />
            <div className="icon-title">
                <p>Email</p>
            </div>
            </div>    
            <div className="icon-box-contact">
            <Icon icon={fileDocumentOutline} />
            <div className="icon-title">
                <p>Curriculum</p>
            </div>
            </div>
              
            <div className="icon-box-contact">
            <Icon icon={bxlLinkedin} />
            <div className="icon-title">
                <p>LinkedIn</p>
            </div>
            </div>
            <div className="icon-box-contact">
            <Icon icon={codeSlash} />
            <div className="icon-title-appLab">
                <p>App Talento Laboratoria</p>
            </div>
            </div>
            
          
          
            </div>
        </div>
    );
}

export default Contact; 