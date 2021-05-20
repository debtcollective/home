import React from 'react';
import classnames from 'clsx';
import { InputType } from '@components/Input';
import Button from '@components/Button';

interface Props {
  className?: string;
  stackedVariant?: boolean;
  blockStyle?: string;
  cta?: string;
  ctaClassNames?: string;
  buttonLabel?: string;
}

const GATSBY_NEWSLETTER_API = process.env.GATSBY_NEWSLETTER_API;
const GASTBY_NEWSLETTER_USER_ID = process.env.GASTBY_NEWSLETTER_USER_ID;
const GASTBY_NEWSLETTER_FORM_ID = process.env.GASTBY_NEWSLETTER_FORM_ID;

const SubscribeNewsletter: React.FC<Props> = ({
  className,
  cta,
  ctaClassNames,
  buttonLabel,
  stackedVariant,
  blockStyle
}) => {
  if (stackedVariant) {
    blockStyle = 'block';
  }
  return (
    <form
      className={classnames(
        'flex flex-col items-center justify-center mb-12 lg:flex-row',
        className
      )}
      action={GATSBY_NEWSLETTER_API}
      method="POST"
    >
      <input type="hidden" name="u" value={GASTBY_NEWSLETTER_USER_ID} />
      <input type="hidden" name="id" value={GASTBY_NEWSLETTER_FORM_ID} />
      <h3 className="w-full text-center lg:w-1/4 { light && text-white } m-0 mb-8 font-semibold text-2xl lg:mb-0">
        {buttonLabel ? buttonLabel : 'Stay in the Loop'}
      </h3>
      <input
        name="MERGE1"
        id="MERGE1"
        type={InputType.text}
        className={classnames(
          'bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 w-full lg:w-1/4 mb-3 lg:mr-3 lg:mb-0'
        )}
        placeholder="First Name"
        title="Your first name"
        required
      />
      <input
        name="MERGE2"
        id="MERGE2"
        type={InputType.text}
        className="bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 w-full lg:w-1/4 mb-3 lg:mr-3 lg:mb-0"
        placeholder="Last Name"
        title="Your last name"
        required
      />
      <input
        name="MERGE0"
        id="MERGE0"
        type={InputType.email}
        className="bg-white-100 rounded-md px-4 py-3 placeholder-gray-400 text-black-100 w-full lg:w-1/4 mb-3 lg:mr-3 lg:mb-0"
        placeholder="Email"
        title="Your email"
        required
      />
      <Button className="w-full lg:w-1/5" type="submit">
        {cta ? cta : 'Sign Up'}
      </Button>
    </form>
  );
};

export default SubscribeNewsletter;
