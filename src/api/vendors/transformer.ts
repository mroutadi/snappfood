import {VendorTypes} from "../../constants";

const vendorTransformer = (item) => {
  const {type, data} = item;
  if (type === VendorTypes.text) return {
    type,
    text: data
  }
  return {
    type,
    link: data.menuUrl,
    cover: data.backgroundImage,
    logo: data.logo,
    title: data.title,
    description: data.description,
    isExpress: data.isZFExpress,
    deliveryPrice: data.deliveryFee
  }
};

const transformer = (data) => {
  return {
    items: data.data.finalResult.map(vendorTransformer),
    totalCount: data.data.count
  };
};

export { transformer };