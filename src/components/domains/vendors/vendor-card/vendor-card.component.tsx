import { Link } from "../../../shared";
import { Image } from "../../../shared/image";
import {isExpressDelivery, deliveryFee, classnames, toFa, rate as rateUtil} from "../../../../utils";
import { VendorCardType} from './vendor-card.models';
import Star from '../../../../../public/svg/star.svg';
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
    rate,
    commentCount,
    classname
  }: VendorCardType) {
  const {rateText, rateColor} = rateUtil({rate});
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
          <span>
            {commentCount && <span className={styles.VendorCard__comments}>({toFa(commentCount)})</span>}
            <span
              className={styles.VendorCard__rate}
              style={{
              backgroundColor: rateColor.bgColor,
              color: rateColor.color
            }}>
              {rateText}
              <Star style={{width: '12px',height: '12px', fill: rateColor.color}} fill={rateColor.color} color={rateColor.color} />
            </span>
          </span>
        </div>
        {description && <div className={styles.VendorCard__description}>{description}</div>}
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
