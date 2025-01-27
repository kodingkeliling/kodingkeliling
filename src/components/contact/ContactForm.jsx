// pages/index.tsx
import Script from 'next/script';
import { useEffect } from 'react';

/* global Tally */

const ContactForm = () => {
  useEffect(() => {
    // This ensures Tally is loaded after the script is executed
    const loadTally = () => {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      }
    };

    // Inject custom styles for Tally iframe when dark mode is enabled
    const applyCustomStyles = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      if (isDarkMode) {
        // Apply white label color for dark mode
        const style = document.createElement('style');
        style.innerHTML = `
          iframe[data-tally-src] {
            --tally-form-label-color: white !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Run the functions when component mounts
    loadTally();
    applyCustomStyles();
  }, []);

  return (
    <div className="w-full lg:w-1/2">
      <div className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light rounded-xl shadow-xl text-left">
        <p className="font-general-medium text-primary-dark text-2xl mb-8">
          Kontak Formulir
        </p>
        <iframe
          data-tally-src="https://tally.so/embed/npJo4V?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="542"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Kontak Kami"
        ></iframe>
        {/* Load the Tally script */}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
};

export default ContactForm;
