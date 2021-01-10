import { unblockScroll, blockScroll } from '@utils/scroll';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useAnnouncement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cookieName = process.env.GATSBY_POPUP_COOKIE_NAME || 'announcementRead';

  const closeAnnouncement = () => {
    unblockScroll();
    setIsOpen(false);
    Cookies.set(cookieName, 'true', { expires: 7 });
  };

  const openAnnouncement = () => {
    blockScroll();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!Cookies.get(cookieName)) openAnnouncement();
  }, [cookieName]);

  return {
    isOpen,
    closeAnnouncement,
    openAnnouncement
  };
};

export default useAnnouncement;
