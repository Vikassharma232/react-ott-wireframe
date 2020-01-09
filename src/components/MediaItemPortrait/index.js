import React from 'react';
import './style.scss';
import SvgButtonDetails from '../../svg/SvgButtonDetails';
import SvgButtonAdd from '../../svg/SvgButtonAdd';
import SvgDislike from '../../svg/SvgDislike';
import SvgLike from '../../svg/SvgLike';
import SvgButtonPlay from '../../svg/SvgButtonPlay';

export default function MediaItemPortrait(props) {
    return(
        <div className="media-item-portrait">
            <div 
                className="media-img" 
                style={{backgroundImage: `url(${props.mediaImg})`}}
            />
            <div 
                className="media-preview"
                style={{backgroundImage: `url(${props.mediaImg})`}}
            >
                <SvgButtonPlay />
            </div>
            <div className="info">
                <p className="media-featured">
                    Todos los episodios disponibles
                </p>
                <h3 className="media-title">
                    Título de la serie
                </h3>
                <h6 className="media-meta">
                    S1 E1 - Primer Episodio
                </h6>
                <p className="media-desc">
                    Descripción Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut...
                </p>
            </div>
            <div className="footer">
                <div className="actions">
                    <div className="buttons">
                        <SvgButtonDetails />
                        <SvgButtonAdd />
                        <SvgLike />
                        <SvgDislike />
                    </div>
                </div>
                <div className="network-logo">
                    <h6>Network</h6>
                </div>
            </div>
        </div>
    )
}