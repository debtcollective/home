import { Colors } from '@constants/colors';
import { IBadge } from '@components/BadgeSlider';
import { ISanityBadge } from 'src/types/sanity';

export const convertISanityBadgeToIBadge = (badge: ISanityBadge): IBadge => {
  return {
    alt: badge?.caption,
    backgroundColor: Colors[badge.color],
    href: badge?.href,
    src: badge?.icon?.asset?.url,
    text: badge?.body,
    title: badge?.title
  };
};
