import React, { useEffect } from 'react';
import Esection1 from '../modules/Esection1';
import Esection2 from '../modules/Esection2';
import Esection3 from '../modules/Esection3';
import Esection4 from '../modules/Esection4';
import '../../css/earth.scss';

function Earth() {
    // useEffect(() => {
    //     const handleScroll = (e) => {
    //         e.preventDefault();
    //         const { deltaY } = e;
    //         const sectionHeight = window.innerHeight;

    //         // Determine the new scroll position
    //         let newScroll = window.scrollY + (deltaY > 0 ? sectionHeight : -sectionHeight);

    //         // Ensure the new scroll position is within bounds
    //         newScroll = Math.max(0, Math.min(newScroll, sectionHeight * 3));

    //         window.scrollTo({
    //             top: newScroll,
    //             behavior: 'smooth',
    //         });
    //     };

    //     window.addEventListener('wheel', handleScroll, { passive: false });

    //     return () => {
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, [Earth]);

    return (
        <div className="earth-section">
            <Esection1 />
            <Esection2 />
            <Esection3 />
            <Esection4 />
        </div>
    );
}

export default Earth;