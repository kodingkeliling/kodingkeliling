import { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Memuat script eksternal Tally
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Menambahkan gaya khusus untuk mode gelap
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      const style = document.createElement('style');
      style.innerHTML = `
        iframe[data-tally-src] {
          --tally-form-label-color: white !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Membersihkan skrip dan gaya ketika komponen dilepas
    return () => {
      document.body.removeChild(script);
      const styles = document.head.querySelectorAll('style');
      styles.forEach((style) => {
        if (style.innerHTML.includes('--tally-form-label-color')) {
          document.head.removeChild(style);
        }
      });
    };
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
      </div>
    </div>
  );
};

export default ContactForm;
