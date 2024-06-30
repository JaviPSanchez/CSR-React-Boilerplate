import { Head } from '@/components/seo';

export const LandingRoute = () => {
  return (
    <>
      <Head description="Welcome to bulletproof react" />
      <div className="flex h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">React Boilerplate</span>
          </h2>
        </div>
      </div>
    </>
  );
};
