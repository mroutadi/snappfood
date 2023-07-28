import {forwardRef} from "react";
import { VendorCard } from "../vendor-card";
import { classnames, toFa } from "../../../../utils";
import {VendorTypes} from "../../../../constants";
import styles from './vendors-list.module.scss'

const VendorsList = forwardRef(({ vendors, className }, ref) => {
  return <div ref={ref} className={classnames(`${className}`, styles.VendorsList)}>
    {vendors.map(item => {
      if (item.type === VendorTypes.text) {
        return <h3 key={item.text} className={styles.VendorsList__title}>{toFa(item.text)}</h3>
      }
      return <VendorCard
        key={item.id}
        {...item}
      />
    })}
  </div>
});

export { VendorsList };
