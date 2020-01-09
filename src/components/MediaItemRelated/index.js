import React from 'react';
import './style.scss';
import SvgButtonDetails from '../../svg/SvgButtonDetails';
import SvgButtonAdd from '../../svg/SvgButtonAdd';
import SvgLike from '../../svg/SvgLike';
import SvgDislike from '../../svg/SvgDislike';
import SvgPlayFilled from '../../svg/SvgPlayFilled';

export default function MediaItemRelated(props) {
    return (
        <div className="container">
           <div className="container-media-related">
							<div className="media-body">
								<div className="overlay"></div>
								<div className="icon">
									<SvgButtonDetails />
								</div>
								<div className="media-img">
									<img src="https://www.viajejet.com/wp-content/viajes/paisaje-marino-lago-jackson.jpg"></img>
								</div>
								<div className="network-logo">
									<p>Network</p>
								</div>
							</div>
							<div className="media-footer">
								<div className="media-title">
									<h1>Título del media</h1>
								</div>
								<div className="media-tag">
									<h4>TVMA · Drama</h4>
								</div>
								<div className="media-description">
									<p>Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing. Descripción Lorem ipsum dolor</p>
								</div>
								<div className="actions">
									<ul>
										<li>
											<a href=""><SvgButtonDetails /></a>
										</li>
										<li>
											<a href=""><SvgButtonAdd /></a>
										</li>
									</ul>
								</div>
							</div>
					 </div>
        </div>
    )
}




