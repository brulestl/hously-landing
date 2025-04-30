import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RentFiltersState, FilterCategory, FilterItem, AmenitiesFilters, BuildingFilters, ParkingFilters } from '../types/filters';

interface RentFiltersProps {
    onApply: (filters: RentFiltersState) => void;
    onClear: () => void;
}

export default function RentFilters({ onApply, onClear }: RentFiltersProps) {
    const { t } = useTranslation();
    const [filters, setFilters] = useState<RentFiltersState>({
        featured: {
            recommended: false,
            luxury: false
        },
        furnishing: {
            furnished: false,
            semiFurnished: false,
            unfurnished: false
        },
        amenities: {
            alarm: false,
            ac: false,
            tv: false,
            washingMachine: false,
            bath: false,
            shower: false,
            dishwasher: false
        },
        building: {
            elevator: false,
            intercom: false,
            cameras: false,
            security: false,
            wheelchairAccess: false
        },
        parking: {
            garage: false,
            private: false,
            building: false,
            public: false
        },
        pets: {
            allowed: false,
            notAllowed: false
        }
    });

    const handleCheckboxChange = <T extends keyof RentFiltersState>(
        category: T,
        item: keyof RentFiltersState[T]
    ) => {
        setFilters(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [item]: !prev[category][item]
            }
        }));
    };

    const handleApply = () => {
        onApply(filters);
    };

    const handleClear = () => {
        setFilters({
            featured: {
                recommended: false,
                luxury: false
            },
            furnishing: {
                furnished: false,
                semiFurnished: false,
                unfurnished: false
            },
            amenities: {
                alarm: false,
                ac: false,
                tv: false,
                washingMachine: false,
                bath: false,
                shower: false,
                dishwasher: false
            },
            building: {
                elevator: false,
                intercom: false,
                cameras: false,
                security: false,
                wheelchairAccess: false
            },
            parking: {
                garage: false,
                private: false,
                building: false,
                public: false
            },
            pets: {
                allowed: false,
                notAllowed: false
            }
        });
        onClear();
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-6">
                {/* Featured */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.rent.featured.title')}</h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.featured.recommended}
                                onChange={() => handleCheckboxChange('featured', 'recommended')}
                                className="rounded text-green-600"
                            />
                            {t('filters.rent.featured.recommended')}
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.featured.luxury}
                                onChange={() => handleCheckboxChange('featured', 'luxury')}
                                className="rounded text-green-600"
                            />
                            {t('filters.rent.featured.luxury')}
                        </label>
                    </div>
                </div>

                {/* Furnishing */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.rent.furnishing.title')}</h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.furnishing.furnished}
                                onChange={() => handleCheckboxChange('furnishing', 'furnished')}
                                className="rounded text-green-600"
                            />
                            {t('filters.rent.furnishing.furnished')}
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.furnishing.semiFurnished}
                                onChange={() => handleCheckboxChange('furnishing', 'semiFurnished')}
                                className="rounded text-green-600"
                            />
                            {t('filters.rent.furnishing.semiFurnished')}
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.furnishing.unfurnished}
                                onChange={() => handleCheckboxChange('furnishing', 'unfurnished')}
                                className="rounded text-green-600"
                            />
                            {t('filters.rent.furnishing.unfurnished')}
                        </label>
                    </div>
                </div>

                {/* Amenities */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.rent.amenities.title')}</h3>
                    <div className="space-y-2">
                        {Object.entries(filters.amenities).map(([key, value]) => (
                            <label key={key} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={() => handleCheckboxChange('amenities', key as keyof AmenitiesFilters)}
                                    className="rounded text-green-600"
                                />
                                {t(`filters.rent.amenities.${key}`)}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Building */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.rent.building.title')}</h3>
                    <div className="space-y-2">
                        {Object.entries(filters.building).map(([key, value]) => (
                            <label key={key} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={() => handleCheckboxChange('building', key as keyof BuildingFilters)}
                                    className="rounded text-green-600"
                                />
                                {t(`filters.rent.building.${key}`)}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Parking */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.rent.parking.title')}</h3>
                    <div className="space-y-2">
                        {Object.entries(filters.parking).map(([key, value]) => (
                            <label key={key} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={() => handleCheckboxChange('parking', key as keyof ParkingFilters)}
                                    className="rounded text-green-600"
                                />
                                {t(`filters.rent.parking.${key}`)}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pets */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.rent.pets.title')}</h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.pets.allowed}
                                onChange={() => handleCheckboxChange('pets', 'allowed')}
                                className="rounded text-green-600"
                            />
                            {t('filters.rent.pets.allowed')}
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.pets.notAllowed}
                                onChange={() => handleCheckboxChange('pets', 'notAllowed')}
                                className="rounded text-green-600"
                            />
                            {t('filters.rent.pets.notAllowed')}
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-6">
                <button
                    onClick={handleApply}
                    className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                    {t('filters.apply')}
                </button>
                <button
                    onClick={handleClear}
                    className="flex-1 py-2 px-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200"
                >
                    {t('filters.clear')}
                </button>
            </div>
        </div>
    );
} 