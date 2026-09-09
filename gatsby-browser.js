/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onClientEntry = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then(registrations => registrations.forEach(registration => registration.unregister()));
  }
};

export const onRouteUpdate = ({ location }) => {
  const measurementId = process.env.GATSBY_GOOGLE_ANALYTICS_ID || 'G-BD4GT53KZM';

  if (process.env.NODE_ENV !== 'production' || !measurementId || !window.gtag) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: location.href,
    page_path: `${location.pathname}${location.search}${location.hash}`,
    send_to: measurementId,
  });
};
