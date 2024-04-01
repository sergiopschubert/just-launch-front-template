'use client';

const IframeAnalytics = () => {
  return (
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_ANALYTICS}`}
      height='0'
      width='0'
    />
  );
};

export default IframeAnalytics;
