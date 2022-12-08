import styles from './MainFooter.module.css'
import Link from 'next/link'

export const MainFooter = () => {
  return (
    <footer className={styles.mainFooter}>
        <div>
            <Link href='./characters/1'>1</Link>
        </div>
    </footer>
  )
}