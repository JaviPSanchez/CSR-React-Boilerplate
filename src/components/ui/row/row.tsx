import { ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
  type?: 'horizontal' | 'vertical';
}

export const Row: React.FC<RowProps> = ({ children, type = 'vertical' }) => {
  if (type === 'horizontal')
    return <div className="flex items-center justify-between">{children}</div>;

  return <div className="flex flex-col gap-6">{children}</div>;
};
