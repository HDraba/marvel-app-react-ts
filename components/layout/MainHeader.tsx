import Link from 'next/link';
import styles from './MainHeader.module.css';

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/characters">Characters</Link>
          </li>
          <li>
            <Link href="/character">Character</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ul>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
          <li>
            <Link href="/auth/register">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
