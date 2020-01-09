import React from 'react';
import Hero from '../../components/Hero';
import MediaItem from '../../components/MediaItem';
import MediaItemRelated from '../../components/MediaItemRelated';
import SvgLive from '../../svg/SvgLive';
import SvgCast from '../../svg/SvgCast';
import SvgClock from '../../svg/SvgClock';
import SvgChevron from '../../svg/SvgChevron';
import SvgButtonPlay from '../../svg/SvgButtonPlay';
import SvgClose from '../../svg/SvgClose';
import SvgMobileMenu from '../../svg/SvgMobileMenu';
import SvgRecord from '../../svg/SvgRecord';
import SvgSearch from '../../svg/SvgSearch';
import SvgStepBack from '../../svg/SvgStepBack';
import SvgButtonAdd from '../../svg/SvgButtonAdd';

export default function Home() {
    return (
        <>
            <MediaItem />
            <MediaItemRelated />
            {/* <Hero />
            <SvgLive></SvgLive>
            <SvgCast></SvgCast>
            <SvgClock></SvgClock>
            <SvgChevron></SvgChevron>
            <SvgButtonPlay></SvgButtonPlay>
            <SvgClose></SvgClose>
            <SvgMobileMenu></SvgMobileMenu>
            <SvgRecord></SvgRecord>
            <SvgSearch></SvgSearch>
            <SvgStepBack></SvgStepBack>
            <SvgButtonAdd color="dark" size="2rem"></SvgButtonAdd> */}
        </>
    )
}