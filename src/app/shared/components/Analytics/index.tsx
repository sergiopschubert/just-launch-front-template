export default function Analytics() {
  return (
    <>
      <script
        async
        defer
        src='https://scripts.simpleanalyticscdn.com/latest.js'
      ></script>
      <noscript>
        <img
          src='https://queue.simpleanalyticscdn.com/noscript.gif'
          alt=''
          referrerPolicy='no-referrer-when-downgrade'
        />
      </noscript>
    </>
  );
}
