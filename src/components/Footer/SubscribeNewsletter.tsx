import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import classnames from 'clsx';
import parse from 'html-react-parser';
import Button from '@components/Button';
import Input, { InputType } from '@components/Input';

interface Props {
  msg?: string;
  result?: string;
  cta?: string;
}

const BidenSubscribe: React.FC<Props> = ({ cta }) => {
  const INITIAL_STATE = {
    LNAME: '',
    FNAME: '',
    email: ''
  };

  // This is a bit hacky, but i didnt want to setHtmlDangerously and html was being escaped
  const SUCCESS_MESSAGE_PRIMARY: string =
    'Thank you for signing up to receive messages from the Debt Collective.';
  const SUCCESS_MESSAGE_SECONDARY: string =
    "We've sent you a confirmation message via email.";
  const [message__primary, setPrimaryMessage] = useState<string | undefined>();
  const [message__secondary, setSecondaryMessage] = useState<string>();

  const [data, setData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const hasRequiredFields = () => {
    return data.email;
  };

  const handleChange = (key: string, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const primeMessage = () => {
    setIsLoading(false);
    setIsComplete(true);
    const hideMesageTimeout = setTimeout(() => {
      setIsComplete(false);
      return () => {
        clearTimeout(hideMesageTimeout);
      };
    }, 4300);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isLoading) return;

    if (!hasRequiredFields()) setPrimaryMessage('Please enter a valid email');

    if (typeof fetch === 'undefined' || typeof window === 'undefined') return;

    setIsLoading(true);
    setIsComplete(false);

    addToMailchimp(
      data.email,
      data,
      'https://debtcollective.us20.list-manage.com/subscribe/post?u=f9411e6e69ac46a2b197ad951&amp;id=9254007e57&amp;WHICH_FORM=footer_form'
    )
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        setPrimaryMessage(SUCCESS_MESSAGE_PRIMARY);
        setSecondaryMessage(SUCCESS_MESSAGE_SECONDARY);
        primeMessage();
      })
      .catch((err: string) => {
        console.log('Err', err, typeof err, typeof parse(err), parse(err));
        setPrimaryMessage(err);
        setSecondaryMessage('');
        primeMessage();
      });
  };

  const transitionClasses = [
    'transition transform duration-500 timing-function-out-expo'
  ];

  const formContainerClasses = '';

  return (
    <div className="w-full h-80 md:h-36 overflow-hidden my-12">
      <div
        className={classnames(
          transitionClasses,
          'form-row mb-4',
          isComplete ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <form
          name="subscribeForm"
          method="POST"
          id="subscribe-form"
          className="subscribe-form"
          onSubmit={handleSubmit}
        >
          <h2 className="font-black text-white mb-6 text-2xl">
            {cta ? cta : 'Stay in the Loop'}
          </h2>
          <Input
            label="Email address"
            className="subscribe-email mb-4 sm:pr-2 inline-block w-full md:w-3/12"
            type={InputType.email}
            id="email"
            name="email"
            placeholder="email address..."
            onChange={(value: string) => handleChange('email', value)}
            value={data.email}
            variant="dark"
            required
          />
          <Input
            label="First Name"
            className="subscribe-fname mb-4 pr-2 inline-block w-2/4 md:w-3/12"
            type={InputType.text}
            id="FNAME"
            name="FNAME"
            placeholder=""
            onChange={(value: string) => handleChange('FNAME', value)}
            value={data.FNAME}
            variant="dark"
          />
          <Input
            label="LastName"
            className="subscribe-lname mb-4 sm:pr-2 inline-block w-2/4 md:w-3/12"
            type={InputType.text}
            id="LNAME"
            name="LNAME"
            placeholder=""
            onChange={(value: string) => handleChange('LNAME', value)}
            value={data.LNAME}
            variant="dark"
          />
          <Button
            className="mt-1 sm:mt-0 md:w-3/12"
            type="submit"
            disabled={isLoading}
          >
            <svg
              className={classnames(
                isLoading ? 'animate-spin' : 'hidden',
                'inline-block text-white w-4 h-4 mr-2'
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-white">Sign Up</span>
          </Button>
        </form>
      </div>
      <div
        className={classnames(
          transitionClasses,
          isComplete ? '-translate-y-full' : 'translate-y-0',
          'relative z-10 h-full'
        )}
      >
        <a
          href="#"
          className="absolute top-1 right-1 bottom-auto left-auto text-white"
          onClick={(e) => {
            e.preventDefault();
            setIsComplete(false);
          }}
        >
          <span className="sr-only">Close</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className="text-white fill-current"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              fill="#ffffff"
              d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            />
          </svg>
        </a>

        {Boolean(message__primary) && (
          <p role="alert" className="text-white text-lg font-bold text-center">
            {parse(String(message__primary))!}
          </p>
        )}
        {Boolean(message__secondary) && (
          <p role="alert" className="text-white text-center">
            {message__secondary}
          </p>
        )}
      </div>
    </div>
  );
};

export default BidenSubscribe;
