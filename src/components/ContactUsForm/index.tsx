import React, { useState } from 'react';
import Input, { InputType } from '@components/Input';
import TextArea from '@components/TextArea';
import InputSelect from '@components/InputSelect';
import Button from '@components/Button';

const SITE_KEY = process.env.GATSBY_RECAPTCHA_V3_SITE_KEY;
const MESSAGE_MINIMUM_LENGTH = 20;

const SUBJECT_OPTIONS = [
  {
    label: '-- Select a subject --',
    value: '',
    disabled: true,
    selected: true
  },
  {
    label: 'Press Inquiry',
    value: 'press-inquiry'
  },
  {
    label: 'Signup Issue',
    value: 'account-issues'
  },
  {
    label: 'Other',
    value: 'other'
  }
];

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const ContactUsForm = () => {
  const [data, setData] = useState(INITIAL_STATE);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
  };

  const hasRequiredFields = () => {
    return data.name && data.email && data.subject && data.message;
  };

  const handleSuccessfulRequest = () => {
    setData(INITIAL_STATE);
    window.alert('Message sent successfully');
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setErrorMessage('');

    if (data?.message?.length < MESSAGE_MINIMUM_LENGTH) {
      setErrorMessage('Your message should contain at least 20 characters');
      return;
    }

    if (isLoading) return;

    if (!hasRequiredFields())
      setErrorMessage('Please fill all the required fields');

    if (typeof fetch === 'undefined' || typeof window === 'undefined') return;

    setIsLoading(true);

    const grecaptcha = (window as any).grecaptcha;
    let recaptchaToken;

    try {
      recaptchaToken = await grecaptcha.execute(SITE_KEY, {
        action: 'contact_us'
      });
    } catch (error) {
      setErrorMessage('Something went wrong, please try again');
    }

    try {
      const request = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'g-recaptcha-response': recaptchaToken,
          email: data.email,
          message: data.message,
          name: data.name,
          subject: data.subject
        })
      });
      const response = await request.json();

      if (response.status !== 200) setErrorMessage(response.message);
      if (response.status === 200) handleSuccessfulRequest();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center px-x-screen-spacing py-y-screen-spacing lg:p-desktop-screen-spacing bg-gradient-to-b from-blue-200 via-white-200 to-blue-200 lg:to-white-300">
      <div className="mx-auto max-w-8xl">
        <h1 className="text-5xl font-bold leading-none text-black lg:text-6xl">
          Contact Us
        </h1>
        <h2 className="my-8 font-sans text-xl font-bold leading-none lg:my-12 text-black-100 lg:text-2xl">
          This is an organizing space where people in debt gather to Organize,
          Resist & Reimagine.
        </h2>
        <form
          className="flex flex-col w-full mx-auto"
          onSubmit={handleSubmit}
        >
          <Input
            label="Your name:"
            type={InputType.text}
            id="name"
            onChange={(value) => handleChange('name', value)}
            value={data.name}
            className="w-full"
            required
          />
          <Input
            label="Your email:"
            type={InputType.email}
            id="email"
            onChange={(value) => handleChange('email', value)}
            value={data.email}
            className="w-full mt-6"
            required
          />
          <InputSelect
            className="w-full mt-6"
            required
            id="subject"
            label="Subject:"
            onChange={(event) =>
              handleChange('subject', event?.currentTarget?.value)
            }
            options={SUBJECT_OPTIONS}
            value={data.subject}
          />
          <TextArea
            label="Your message:"
            id="message"
            onChange={(value) => handleChange('message', value)}
            value={data.message}
            className="w-full mt-6"
            required
            minLength={20}
          />
          {Boolean(errorMessage) && (
            <p
              role="alert"
              className="mt-8 font-sans text-lg font-bold text-center text-primary"
            >
              {errorMessage}
            </p>
          )}
          <Button className="self-end mt-12" type="submit" disabled={isLoading}>
            Contact us
          </Button>
        </form>
      </div>
      <p className="px-4 mt-16 text-center text-gray-300 text-xss">
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </section>
  );
};

export default ContactUsForm;
