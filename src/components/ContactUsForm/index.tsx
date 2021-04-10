import React, { useState } from 'react';
import Input, { InputType } from '@components/Input';
import TextArea from '@components/TextArea';
import InputSelect from '@components/InputSelect';
import Button from '@components/Button';

const SUBJECT_OPTIONS = [
  {
    label: '-- Select a subject --',
    value: ''
  },
  {
    label: 'Press Inquity',
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

const ContactUsForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (key: string, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
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
        <form className="flex flex-col w-full mx-auto md:w-3/4">
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
            onChange={(value) => handleChange('subject', value)}
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
          />
          <Button className="self-end mt-12" type="submit">
            Contact us
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
