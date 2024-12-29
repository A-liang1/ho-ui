import { isNumber, isString, isStringNumber } from "../vue";
export function addUnit(value: string | number, defaultUnit: string = "px") {
  if (!value) return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
}
