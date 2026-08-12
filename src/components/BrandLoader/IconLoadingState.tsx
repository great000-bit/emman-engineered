import "./IconLoadingState.css";

const IconLoadingState = () => (
  <div
    className="icon-loading-state"
    role="status"
    aria-live="polite"
    aria-label="Loading"
  >
    <svg
      className="icon-loading-state__mark"
      viewBox="0 0 27.21 27.21"
      aria-hidden="true"
    >
      <path
        className="icon-loading-state__crescent"
        fill="#00A3F5"
        d="M13.63 6.45c.97 0 1.89.2 2.73.57h-.24c-7.42 0-7.42 12.98 0 12.98h.63c-.94.49-2 .76-3.12.76-3.84 0-6.94-3.21-6.94-7.16s3.11-7.16 6.94-7.16z"
      />
      <path
        className="icon-loading-state__top-piece"
        fill="#FFFFFF"
        d="M18.98 9.04c.78.97 1.32 2.16 1.51 3.47h-3.8c-.43-.01-.8-.17-1.1-.47-.3-.3-.45-.67-.45-1.1v-.33c0-.43.15-.8.45-1.1.3-.3.67-.45 1.1-.45h2.29z"
      />
      <path
        className="icon-loading-state__bottom-piece"
        fill="#FFFFFF"
        d="M20.52 14.51c-.16 1.3-.65 2.48-1.39 3.47H16.7c-.42 0-.79-.15-1.09-.45-.31-.3-.46-.67-.46-1.1v-.33c0-.43.15-.8.45-1.1.3-.3.67-.46 1.1-.47h3.83z"
      />
    </svg>
    <span className="sr-only">Loading</span>
  </div>
);

export default IconLoadingState;
