import {VendorTypes} from "../../constants";

type VendorProps = ({
  type: typeof VendorTypes.text;
  data: string
} | {
  type: typeof VendorTypes.vendor;
  data: {
    id: string;
    menuUrl: string;
    backgroundImage: string;
    logo: string;
    title: string;
    rate: number;
    commentCount: number;
    description: string;
    isZFExpress: boolean;
    deliveryFee: number;
  }
})

type VendorReturnType = ({
  type: typeof VendorTypes.text;
  text: string
} | {
  type: typeof VendorTypes.vendor;
  id: string;
  link: string;
  cover: string;
  logo: string;
  title: string;
  rate: number;
  commentCount: number;
  description: string;
  isExpress: boolean;
  deliveryPrice: number;
})

const vendorTransformer = (item: VendorProps): VendorReturnType => {
  const {type, data} = item;
  if (type === VendorTypes.text) return {
    type: VendorTypes.text,
    text: data as string
  }
  const { id, menuUrl, backgroundImage, rate, commentCount, logo, title, description, isZFExpress, deliveryFee } = data;
  return {
    type: VendorTypes.vendor,
    id,
    rate,
    commentCount,
    logo,
    title,
    description,
    link: menuUrl,
    cover: backgroundImage,
    isExpress: isZFExpress,
    deliveryPrice: deliveryFee
  }
};

const transformer = (data) => {
  return {
    items: data.data.finalResult.map(vendorTransformer),
    totalCount: data.data.count
  };
};

export { transformer };