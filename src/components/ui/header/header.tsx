interface HeaderProps {
  children: string;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="border-b border-colorGrey100 bg-colorGrey0 p-6 px-20">
      {children}
    </header>
  );
};
