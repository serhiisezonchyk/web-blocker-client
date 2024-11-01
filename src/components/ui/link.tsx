import NextLink from 'next/link';
type Props = {} & Parameters<typeof NextLink>[0];

const Link = (props: Props) => {
  return <NextLink {...props} />;
};

export default Link;
