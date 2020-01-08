import React from 'react';
import './style.scss';
import SvgButtonDetails from '../../svg/SvgButtonDetails';
import SvgButtonAdd from '../../svg/SvgButtonAdd';
import SvgLike from '../../svg/SvgLike';
import SvgDislike from '../../svg/SvgDislike';
import SvgPlayFilled from '../../svg/SvgPlayFilled';

export default function Hero(props) {
    return (
        <div className="hero">
            <div className="media-img">

            </div>
            <div className="info">
                <p className="media-featured">
                    Todos los episodios disponibles
                </p>
                <h1 className="media-title">
                    Título de la serie
                </h1>
                <h4 className="media-meta">
                    S1 E1 - Primer Episodio
                </h4>
                <p className="media-desc">
                    Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
            </div>
            <div className="footer">
                <div className="actions">
                    <div className="play">
                        <SvgPlayFilled />
                        <p>Start Watching</p>
                    </div>
                    <div className="buttons">
                        <SvgButtonDetails />
                        <SvgButtonAdd />
                        <SvgLike />
                        <SvgDislike />
                    </div>
                </div>
                <div className="network-logo">
                    <h4>Network</h4>
                </div>
            </div>
        </div>
    )
}