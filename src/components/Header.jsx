import styles from './header.module.css';
import logo from '../assets/image/logo.svg'

export function Header () {
  return(
    <header className={styles.header} >
      <img src={logo} alt="logo" />
      <strong >Ignite Feed</strong>
    </header>
  )
}