export { default as SyntheticChangeError } from './errors/SyntheticChangeError';
export { default as useConnectedInputRef } from './hooks/useConnectedInputRef';
export { default as useDispatchCustomInputEvent } from './hooks/useDispatchCustomInputEvent';
export { default as useInput } from './hooks/useInput';
export { default as setInputAttributes } from './utils/setInputAttributes';

export type {
  CustomInputEvent,
  CustomInputEventHandler,
  InputType,
  InputAttributes,
  Init,
  Tracking,
  ExtendedHTMLInputElement,
  PropsWithoutComponent,
  PropsWithComponent,
  InputComponent,
} from './types';
