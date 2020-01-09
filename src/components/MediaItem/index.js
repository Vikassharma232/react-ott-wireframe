import React from 'react';
import './style.scss';
import SvgButtonDetails from '../../svg/SvgButtonDetails';
import SvgButtonAdd from '../../svg/SvgButtonAdd';
import SvgLike from '../../svg/SvgLike';
import SvgDislike from '../../svg/SvgDislike';
import SvgPlayFilled from '../../svg/SvgPlayFilled';

export default function MediaItem(props) {
    return (
        <div className="container">
            <div className="container-media">
							<div className="media-body">
								<div className="media-img">
									<div className="play-icon">
										<SvgPlayFilled />
									</div>
									<div className="overlay"></div>
									<img src="https://www.blogdelfotografo.com/wp-content/uploads/2019/03/faro-noche.jpg"></img>
									<div className="container-info">
										<div className="media-subtitle">
											<h2>Para fans de algo</h2>
										</div>
										<div className="media-title">
											<h1>Título del media</h1>
										</div>
										<div className="media-tag">
											<h4>PG-13 · 2018 · Drama</h4>
										</div>
										<div className="network-logo">
											<p>Network</p>
										</div>
									</div>	
								</div>
							</div>
							<div className="media-info">
								<div className="media-tag">
									<h4>2017 · Drama, Fantasy</h4>
								</div>
								<div className="media-description">
									<p>Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
								</div>
								<div className="actions">
									<ul>
										<li>
											<a href="#"><SvgButtonDetails /></a>
										</li>
										<li>
											<a href="#"><SvgButtonAdd /></a>
										</li>
										<li>
											<a href="#"><SvgLike /></a>
										</li>
										<li>
											<a href="#"><SvgDislike /></a>
										</li>
									</ul>
									<div className="network-logo">
										<p>Network</p>
									</div>
								</div>
							</div>
						</div>

            <div className="container-media">
							<div className="media-body">
								<div className="media-img">
									<div className="play-icon">
										<SvgPlayFilled />
									</div>
									<div className="overlay"></div>
									<img src="https://www.blogdelfotografo.com/wp-content/uploads/2019/03/faro-noche.jpg"></img>
									<div className="container-info">
										<div className="media-subtitle">
											<h2>Para fans de algo</h2>
										</div>
										<div className="media-title">
											<h1>Título del media</h1>
										</div>
										<div className="media-tag">
											<h4>PG-13 · 2018 · Drama</h4>
										</div>
										<div className="network-logo">
											<p>Network</p>
										</div>
									</div>	
								</div>
							</div>
							<div className="media-info">
								<div className="media-tag">
									<h4>2017 · Drama, Fantasy</h4>
								</div>
								<div className="media-description">
									<p>Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
								</div>
								<div className="actions">
									<ul>
										<li>
											<a href="#"><SvgButtonDetails /></a>
										</li>
										<li>
											<a href="#"><SvgButtonAdd /></a>
										</li>
										<li>
											<a href="#"><SvgLike /></a>
										</li>
										<li>
											<a href="#"><SvgDislike /></a>
										</li>
									</ul>
									<div className="network-logo">
										<p>Network</p>
									</div>
								</div>
							</div>
						</div>
						
            <div className="container-media">
							<div className="media-body">
								<div className="media-img">
									<div className="play-icon">
										<SvgPlayFilled />
									</div>
									<div className="overlay"></div>
									<img src="https://www.blogdelfotografo.com/wp-content/uploads/2019/03/faro-noche.jpg"></img>
									<div className="container-info">
										<div className="media-subtitle">
											<h2>Para fans de algo</h2>
										</div>
										<div className="media-title">
											<h1>Título del media</h1>
										</div>
										<div className="media-tag">
											<h4>PG-13 · 2018 · Drama</h4>
										</div>
										<div className="network-logo">
											<p>Network</p>
										</div>
									</div>	
								</div>
							</div>
							<div className="media-info">
								<div className="media-tag">
									<h4>2017 · Drama, Fantasy</h4>
								</div>
								<div className="media-description">
									<p>Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
								</div>
								<div className="actions">
									<ul>
										<li>
											<a href="#"><SvgButtonDetails /></a>
										</li>
										<li>
											<a href="#"><SvgButtonAdd /></a>
										</li>
										<li>
											<a href="#"><SvgLike /></a>
										</li>
										<li>
											<a href="#"><SvgDislike /></a>
										</li>
									</ul>
									<div className="network-logo">
										<p>Network</p>
									</div>
								</div>
							</div>
						</div>

        </div>
    )
}




