import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`grid grid-cols-1 gap-0 max-w-full border border-beige-500 bg-beige-100 rounded overflow-hidden`}
  width: 28rem;
`;

export const Form = styled.form`
  ${tw`p-4`}
`;

export const Button = styled.button`
  ${tw`bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded text-center uppercase w-full`}
`;

export const Title = styled.button`
  ${tw`text-lg bg-white-100 py-3 px-4 border-0 border-beige-500 border-b`}
`;
