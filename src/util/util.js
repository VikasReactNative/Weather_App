import { Dimensions } from "react-native";
export const rs = '₹'
const windowDimensions = Dimensions.get('window');
export const windowHeight = windowDimensions.height;
export const windowWidth = windowDimensions.width;
export const log = (a, b, c, d, e) => {
  console.log('✅', a ?? '', b ?? '', c ?? '', d ?? '', e ?? '')
}
export const logError = (a, b, c, d, e) => {
  console.log('❌', a ?? '', b ?? '', c ?? '', d ?? '', e ?? '')
}
export const getString = (l1, l2, l3, l4, l5) => {
  let str = ''
  if (l1) {
    str = str + l1 + ', '
  }
  if (l2) {
    str = str + l2 + ', '
  }
  if (l3) {
    str = str + l3 + ', '
  }
  if (l4) {
    str = str + l4 + ', '
  }
  if (l5) {
    str = str + l5 + ', '
  }
  return str
}
export const isNullOrEmpty = s => {
  if (
    s == 'N/A' ||
    s === undefined ||
    s === null ||
    s === '' ||
    s === 'null' ||
    s === 'undefined' ||
    s == 0
  ) {
    return true;
  } else {
    return false;
  }
};
export const isListNullOrEmpty = list => {
  if (list === undefined || list === null || list.length === 0) {
    return true;
  }
  return false;
};
export const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];