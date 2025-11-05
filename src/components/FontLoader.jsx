import { useEffect } from 'react';

// Injects Google Fonts (Poppins, Open Sans) into the document head
export default function FontLoader() {
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = '';

    const fonts = document.createElement('link');
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@800&display=swap';

    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(fonts);

    return () => {
      try { document.head.removeChild(link1); } catch {}
      try { document.head.removeChild(link2); } catch {}
      try { document.head.removeChild(fonts); } catch {}
    };
  }, []);

  return null;
}
