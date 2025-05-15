const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-neutral-900 px-4">
      <div className="max-w-md text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
          Thank you!
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Your message has been sent. I’ll be in touch as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Thankyou;
