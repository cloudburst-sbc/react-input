/// <reference types="react" />
import type { NumberFormatProps } from './types';
import type { InputComponentProps } from '@react-input/core';
export type InputNumberFormatProps<C extends React.ComponentType | undefined = undefined> = NumberFormatProps & InputComponentProps<C>;
declare const InputNumberFormat: InputComponent<NumberFormatProps>;
export default InputNumberFormat;
