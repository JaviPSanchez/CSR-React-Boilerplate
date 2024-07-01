interface HeadingProps {
  children: string;
  type: 'h1' | 'h2' | 'h3';
}

export const Heading: React.FC<HeadingProps> = ({ type, children }) => {
  const base = 'leading-14';

  const styles = {
    h1: base + ' text-2xl font-bold',
    h2: base + ' text-xl font-bold',
    h3: base + ' text-xl font-semibold',
  };

  return <h1 className={styles[type]}>{children}</h1>;
};

export default Heading;
