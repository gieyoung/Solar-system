import React, { useEffect } from 'react';
import Esection1 from '../modules/Esection1';
import Esection2 from '../modules/Esection2';
import Esection3 from '../modules/Esection3';
import Esection4 from '../modules/Esection4';
import '../../css/earth.scss';

function Earth() {



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