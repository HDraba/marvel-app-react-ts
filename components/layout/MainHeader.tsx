import Link from 'next/link';
import { FormEvent, MouseEventHandler, useRef } from 'react';
import styles from './MainHeader.module.css';
import { FormattedMessage } from 'react-intl';

type MainHeaderProps = {
  language: string;
  dropdownSwitchLanguage: (lang: string) => any;
};

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import LanguageDropdown from '../ui/LanguageDropdown';

export const MainHeader = (props: MainHeaderProps) => {
  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skipToMainContentLink}>
        <FormattedMessage id="skip" />
      </a>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <FormattedMessage id="start" />
            </Link>
          </li>
          <li>
            <Link href="/characters">
              <FormattedMessage id="characters" />
            </Link>
          </li>
          <li>
            <Link href="/character">
              <FormattedMessage id="character" />
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
          <li>
            <Link href="/auth/register">
              <FormattedMessage id="register" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.langContainer}>
        <LanguageDropdown
          dropdownSwitchLanguage={props.dropdownSwitchLanguage}
        />
        {/* <button onClick={props.onLanguageChange}>{props.language}</button> */}
      </div>
    </header>
  );
};
