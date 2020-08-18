import React from 'react';

interface Props {
  hello: string;
}

const Home: React.FC<Props> = () => {
  return <div>Hello world!</div>;
};

export default Home;
