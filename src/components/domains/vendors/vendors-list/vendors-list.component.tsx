import { VendorCard } from "../vendor-card";
import { classnames, toFa } from "../../../../utils";
import {VendorTypes} from "../../../../constants";
import styles from './vendors-list.module.scss'

function VendorsList({vendors, className}) {
  return <div className={classnames(`${className}`, styles.VendorsList)}>
    {vendors.map(item => {
      if (item.type === VendorTypes.text) {
        return <h3 className={styles.VendorsList__title}>{toFa(item.text)}</h3>
      }
      return <VendorCard
        cover={item.cover}
        link={item.link}
        logo={item.logo}
        title={item.title}
        description={item.description}
        isExpress={item.isExpress}
        deliveryPrice={item.deliveryPrice}
      />
    })}
  </div>
}

export { VendorsList };
