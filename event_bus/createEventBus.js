const noop = () => undefined;

export const createEventBus = () => {
  if (typeof document === 'undefined') {
    return {
      addEventListener: noop,
      removeEventListener: noop,
      dispatchEvent: noop,
    };
  }

  const bus = document.createElement('bus');
  return {
    addEventListener: (event, callback) => {
      bus.addEventListener(event, callback);
    },
    removeEventListener: (event, callback) => {
      bus.removeEventListener(event, callback);
    },
    dispatchEvent: (event, detail = {}) => {
      bus.dispatchEvent(new CustomEvent(event, { detail }));
    },
  };
};
