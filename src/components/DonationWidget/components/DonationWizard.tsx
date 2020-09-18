import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`grid grid-cols-1 gap-0 max-w-full border border-beige-500 bg-beige-100 rounded overflow-hidden`}
  width: 28rem;
`;

export const Box = styled.div`
  ${tw`h-64 p-4 flex flex-col justify-center items-center`}
`;

export const Input = styled.input`
  ${tw`py-2 px-3 rounded-md bg-white border border-beige-500 focus:outline-none focus:border-blue w-full`}

  & + #stripe-card-element,
  & + & {
    ${tw`mt-4`}
  }
`;

export const HelpText = styled.p`
  ${tw`text-xs mt-1 text-gray-100`}
`;

export const ToggleSelector = styled.div`
  ${tw`mb-4 flex justify-between bg-beige-100 border border-beige-500 rounded overflow-hidden`}
`;

export const ToggleSelectorOption = styled.div`
  ${tw`flex flex-grow justify-center`}

  input[type='radio'] {
    ${tw`appearance-none`}
  }

  input[type='radio']:checked + label {
    ${tw`bg-primary text-white`}
  }

  input[type='radio']:focus + label {
    ${tw`underline`}
  }

  label {
    ${tw`block uppercase text-sm py-2 w-full text-center cursor-pointer font-bold`}
  }
`;

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'transparent' | 'default';
}

export const Button = styled.button<ButtonProps>`
  ${({ variant }) =>
    variant === 'transparent'
      ? tw`font-bold text-primary`
      : tw`bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded text-center uppercase w-full`}

  &:disabled {
    ${tw`opacity-50 cursor-not-allowed`}
  }
`;

export const Form = styled.form`
  ${tw`p-4`}

  #stripe-card-element {
    ${tw`py-2 px-3 rounded-md bg-white border border-beige-500 focus:outline-none focus:border-blue w-full`}
  }

  button[type='submit'] {
    ${tw`mt-4`}
  }
`;

export const Title = styled.div`
  ${tw`text-lg text-center bg-white-100 py-3 px-4 border-0 border-beige-500 border-b font-bold uppercase text-sm`}
`;

export const Spinner = styled.div`
  .sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
  }

  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #2b2b2b;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%,
    70%,
    100% {
      -webkit-transform: scale3D(1, 1, 1);
      transform: scale3D(1, 1, 1);
    }
    35% {
      -webkit-transform: scale3D(0, 0, 1);
      transform: scale3D(0, 0, 1);
    }
  }
`;
