import {
  IoFastFoodOutline,
  IoCarSportOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { type IconType } from "react-icons/lib";
import {
  MdBlurOn,
  MdCastForEducation,
  MdMoney,
  MdOutlineHealthAndSafety,
  MdOutlineSavings,
  MdShoppingCartCheckout,
  MdSportsSoccer,
} from "react-icons/md";

export type CategoryIconNames =
  | "food"
  | "transportation"
  | "housing"
  | "utilities"
  | "insurance"
  | "healthcare"
  | "saving"
  | "entertainment"
  | "clothing"
  | "education";

export const CATEGORY_ICON_MAPPING: Record<CategoryIconNames, IconType> = {
  food: IoFastFoodOutline,
  transportation: IoCarSportOutline,
  housing: IoHomeOutline,
  utilities: MdBlurOn,
  insurance: MdMoney,
  healthcare: MdOutlineHealthAndSafety,
  saving: MdOutlineSavings,
  entertainment: MdSportsSoccer,
  clothing: MdShoppingCartCheckout,
  education: MdCastForEducation,
};
