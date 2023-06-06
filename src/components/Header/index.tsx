import logoImg from '/logo.svg'
import styles from './styles.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <img src={logoImg} alt="Logo GitHub Blog" />
            </div>
        </header>
    )
}