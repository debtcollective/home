import Link from '@components/Link';
import React from 'react';
import Modal from 'react-modal';
import SimpleBlockContent from '@components/SimpleBlockContent';

interface Props {
  ctaText: string;
  ctaLink: string;
  imageAlt?: string;
  imageSrc?: string;
  imageSrcSet?: string;
  isOpen: boolean;
  onClose: () => void;
  subtitle?: string;
  text: any;
  title: string;
}

Modal.setAppElement('#___gatsby');

const AnnouncementModal: React.FC<Props> = ({
  title,
  subtitle,
  text,
  imageSrc,
  imageSrcSet,
  imageAlt,
  ctaText,
  ctaLink,
  isOpen,
  onClose
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="relative h-screen p-4 pt-16 mb-2 overflow-y-auto bg-white rounded-lg md:overflow-hidden md:mb-0 md:h-auto md:p-8 xxl:w-8/12 bg-red"
    overlayClassName="fixed top-0 bottom-0 left-0 right-0 flex flex-col min-h-screen p-2 pb-0 bg-opacity-75 md:p-12 lg:flex-row lg:items-center md:justify-center top-o z-modal-screen bg-black-100 lg:px-24"
    contentLabel="Popup Modal"
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
          srcSet={imageSrcSet}
          src={imageSrc}
          aria-hidden={imageAlt ? 'false' : 'true'}
          alt={imageAlt || ''}
        />
      </figure>
      <div className="flex flex-col justify-center w-full lg:w-2/3 lg:mt-8 lg:ml-12">
        <h2 className="mb-4 text-3xl font-bold leading-none text-center lg:mt-4 lg:text-5xl text-gray md:text-4xl md:mt-0">
          {title}
        </h2>
        {subtitle && (
          <h3 className="max-w-full mx-auto mb-6 text-lg font-semibold text-center lg:mb-8 lg:text-xl text-gray w-5xl">
            {subtitle}
          </h3>
        )}
        <SimpleBlockContent
          className="mb-6 text-base whitespace-pre-wrap lg:text-lg lg:mb-12 text-gray"
          blocks={text}
        />
        <Link
          variant="button"
          href={ctaLink}
          className="block w-full mx-auto lg:w-1/2"
          onClick={onClose}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  </Modal>
);

export default AnnouncementModal;
