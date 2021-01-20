import Link from '@components/Link';
import React from 'react';
import Modal from 'react-modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement('#___gatsby');

const IMAGE_URL = '/popup-img.jpg';
const IMAGE_DESCRIPTION = 'Philly Action 27';
const TITLE = 'We’re on strike!';
const SUBTITLE = '';
const DESCRIPTION = `
Introducing the <a class="text-blue-100" href="https://biden100.debtcollective.org">Biden Jubilee 100</a>: 100 student debt strikers, one for each of the first 100 days of Biden’s presidency.

Sign our petition demanding Joe Biden cancel ALL student debt within his first 100 days! Cancelling student debt will boost the economy, close the racial wealth gap and deliver COVID relief for 45 million Americans.
`;
const ACTION_LABEL = 'Sign the petition';
const ACTION_LINK = 'https://actionnetwork.org/petitions/bidenjubilee100';

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
        <p
          className="mb-12 text-base whitespace-pre-wrap lg:tAext-lg lg:mb-20 text-gray"
          dangerouslySetInnerHTML={{ __html: DESCRIPTION }}
        ></p>
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