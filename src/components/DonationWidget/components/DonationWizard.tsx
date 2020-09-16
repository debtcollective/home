import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`grid grid-cols-1 gap-0 max-w-full border border-beige-500 bg-beige-100 rounded overflow-hidden`}
  width: 28rem;
`;

export const Input = styled.input`
  ${tw`py-2 px-3 rounded-md border border-beige-500 focus:outline-none focus:border-blue w-full`}

  & + & {
    ${tw`mt-4`}
  }
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
      ? tw`font-bold`
      : tw`bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded text-center uppercase w-full`}
`;

export const Form = styled.form`
  ${tw`p-4`}

  button[type="submit"] {
    ${tw`mt-4`}
  }
`;

export const Title = styled.div`
  ${tw`text-lg text-center bg-white-100 py-3 px-4 border-0 border-beige-500 border-b`}
`;
