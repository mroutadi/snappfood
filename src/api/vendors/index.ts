import {apiRequest} from '../../services/api/configuration';
import { transformer } from './transformer';

const urlVendors = 'restaurant/vendors-list';

const getApiVendors = apiRequest({
  url: urlVendors,
  responseTransformer: transformer
});

export { getApiVendors };