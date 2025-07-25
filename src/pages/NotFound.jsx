import react from "react";

function NotFound() {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center">
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 w-full">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/home"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Go back home
              </a>
            </div>
          </div>
        </main>
        <div className="flex justify-center items-center opacity-90 blur-sm">
          <img
            src="src/assets/images/signupimg.jpg"
            alt=""
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default NotFound;
