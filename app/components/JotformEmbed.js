'use client';

import { useEffect, useRef } from 'react';

/* Embeds a JotForm via its official jsform script. The modern jsform script
   locates its own <script> tag and inserts the form iframe immediately after it
   (it does NOT use document.write), so appending it into this container works on
   both a direct page load and client-side (SPA) navigation. The embedded iframe
   self-resizes via postMessage, which the same script wires up. */
export default function JotformEmbed({ formId, title = 'Form' }) {
  const ref = useRef(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    // Clear any prior render (handles React strict-mode double-invoke and
    // navigating back to this page) so we never stack duplicate iframes.
    host.innerHTML = '';
    const script = document.createElement('script');
    script.src = `https://form.jotform.com/jsform/${formId}`;
    script.async = true;
    host.appendChild(script);
    return () => {
      host.innerHTML = '';
    };
  }, [formId]);

  return <div className="jotform-embed" ref={ref} role="group" aria-label={title} />;
}
