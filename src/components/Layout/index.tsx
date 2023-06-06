import {Outlet} from 'react-router-dom'

import Header from '../Header'

import styles from './styles.module.scss'

export default function Layout() {
    return (
        <div>
            <Header />
            
            <div className={styles.container}>
                <Outlet />
            </div>
        </div>
    )
}