import {Link} from "../../../shared";
import Image from "../../../shared/image/image.component";
import { isExpressDelivery, deliveryFee } from "../../../../utils";
import styles from './vendor-card.module.scss';

function VendorCard() {
  return <Link href={'/qwrf'}>
    <div className={styles.VendorCard}>
      <div className={styles.VendorCard__header}>
        <Image
          src='https://cdn.snappfood.ir/350x233/uploads/images/vendors/covers/5e01b8a4bcf22.jpg'
          alt='vendor'
          layout={'fill'}
        />
        <div
          className={styles.VendorCard__logo}>
          <Image
            src='https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5e425b1b4cf0b.jpg'
            alt='vendor'
            width={56}
            height={56}
            radius={8}
          />
        </div>
      </div>
      <div className={styles.VendorCard__footer}>
        <div className={styles.VendorCard__titleRate}>
          <h3 className={styles.VendorCard__title}>
            پیتزا شیلا (پارک ملت)
          </h3>
          <span className={styles.VendorCard__rate}></span>
        </div>
        <div className={styles.VendorCard__description}>فست‌فود، پیتزا، ساندویچ، برگر</div>
        <div>
          <div>
            <span className={styles.VendorCard__deliveryType}>{isExpressDelivery(true)}</span>
            <span className={styles.VendorCard__deliveryPrice}>{deliveryFee(10000)}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
}

export { VendorCard };
