import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Force a reload of the translations
    i18n.reloadResources([lng]);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => changeLanguage('me')}
        className={`bg-transparent hover:bg-transparent border-0 outline-none shadow-none text-2xl ${i18n.language === 'me' ? 'opacity-100' : 'opacity-50'}`}
        title="Promijeni na Crnogorski"
      >
        🇲🇪
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`bg-transparent hover:bg-transparent border-0 outline-none shadow-none text-2xl ${i18n.language === 'en' ? 'opacity-100' : 'opacity-50'}`}
        title="Switch to English"
      >
        🇬🇧
      </button>
    </div>
  );
}
