import React from 'react';
import classnames from 'classnames';
import { InputType } from '@components/Input';
import Button from '@components/Button';

interface Props {
  className?: string;
}

const NEWSLETTER_API = process.env.NEWSLETTER_API;
const NEWSLETTER_USER_ID = process.env.NEWSLETTER_USER_ID;
const NEWSLETTER_FORM_ID = process.env.NEWSLETTER_FORM_ID;

const SubscribeNewsletter: React.FC<Props> = ({ className }) => {
  return (
    <form
      className={classnames(
        'flex flex-col items-center justify-center mb-12 lg:flex-row',
        className
      )}
      action={NEWSLETTER_API}
      method="POST"
    >
      <input type="hidden" name="u" value={NEWSLETTER_USER_ID} />
      <input type="hidden" name="id" value={NEWSLETTER_FORM_ID} />
      <h3 className="w-full text-center lg:w-1/4 text-white m-0 mb-8 font-semibold text-2xl lg:mb-0">
        Stay in the Loop
      </h3>
      <input
        name="MERGE0"
        id="MERGE0"
        type={InputType.email}
        className="bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 w-full lg:w-1/4 mb-3 lg:mr-3 lg:mb-0"
        placeholder="Email"
        required
      />
      <input
        name="MERGE1"
        id="MERGE1"
        type={InputType.text}
        className="bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 w-full lg:w-1/4 mb-3 lg:mr-3 lg:mb-0"
        placeholder="First Name"
        required
      />
      <input
        name="MERGE2"
        id="MERGE2"
        type={InputType.text}
        className="bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 w-full lg:w-1/4 mb-3 lg:mr-3 lg:mb-0"
        placeholder="Last Name"
        required
      />
      <Button className="w-full lg:w-1/5" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SubscribeNewsletter;
