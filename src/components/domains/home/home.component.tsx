import {Link} from "../../shared";
import styles from './home.module.scss';

function Home() {
  return <div className={styles.Home}>
    <Link className={styles.Home__restaurantButton} href='/restaurant'>صفحه‌ی رستوران‌ها</Link>
  </div>
}

export { Home };