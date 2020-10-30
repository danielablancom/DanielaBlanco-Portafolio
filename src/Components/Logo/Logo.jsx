import React from 'react';
import '../Logo/Logo.css';
import DataLovers from '../../img/DataLovers.jpg';

const Logo = () => {
    return (
        <div className="container-logo">
            <div className="container-img">
                <img src={DataLovers} className="img-logo" alt={"img-logo"}></img>
            </div>
            <div className="title-logo">

                <p className="title-ocupation">Front-end Developer / Violinista</p>
                
            </div>
            <span class="scroll-btn">
	<a href="/#acercademi">
		<span class="mouse">
			<span>
			</span>
		</span>
	</a>
  

</span>
        </div>
    );
}

export default Logo; 