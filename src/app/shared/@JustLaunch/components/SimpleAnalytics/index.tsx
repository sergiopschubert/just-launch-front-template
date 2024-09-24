import Image from 'next/image';

export function SimpleAnalytics() {
  return (
    <>
      <script
        async
        defer
        src='https://scripts.simpleanalyticscdn.com/latest.js'
      ></script>
      <noscript>
        <Image
          src='https://queue.simpleanalyticscdn.com/noscript.gif'
          alt=''
          referrerPolicy='no-referrer-when-downgrade'
        />
      </noscript>
    </>
  );
}
