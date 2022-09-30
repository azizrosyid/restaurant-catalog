const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => registration).catch((registrationError) => registrationError);
    });
  }
};

export default swRegister;
