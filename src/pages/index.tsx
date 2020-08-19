import React from 'react';

interface Props {
  message: string;
}

const Message: React.FC<Props> = (props) => {
  return <p>{props.message}</p>;
};

const Home = () => {
  return <Message message="Hello world" />;
};

export default Home;
