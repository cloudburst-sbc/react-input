import { forwardRef } from 'react';

import { useConnectedInputRef } from '@react-input/core';

import useMask from './useMask';

import type { MaskProps } from './types';
import type { InputComponent, InputComponentProps } from '@react-input/core';

export type InputMaskProps<C extends React.ComponentType | undefined = undefined> = MaskProps & InputComponentProps<C>;

function ForwardedInputMask<C extends React.ComponentType | undefined = undefined>(
  { component: Component, mask, replacement, showMask, separate, modify, onMask, ...props }: InputMaskProps<C>,
  forwardedInputRef: React.ForwardedRef<HTMLInputElement>
): JSX.Element {
  const inputRef = useMask({ mask, replacement, showMask, separate, modify, onMask });

  const connectedInputRef = useConnectedInputRef(inputRef, forwardedInputRef);

  if (Component) {
    return <Component ref={connectedInputRef} {...(props as any)} />;
  }

  return <input ref={connectedInputRef} {...props} />;
}

const InputMask = forwardRef(ForwardedInputMask) as InputComponent<MaskProps>;

export default InputMask;
