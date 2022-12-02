import { PropsWithChildren } from "react"
import { MainHeader } from "./MainHeader"

import styles from './Layout.module.css'

const Layout = (props: PropsWithChildren) => {

    return  (
        <div>
            <MainHeader />
            <main className={styles.main}>{props.children}</main>
        </div>
    )
}

export default Layout