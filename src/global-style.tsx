import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

import './tailwind.css';

export default createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    ${tw`font-bold`}
  }

  h1 {
    ${tw`text-3xl leading-none`}
  }
`;
