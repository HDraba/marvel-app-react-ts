import { PropsWithChildren, useState } from 'react';
import { MainHeader } from './MainHeader';

import styles from './Layout.module.css';

import { IntlProvider } from 'react-intl';
import German from '../../translations/de-DE.json';
import English from '../../translations/en-GB.json';

let lang = English;

const Layout = (props: PropsWithChildren) => {
  const [language, setLanguage] = useState<string>('en-GB');
  const [displayedLanguage, setDisplayedLanguage] =
    useState<string>('Englisch');

  const dropdownButtonHandler = (chosenLang: string) => {
    if (chosenLang === 'DE' && language !== 'de-DE') {
      lang = German;
      setLanguage('de-DE');
      setDisplayedLanguage('German');
    } else if (chosenLang === 'EN' && language !== 'en-GB') {
      lang = English;
      setLanguage('en-GB');
      setDisplayedLanguage('English');
    }
  };

  return (
    <div>
      <IntlProvider locale={language} messages={lang}>
        <MainHeader
          //   onLanguageChange={changeLanguageButtonHandler}
          language={displayedLanguage}
          dropdownSwitchLanguage={dropdownButtonHandler}
        />
        <main id="main" className={styles.main}>
          {props.children}
        </main>
      </IntlProvider>
    </div>
  );
};

export default Layout;
