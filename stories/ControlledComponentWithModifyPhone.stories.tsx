import React, { useState } from 'react';

import { InputMask, type MaskEventDetail } from '../src';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Mask',
  component: InputMask,
} satisfies Meta<typeof InputMask>;

function Component() {
  const [detail, setDetail] = useState<MaskEventDetail | null>(null);

  const modify = (input: string) => {
    const newMask = input && input[0] !== '7' ? '+_ __________' : '+_ (___) ___-__-__';
    return { mask: newMask };
  };

  return (
    <>
      <InputMask
        mask="+_ (___) ___-__-__"
        replacement={{ _: /\d/ }}
        value={detail?.value}
        modify={modify}
        onMask={(event) => setDetail(event.detail)}
      />

      <pre>{JSON.stringify(detail, null, 2)}</pre>
    </>
  );
}

export const ControlledComponentWithModifyPhone = {
  render: Component,
} satisfies StoryObj<typeof InputMask>;
