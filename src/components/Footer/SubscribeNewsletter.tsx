import React, { useState, SyntheticEvent } from 'react';
import classnames from 'classnames';
import Input, { InputType } from 'components/Input';
import Button from 'components/Button';

interface Props {
  className?: string;
}

const SubscribeNewsletter: React.FC<Props> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    // @TODO: add feature to subscribe to newsletter
  };

  return (
    <form
      className={classnames(
        'flex flex-col items-center justify-center mb-12 lg:mb-24 lg:flex-row',
        className
      )}
      onSubmit={handleSubmit}
    >
      <h3 className="w-full text-center lg:w-1/4 text-white m-0 mb-8 font-semibold text-2xl lg:mb-0">
        Stay in the Loop
      </h3>
      <Input
        className="w-full lg:w-1/4 mb-3 lg:mr-3 lg:mb-0"
        id="email"
        onChange={setEmail}
        placeholder="Email"
        type={InputType.email}
        value={email}
      />
      <Input
        className="w-full lg:w-1/4 mb-8 lg:mr-8 lg:mb-0"
        id="name"
        onChange={setName}
        placeholder="Name"
        type={InputType.text}
        value={name}
      />
      <Button className="w-full lg:w-1/5">Sign Up</Button>
    </form>
  );
};

export default SubscribeNewsletter;
