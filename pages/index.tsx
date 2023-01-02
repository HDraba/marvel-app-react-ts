// domain.com/

import { MainHeader } from '../components/layout/MainHeader';
import Link from 'next/link';

import styles from './index.module.css';

import { FormattedMessage } from 'react-intl';

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>
        <FormattedMessage id="welcome-text" />
      </h2>
      <p>
        <FormattedMessage id="first-desc" />
      </p>
      <br />
      <h2>
        <FormattedMessage id="inv-chars" />
      </h2>
      <p>
        {/* <FormattedMessage id="inv-chars-try" /> */}
          <FormattedMessage id="inv-chars-this" values={{
            b: (chunks) => (
              <Link data-testid="charactersLink" href="/characters">{chunks}</Link>

            )
          }} />
      </p>
      <br />
      <h2>
        <FormattedMessage id="inv-char" />
      </h2>
      <p>
        {/* <FormattedMessage id="inv-char-then" /> */}
        <FormattedMessage
          id="inv-char-this"
          values={{
            a: (chunks) => (
              <Link data-testid="characterLink" href="/character">
                {chunks}
              </Link>
            ),
          }}
        />

        {/* <FormattedMessage id="inv-char-rightPlace" /> */}
      </p>
    </div>
  );
}
