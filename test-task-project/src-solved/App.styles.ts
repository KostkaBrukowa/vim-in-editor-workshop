import classNames from 'clsx'
import { selectors } from './selectors'

export const failedClassNames = classNames(selectors.mColorRed);

export const footerClassNames = classNames(
  selectors.mDisplayFlex,
  selectors.mFlexJustifyBetween,
  selectors.mFlexDirectionColumnReverse,
  selectors.mFlexDirectionRowReverseMd,
);

export const subTitleClassNames = selectors.mMarginBottom0;
