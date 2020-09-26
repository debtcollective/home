import React from 'react';
import useMembership from '@hooks/useMembership';
import faker from 'faker';
import { render, screen } from '@testing-library/react';

const Host = () => {
  const [membership] = useMembership();

  return <div id="host">{membership?.status}</div>;
};

test('allows to get membership from within a component', async () => {
  const status = faker.random.word();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  fetch.mockResponse(JSON.stringify({ status }));
  render(<Host />);

  expect(await screen.findByText(status)).toBeInTheDocument();
});
