import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { InputMask, type MaskEventDetail } from '../src';

export default {
  title: 'Mask',
  component: InputMask,
} satisfies Meta<typeof InputMask>;

function StoryTestProps() {
  const [detail, setDetail] = useState<MaskEventDetail | null>(null);
  const [state, setState] = useState({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
    showMask: true,
    separate: false,
  });

  const [value, setValue] = useState('fegoj0fwfwe');

  return (
    <>
      <InputMask
        mask={state.mask}
        replacement={state.replacement}
        showMask={state.showMask}
        separate={state.separate}
        value={value}
        // defaultValue="fegoj0fwfwe"
        onChange={(event) => setValue(event.target.value)}
        onMask={(event) => {
          setDetail(event.detail);
        }}
      />

      <button
        type="button"
        onClick={() =>
          setState((prev) => ({
            ...prev,
            mask: prev.mask === '+7 (___) ___-__-__' ? '___-___' : '+7 (___) ___-__-__',
          }))
        }
      >
        Изменить mask
      </button>

      {/* <button
        type="button"
        onClick={() =>
          setState((prev) => ({
            ...prev,
            replacement: prev.replacement === { _: /\d/ } ? '0' : '_',
          }))
        }
      >
        Изменить replacement
      </button> */}

      <button
        type="button"
        onClick={() => setState((prev) => ({ ...prev, showMask: !prev.showMask }))}
      >
        Изменить showMask
      </button>

      <button
        type="button"
        onClick={() => setState((prev) => ({ ...prev, separate: !prev.separate }))}
      >
        Изменить separate
      </button>

      <pre>{JSON.stringify({ state, detail }, null, 2)}</pre>
    </>
  );
}

export const TestProps = {
  render: StoryTestProps,
} satisfies StoryObj<typeof InputMask>;
