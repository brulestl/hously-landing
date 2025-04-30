import { FiFilter } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

interface FilterButtonProps {
    onClick: () => void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
    const { t } = useTranslation();
    
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-green-600 text-green-600 hover:bg-green-50 transition-colors duration-200"
        >
            <FiFilter className="text-lg" />
            <span>{t('filters.title')}</span>
        </button>
    );
} 