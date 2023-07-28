import { Link } from "../../../shared";
import Image from "../../../shared/image/image.component";
import { isExpressDelivery, deliveryFee, classnames } from "../../../../utils";
import { VendorCardType} from './vendor-card.models';
import styles from './vendor-card.module.scss';

function VendorCard(
  {
    link,
    cover,
    logo,
    title,
    description,
    isExpress,
    deliveryPrice,
    classname
  }: VendorCardType) {
  return <Link href={link}>
    <div className={classnames(styles.VendorCard, `${classname}`)}>
      <div className={styles.VendorCard__header}>
        <Image
          src={cover}
          alt={title}
          layout={'fill'}
        />
        <div
          className={styles.VendorCard__logo}>
          <Image
            src={logo}
            alt={title}
            width={56}
            height={56}
            radius={8}
          />
        </div>
      </div>
      <div className={styles.VendorCard__footer}>
        <div className={styles.VendorCard__titleRate}>
          <h3 className={styles.VendorCard__title}>
            {title}
          </h3>
          <span className={styles.VendorCard__rate}></span>
        </div>
        <div className={styles.VendorCard__description}>{description}</div>
        <div>
          <div>
            <span className={styles.VendorCard__deliveryType}>{isExpressDelivery(isExpress)}</span>
            <span className={styles.VendorCard__deliveryPrice}>{deliveryFee(deliveryPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
}

export { VendorCard };
