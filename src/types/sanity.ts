export interface ISanityHero {
  body: string;
  _rawTitle: unknown[];
}

export interface ISanityBadge {
  body: string;
  caption: string;
  color:
    | 'blue'
    | 'gray'
    | 'green'
    | 'pink'
    | 'primary'
    | 'purple'
    | 'white'
    | 'yellow';
  href: string;
  icon: {
    asset: {
      url: string;
    };
  };
  title: string;
}
