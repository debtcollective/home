import React,  { useState } from 'react';
import Button from '@components/Button';
import Input, { InputType } from '@components/Input';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import classnames from 'clsx';

interface Props {
  email?:string,
  name?:string,
  key?:string,
  value?:string
}

const BidenSubscribe: React.FC<Props> = () => {

  const INITIAL_STATE = {
    email: '',
  };

  // This is a bit hacky, but i didnt want to setHtmlDangerously and html was being escaped
  const SUCCESS_MESSAGE_PRIMARY = "Thank you for signing up to receive messages from the Debt Collective."
  const SUCCESS_MESSAGE_SECONDARY = "We've sent you a confirmation message via email."
  const [message__primary, setPrimaryMessage] = useState<string>();
  const [message__secondary, setSecondaryMessage] = useState<string>();

  const [data, setData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const hasRequiredFields = () => {
    return data.email;
  };

  const transitionClasses = [
    'transition transform duration-500 timing-function-out-expo',
    isComplete ? '-translate-y-full' : 'translate-y-0'

  ];

  const formContainerClasses = 'w-full p-6 sm:p-1o h-64 sm:h-54';

  const formClasses = [
    'form-row',
    formContainerClasses
  ]

  const messageClasses = [
    'relative z-10',
    formContainerClasses
  ];

  const handleSuccessfulRequest = () => {
    setData(INITIAL_STATE);
  };

  const handleChange = (key: string, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const primeMessage = () => {
    setIsLoading(false);
    setIsComplete(true);
    const hideMesageTimeout = setTimeout(()=> {
      setIsComplete(false);
      return () => clearTimeout(hideMesageTimeout)
    }, 3000)
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (isLoading) return;

    if (!hasRequiredFields())
      setPrimaryMessage('Please enter a valid email');

    if (typeof fetch === 'undefined' || typeof window === 'undefined') return;

    setIsLoading(true);
    setIsComplete(false);

    addToMailchimp(data.email)
      .then(({ msg, result }: { msg: string, result: string}) => {
        if (result !== 'success') {
            throw msg
        }
        setPrimaryMessage(SUCCESS_MESSAGE_PRIMARY)
        setSecondaryMessage(SUCCESS_MESSAGE_SECONDARY)
        primeMessage()
      })
      .catch((err: string) => {
        setPrimaryMessage(err)
        primeMessage()
      })
  };

  return (
    <div className={classnames(`${formContainerClasses} overflow-hidden my-12 bg-white-200`)}>
      <form
        name="subscribeForm"
        method="POST"
        id="subscribe-form"
        className="subscribe-form"
        onSubmit={handleSubmit}
      >
        <div className={classnames(formClasses)}>
          <h4 className="font-black text-1.5xl mb-2">Sign up to receive updates form the Debt Collective.</h4>
          <Input
            label="Email address"
            className="subscribe-email inline-block w-full mr-1 sm:w-1/2 md:w-2/3 2xl:w-3/4"
            type={InputType.email}
            id="email"
            name="email"
            placeholder="email address..."
            onChange={(value: string) => handleChange('email', value)}
            value={data.email}
            required
          />
          <Button
            type="submit"
            disabled={isLoading}>
              <svg className={`inline-block m-r-6 ${!isLoading && 'hidden'} ${isLoading && 'animate-spin'} -ml-1 mr-3 h-5 w-5 text-white`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            Sign Up
          </Button>
        </div>
        <div className={classnames(messageClasses)}>
          {Boolean(message__primary) && (
            <p
              role="alert"
              className="text-lg font-bold text-center"
            >
              {message__primary}
            </p>
          )}
          {Boolean(message__secondary) && (
            <p
              role="alert"
              className="text-center"
            >
              {message__secondary}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default BidenSubscribe;
