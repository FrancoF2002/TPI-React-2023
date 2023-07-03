const NotFound = () => {
  return (
    <div className="grid w-full h-screen place-items-center bg-darkBlueBG px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-customRed">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/home"
            className="rounded-md bg-customRed px-3.5 py-2.5 text-sm font-semibold text-white  "
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
