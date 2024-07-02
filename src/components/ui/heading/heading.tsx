interface HeadingProps {
  title: string;
  type: 'h1' | 'h2' | 'h3';
}

export const Heading: React.FC<HeadingProps> = ({ type, title }) => {
  const base = 'leading-14';

  const styles = {
    h1: base + ' text-2xl font-bold',
    h2: base + ' text-xl font-bold',
    h3: base + ' text-xl font-semibold',
  };

  return <h1 className={styles[type]}>{title}</h1>;
};

export default Heading;
