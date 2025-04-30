import { useState } from 'react';
import FloorPlanDrawerDesktop from './FloorPlanDrawerDesktop';
import FloorPlanDrawerMobile from './FloorPlanDrawerMobile';

const FloorPlanWrapper = () => {
    return (
        <>
            <div className="hidden lg:block">
                <FloorPlanDrawerDesktop floorPlanUrl="/floorplan-mock.jpg" />
            </div>
            <div className="block lg:hidden">
                <FloorPlanDrawerMobile floorPlanUrl="/floorplan-mock.jpg" />
            </div>
        </>
    );
};

export default FloorPlanWrapper; 