const React = require('react');

const measurementId = process.env.GATSBY_GOOGLE_ANALYTICS_ID || 'G-BD4GT53KZM';
const isValidMeasurementId = /^G-[A-Z0-9]+$/.test(measurementId || '');

exports.onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production' || !isValidMeasurementId) {
    return;
  }

  setHeadComponents([
    React.createElement('script', {
      key: 'google-analytics-script',
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
    }),
    React.createElement('script', {
      key: 'google-analytics-config',
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `,
      },
    }),
  ]);
};
