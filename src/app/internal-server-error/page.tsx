// app/500/page.tsx
export default function Error500() {
    return (
      <div className="grid h-screen place-items-center">
        <div className="text-center px-4 md:px-0">
          <h1 className="text-4xl font-bold mb-4">500 - Oops! Something went wrong</h1>
          <p className="text-lg mb-6">
            We're sorry, but an unexpected error occurred.
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }