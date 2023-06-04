import { forwardRef } from 'react';

import { useConnectedInputRef } from '@react-input/core';

import useMask from './useMask';

import type { MaskProps } from './types';
import type { InputComponent, PropsWithComponent, PropsWithoutComponent } from '@react-input/core';

export type InputMaskProps<P extends object | null = null> = MaskProps &
  (P extends null ? PropsWithoutComponent : P extends object ? PropsWithComponent<P> : Record<string, never>);

function ForwardedInputMask(
  props: InputMaskProps,
  forwardedInputRef: React.ForwardedRef<HTMLInputElement>
): JSX.Element;
function ForwardedInputMask<P extends object>(
  props: InputMaskProps<P>,
  forwardedInputRef: React.ForwardedRef<HTMLInputElement>
): JSX.Element;
function ForwardedInputMask<P extends object>(
  {
    component: Component,
    mask,
    replacement,
    showMask,
    separate,
    modify,
    onMask,
    ...props
  }: InputMaskProps | InputMaskProps<P>,
  forwardedInputRef: React.ForwardedRef<HTMLInputElement>
): JSX.Element {
  const inputRef = useMask({ mask, replacement, showMask, separate, modify, onMask });

  const connectedInputRef = useConnectedInputRef(inputRef, forwardedInputRef);

  if (Component) {
    return <Component ref={connectedInputRef} {...props} />;
  }

  return <input ref={connectedInputRef} {...props} />;
}

const InputMask = forwardRef(ForwardedInputMask) as unknown as InputComponent<MaskProps>;

export default InputMask;
