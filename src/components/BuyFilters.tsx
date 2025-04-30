import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BuyFiltersState, FilterCategory, FilterItem, ParkingFilters } from '../types/filters';

interface BuyFiltersProps {
    onApply: (filters: BuyFiltersState) => void;
    onClear: () => void;
}

export default function BuyFilters({ onApply, onClear }: BuyFiltersProps) {
    const { t } = useTranslation();
    const [filters, setFilters] = useState<BuyFiltersState>({
        featured: {
            recommended: false,
            luxury: false
        },
        furnishing: {
            furnished: false,
            semiFurnished: false,
            unfurnished: false
        },
        parking: {
            garage: false,
            private: false,
            building: false,
            public: false
        }
    });

    const handleCheckboxChange = <T extends keyof BuyFiltersState>(
        category: T,
        item: keyof BuyFiltersState[T]
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
            parking: {
                garage: false,
                private: false,
                building: false,
                public: false
            }
        });
        onClear();
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-6">
                {/* Featured */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.buy.featured.title')}</h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.featured.recommended}
                                onChange={() => handleCheckboxChange('featured', 'recommended')}
                                className="rounded text-green-600"
                            />
                            {t('filters.buy.featured.recommended')}
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.featured.luxury}
                                onChange={() => handleCheckboxChange('featured', 'luxury')}
                                className="rounded text-green-600"
                            />
                            {t('filters.buy.featured.luxury')}
                        </label>
                    </div>
                </div>

                {/* Furnishing */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.buy.furnishing.title')}</h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.furnishing.furnished}
                                onChange={() => handleCheckboxChange('furnishing', 'furnished')}
                                className="rounded text-green-600"
                            />
                            {t('filters.buy.furnishing.furnished')}
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.furnishing.semiFurnished}
                                onChange={() => handleCheckboxChange('furnishing', 'semiFurnished')}
                                className="rounded text-green-600"
                            />
                            {t('filters.buy.furnishing.semiFurnished')}
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.furnishing.unfurnished}
                                onChange={() => handleCheckboxChange('furnishing', 'unfurnished')}
                                className="rounded text-green-600"
                            />
                            {t('filters.buy.furnishing.unfurnished')}
                        </label>
                    </div>
                </div>

                {/* Parking */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">{t('filters.buy.parking.title')}</h3>
                    <div className="space-y-2">
                        {Object.entries(filters.parking).map(([key, value]) => (
                            <label key={key} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={value}
                                    onChange={() => handleCheckboxChange('parking', key as keyof ParkingFilters)}
                                    className="rounded text-green-600"
                                />
                                {t(`filters.buy.parking.${key}`)}
                            </label>
                        ))}
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