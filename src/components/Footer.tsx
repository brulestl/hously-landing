import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Force a reload of translations when language changes
    const handleLanguageChange = () => {
      i18n.reloadResources([i18n.language]);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="footer-head">
              <h4 className="text-white mb-4">{t('footer.company')}</h4>
              <p className="text-white-50">{t('footer.platform_description')}</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="footer-head">
              <h4 className="text-white mb-4">{t('footer.company')}</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li><Link to="/aboutus" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.about_us')}</Link></li>
                <li><Link to="/services" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.services')}</Link></li>
                <li><Link to="/pricing" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.pricing')}</Link></li>
                <li><Link to="/blog" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.blog')}</Link></li>
                <li><Link to="/login" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.login')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="footer-head">
              <h4 className="text-white mb-4">{t('footer.useful_links')}</h4>
              <ul className="list-unstyled footer-list mt-4">
                <li><Link to="/terms" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.terms')}</Link></li>
                <li><Link to="/privacy" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.privacy')}</Link></li>
                <li><Link to="/listing" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.listing')}</Link></li>
                <li><Link to="/contact" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> {t('footer.contact')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <p className="mb-0 text-white-50">{t('footer.copyright', { year: new Date().getFullYear() })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 