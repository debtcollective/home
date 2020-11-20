import { unblockScroll, blockScroll } from '@utils/scroll';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useAnnouncement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeAnnouncement = () => {
    unblockScroll();
    setIsOpen(false);
    Cookies.set('announcementRead', 'true', { expires: 7 });
  };

  const openAnnouncement = () => {
    blockScroll();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!Cookies.get('announcementRead')) openAnnouncement();
  }, []);

  return {
    isOpen,
    closeAnnouncement,
    openAnnouncement
  };
};

export default useAnnouncement;
