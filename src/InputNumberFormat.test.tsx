import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputNumberFormat, { type InputNumberFormatProps } from '@react-input/number-format/InputNumberFormat';

const user = userEvent.setup({ delay: 15 });

const init = (props: InputNumberFormatProps = {}) => {
  render(<InputNumberFormat {...props} data-testid="input-number-format" />);
  return screen.getByTestId<HTMLInputElement>('input-number-format');
};

const initWithDefaultType = async (props: InputNumberFormatProps = {}) => {
  const input = init(props);
  await user.type(input, '1234');
  return input;
};

/**
 * INSERT
 */

// default

test('Insert', async () => {
  const input = await initWithDefaultType();
  expect(input).toHaveValue('1 234');
});

test('Insert without selection range', async () => {
  const input = await initWithDefaultType();
  await user.type(input, '9', { initialSelectionStart: 3, initialSelectionEnd: 3 });
  expect(input).toHaveValue('12 934');
});

test('Insert less than selection range', async () => {
  const input = await initWithDefaultType();
  await user.type(input, '9', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('194');
});

test('Insert more than selection range', async () => {
  const input = await initWithDefaultType();
  await user.type(input, '6789', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('167 894');
});

// minimumIntegerDigits: 4

test('Insert without selection range (3-3)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 4 });
  await user.type(input, '9', { initialSelectionStart: 3, initialSelectionEnd: 3 });
  expect(input).toHaveValue('12 934');
});

test('Insert less than selection range (2-4)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 4 });
  await user.type(input, '9', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('0 194');
});

test('Insert more than selection range (2-4)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 4 });
  await user.type(input, '6789', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('167 894');
});

// minimumIntegerDigits: 6

test('Insert without selection range (5-5)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 6 });
  await user.type(input, '9', { initialSelectionStart: 5, initialSelectionEnd: 5 });
  expect(input).toHaveValue('012 934');
});

test('Insert less than selection range (4-6)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 6 });
  await user.type(input, '9', { initialSelectionStart: 4, initialSelectionEnd: 6 });
  expect(input).toHaveValue('000 194');
});

test('Insert more than selection range (4-6)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 6 });
  await user.type(input, '6789', { initialSelectionStart: 4, initialSelectionEnd: 6 });
  expect(input).toHaveValue('167 894');
});

/**
 * BACKSPACE
 */

test('Backspace without selection range', async () => {
  const input = await initWithDefaultType();
  await user.type(input, '{Backspace}', { initialSelectionStart: 4, initialSelectionEnd: 4 });
  expect(input).toHaveValue('124');
});

test('Backspace with selection range', async () => {
  const input = await initWithDefaultType();
  await user.type(input, '{Backspace}', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('14');
});

// minimumIntegerDigits: 4

test('Backspace without selection range (4-4)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 4 });
  await user.type(input, '{Backspace}', { initialSelectionStart: 4, initialSelectionEnd: 4 });
  expect(input).toHaveValue('0 124');
});

test('Backspace with selection range (2-4)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 4 });
  await user.type(input, '{Backspace}', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('0 014');
});

// minimumIntegerDigits: 6

test('Backspace without selection range (6, 6)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 6 });
  await user.type(input, '{Backspace}', { initialSelectionStart: 6, initialSelectionEnd: 6 });
  expect(input).toHaveValue('000 124');
});

test('Backspace with selection range (4-6)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 6 });
  await user.type(input, '{Backspace}', { initialSelectionStart: 4, initialSelectionEnd: 6 });
  expect(input).toHaveValue('000 014');
});

/**
 * DELETE
 */

// default

test('Delete without selection range', async () => {
  const input = await initWithDefaultType();
  await user.type(input, '{Delete}', { initialSelectionStart: 3, initialSelectionEnd: 3 });
  expect(input).toHaveValue('124');
});

test('Delete with selection range', async () => {
  const input = await initWithDefaultType();
  await user.type(input, '{Delete}', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('14');
});

// minimumIntegerDigits: 4

test('Delete without selection range (3-3)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 4 });
  await user.type(input, '{Delete}', { initialSelectionStart: 3, initialSelectionEnd: 3 });
  expect(input).toHaveValue('0 124');
});

test('Delete with selection range (2-4)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 4 });
  await user.type(input, '{Delete}', { initialSelectionStart: 2, initialSelectionEnd: 4 });
  expect(input).toHaveValue('0 014');
});

// minimumIntegerDigits: 6

test('Delete without selection range (5-5)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 6 });
  await user.type(input, '{Delete}', { initialSelectionStart: 5, initialSelectionEnd: 5 });
  expect(input).toHaveValue('000 124');
});

test('Delete with selection range (4-6)', async () => {
  const input = await initWithDefaultType({ minimumIntegerDigits: 6 });
  await user.type(input, '{Delete}', { initialSelectionStart: 4, initialSelectionEnd: 6 });
  expect(input).toHaveValue('000 014');
});
