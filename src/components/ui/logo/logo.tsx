import logo from '@/assets/logo.png';
import { Link } from '@/components/ui/link';

export const Logo = () => {
  return (
    <Link className="flex items-center text-white" to="/">
      <img className="h-8 w-auto" src={logo} alt="Workflow" />
      <span className="text-sm font-semibold text-white">
        React Boilerplate
      </span>
    </Link>
  );
};
