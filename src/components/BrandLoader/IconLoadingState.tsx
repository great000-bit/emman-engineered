import "./IconLoadingState.css";

const IconLoadingState = () => (
  <div
    className="icon-loading-state"
    role="status"
    aria-live="polite"
    aria-label="Loading"
  >
    <img
      className="icon-loading-state__mark"
      src="/creative-emman-logo.png"
      alt=""
      aria-hidden="true"
      width={72}
      height={72}
    />
    <span className="sr-only">Loading</span>
  </div>
);

export default IconLoadingState;
