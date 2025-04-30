import { useState } from 'react';
import { useScreenSize } from '../../hooks/useScreenSize';

interface FloorPlanDrawerProps {
    floorPlanUrl?: string;
    isDarkMode?: boolean;
}

const FloorPlanDrawerMobile = ({ floorPlanUrl = '/floorplan-placeholder.jpg', isDarkMode = false }: FloorPlanDrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isMobile } = useScreenSize();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    if (!isMobile) return null;

    const themeClasses = {
        container: isDarkMode 
            ? 'bg-[#1d293d] text-white' 
            : 'bg-white text-gray-800',
        card: isDarkMode 
            ? 'bg-[#2d3b52] text-white' 
            : 'bg-gray-50 text-gray-800',
        button: isDarkMode 
            ? 'bg-[#2d3b52] border-gray-600 text-white hover:bg-[#3d4b62]' 
            : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50',
        closeButton: isDarkMode 
            ? 'hover:bg-[#3d4b62]' 
            : 'hover:bg-gray-100',
        text: isDarkMode 
            ? 'text-white' 
            : 'text-gray-800',
        label: isDarkMode 
            ? 'text-gray-300' 
            : 'text-gray-600',
        border: isDarkMode 
            ? 'border-gray-600' 
            : 'border-gray-200'
    };

    return (
        <div className="relative">
            {/* View Floor Plan Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handleToggle}
                    className={`${themeClasses.button} font-semibold py-2 px-6 rounded-md transition-colors duration-300 border`}
                >
                    {isOpen ? 'Close Floor Plan' : 'Floor Plan Mobile'}
                </button>
            </div>

            {/* Floor Plan Drawer */}
            <div className={`absolute top-full left-0 right-0 mt-2 h-[80vh] shadow-xl z-40 transform transition-all duration-500 ease-in-out rounded-b-2xl ${themeClasses.container} ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
                {/* Header with Close Button */}
                <div className={`flex items-center justify-between p-6 border-b ${themeClasses.border}`}>
                    <h3 className={`text-xl font-semibold ${themeClasses.text}`}>Floor Plan Details</h3>
                    <button
                        onClick={handleToggle}
                        className={`p-2 rounded-full transition-colors duration-300 ${themeClasses.closeButton}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Floor Plan Content */}
                <div className="p-6 overflow-y-auto h-[calc(100%-4rem)]">
                    <div className="flex flex-col gap-6">
                        {/* First Floor */}
                        <div className={`${themeClasses.card} p-6 rounded-md w-full`}>
                            <h4 className={`font-medium text-lg mb-3 ${themeClasses.text}`}>First Floor</h4>
                            <ul className="list-disc list-inside space-y-2">
                                <li className={themeClasses.text}>Living Room: 25m²</li>
                                <li className={themeClasses.text}>Kitchen: 15m²</li>
                                <li className={themeClasses.text}>Dining Area: 12m²</li>
                                <li className={themeClasses.text}>Bathroom: 8m²</li>
                                <li className={themeClasses.text}>Hallway: 10m²</li>
                                <li className={themeClasses.text}>Storage Room: 5m²</li>
                                <li className={themeClasses.text}>Laundry Room: 6m²</li>
                                <li className={themeClasses.text}>Guest Toilet: 4m²</li>
                                <li className={themeClasses.text}>Home Office: 12m²</li>
                                <li className={themeClasses.text}>Mudroom: 6m²</li>
                                <li className={themeClasses.text}>Pantry: 4m²</li>
                                <li className={themeClasses.text}>Wine Cellar: 8m²</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloorPlanDrawerMobile; 