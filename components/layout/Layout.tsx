import { PropsWithChildren } from "react"
import { MainHeader } from "./MainHeader"

import styles from './Layout.module.css'
import { MainFooter } from "./MainFooter"

const Layout = (props: PropsWithChildren) => {

    return  (
        <div>
            <MainHeader />
            <main id="main" className={styles.main}>{props.children}</main>
            
        </div>
    )
}

export default Layout