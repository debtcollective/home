import React from 'react';

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"

interface Props {
  url: string;
  title: string;
  description: string;
  shareCTA?: string | undefined;
}

const ShareButtons: React.FC<Props> = (props) => {
  const cta:string = (props.shareCTA) ? props.shareCTA : "Share this ";
  return(
    <div className="post-meta-share-icons flex items-center justify-around mx-auto min-w-md max-w-lg my-6 pt-6 mt-12 border-t-2 border-green-500">
      <h3 className="font-black leading-5 py-6 mb-0">{cta}</h3>
      <div className="max-w-1/3 flex justify-between space-x-4 ml-4 rounded-md px-6 py-4 bg-green-400">
        <EmailShareButton {... props}>
          <span className="sr-only"> in an email to a friend!</span>
          <FontAwesomeIcon className="text-white text-4xl h-8 hover:text-black" icon={faEnvelope} />
        </EmailShareButton>
          <FacebookShareButton {... props}>
          <span className="sr-only">Share this page on Facebook!</span>
          <FontAwesomeIcon className="text-white text-4xl h-8 hover:text-black" icon={faFacebook} />
        </FacebookShareButton>
        <TwitterShareButton {... props}>
          <span className="sr-only">Share this page on twitter!</span>
          <FontAwesomeIcon className="text-white text-4xl h-8 hover:text-black" icon={faTwitter} />
        </TwitterShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
