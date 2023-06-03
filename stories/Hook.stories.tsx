import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputMask, type MaskEventDetail, useMask } from '../src';

export default {
  title: 'Mask',
  component: InputMask,
} satisfies Meta<typeof InputMask>;

function Component() {
  const [detail, setDetail] = useState<MaskEventDetail | null>(null);
  const [value, setValue] = useState('');

  const ref = useMask({
    mask: 'wwwnnn',
    replacement: { w: /\D/, n: /\d/ },
    // separate: true,
    showMask: true,
    onMask: (event) => {
      setDetail(event.detail);
    },
  });

  return (
    <>
      <input
        ref={ref}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />

      <pre>{JSON.stringify(detail, null, 2)}</pre>
    </>
  );
}

export const Hook = {
  render: Component,
} satisfies StoryObj<typeof InputMask>;
