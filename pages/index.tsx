import { MainHeader } from '../components/layout/MainHeader';
import Link from 'next/link';

import styles from './index.module.css'

// domain.com/

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome</h2>
      <p>My little project to get a better feeling for React and NextJs</p>
      <br />
      <h2>
        Maybe you want to have a look and brief overview about the Marvel
        Characters? 
      </h2>
      <p>Then try <Link href="/characters">this</Link></p>
      <br />
      <h2>Maybe you prefer some single Character in detail?</h2>
      <p>Then <Link href="/character">this</Link> is the right place for you</p>
    </div>
  );
}


// to do for monday
// links from durva
// Card and Button Components 