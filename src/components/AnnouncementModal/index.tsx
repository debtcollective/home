import Link from '@components/Link';
import React from 'react';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement('#___gatsby');

const IMAGE_URL =
  'https://cdn-ed.haymarketbooks.org/images/000003/314/9781642592627-f_large-5303cd187474d2d4f21b3ffc6959c441.jpg20200919-21-117sob3';
const IMAGE_DESCRIPTION = '';
const TITLE = "Can't Pay, Won't Pay";
const SUBTITLE = 'The Case for Economic Disobedience and Debt Abolition';
const DESCRIPTION =
  "Debtors have been mocked, scolded and lied to for decades. We have been told that it is perfectly normal to go into debt to get medical care, to go to school, or even to pay for our own incarceration. We 've been told there is no way to change an economy that pushes the majority of people into debt while a small minority hoard wealth and power.";
const ACTION_LABEL = 'Get our ebook';
const ACTION_LINK =
  'https://www.haymarketbooks.org/books/1520-can-t-pay-won-t-pay';

const AnnouncementModal: React.FC<Props> = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="relative h-screen p-4 pt-16 mb-2 overflow-y-auto bg-white rounded-lg md:overflow-hidden md:mb-0 md:h-auto md:p-8 xxl:w-8/12 bg-red"
    overlayClassName="fixed top-0 bottom-0 left-0 right-0 flex flex-col min-h-screen p-2 pb-0 bg-opacity-75 md:p-12 lg:flex-row lg:items-center md:justify-center top-o z-modal-screen bg-black-100 lg:px-24"
    contentLabel="Example Modal"
  >
    <button
      className="absolute top-0 right-0 mt-4 mr-4 text-gray-300 md:mt-6 md:mr-6 material-icons"
      style={{ fontSize: '2rem' }}
      onClick={onClose}
    >
      close
    </button>
    <div className="flex justify-center">
      <figure className="items-center hidden w-1/3 mx-auto lg:flex">
        <img
          src={IMAGE_URL}
          aria-hidden={IMAGE_DESCRIPTION ? 'false' : 'true'}
          alt={IMAGE_DESCRIPTION || ''}
        />
      </figure>
      <div className="flex flex-col justify-center w-full lg:w-2/3 lg:mt-8 lg:ml-12">
        <h2 className="mb-4 text-3xl font-bold leading-none text-center lg:mt-4 lg:text-5xl text-gray md:text-4xl md:mt-0">
          {TITLE}
        </h2>
        {SUBTITLE && (
          <h3 className="max-w-full mx-auto mb-6 text-lg font-semibold text-center lg:mb-8 lg:text-xl text-gray w-5xl">
            {SUBTITLE}
          </h3>
        )}
        <p className="mb-12 text-base whitespace-pre-wrap lg:text-lg lg:mb-20 text-gray">
          {DESCRIPTION}
        </p>
        <Link
          variant="button"
          href={ACTION_LINK}
          className="block w-full mx-auto lg:w-1/2"
          onClick={onClose}
        >
          {ACTION_LABEL}
        </Link>
      </div>
    </div>
  </Modal>
);

export default AnnouncementModal;
