import React, { forwardRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputMask } from '../src';

export default {
  title: 'Mask',
  component: InputMask,
} satisfies Meta<typeof InputMask>;

const CustomComponent = forwardRef(
  ({ label }: { label?: string }, forwardedRef: React.ForwardedRef<HTMLInputElement>) => {
    const [value, setValue] = useState('');

    return (
      <>
        <label htmlFor="custom-input">{label}</label>
        <input
          ref={forwardedRef}
          id="custom-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </>
    );
  }
);

function StoryCustomComponentWithInnerState() {
  return (
    <InputMask
      component={CustomComponent}
      label="Мой заголовок"
      mask="+7 (___) ___-__-__"
      replacement={{ _: /\d/ }}
    />
  );
}

export const CustomComponentWithInnerState = {
  render: StoryCustomComponentWithInnerState,
} satisfies StoryObj<typeof InputMask>;