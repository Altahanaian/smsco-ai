'use client';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
    onloadCallback: () => void;
  }
}

export default function RecaptchaExplicitPage() {
  const captchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onloadCallback = () => {
      if (captchaRef.current) {
        window.grecaptcha.render(captchaRef.current, {
          sitekey: '6LeqvWorAAAAAMrj31kU2ZUR_5VXhEJFML6ihNkc',
        });
      }
    };

    const script = document.createElement('script');
    script.src =
      'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1 style={{ color: '#4a148c' }}>reCAPTCHA Explicit Render</h1>
      <form action="?" method="POST">
        <div id="recaptcha-container" ref={captchaRef}></div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
