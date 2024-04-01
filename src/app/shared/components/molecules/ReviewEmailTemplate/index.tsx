import React from 'react';

interface ReviewEmailProps {
  firstName: string;
}

export const ReviewEmailTemplate: React.FC<Readonly<ReviewEmailProps>> = ({
  firstName,
}: ReviewEmailProps) => {
  return (
    <div style={stylesSheet.container}>
      <header
        style={{
          backgroundColor: '#7F56D9',
          padding: '20px',
          textAlign: 'center',
          color: 'white',
          borderRadius: '8px 8px 0 0',
          fontWeight: 700,
          fontSize: '35px',
          lineHeight: '125%',
        }}
      >
        <h2 style={stylesSheet.title}>
          Trial
          <br />
          <span style={stylesSheet.titleSpan}>Has ended</span>
        </h2>
      </header>

      <div style={stylesSheet.content}>
        <p>
          <strong>Hi, {firstName}</strong>
        </p>
        <p>
          At HomeworkAI, we are constantly seeking ways to improve and provide
          you with the best possible experience. Your feedback is crucial in
          helping us achieve this goal. We invite you to take part in a short
          survey that will take just a few minutes of your time. Your evaluation
          and suggestions are very important to us and can make a significant
          difference.
        </p>
        <div style={{ textAlign: 'center' }}>
          <a href={'https://tally.so/r/mKlXYk'} style={stylesSheet.button}>
            Rate Now!
          </a>
        </div>
        <p>
          We sincerely appreciate your time and valuable contribution in
          advance.
        </p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img
          src='https://tllaeaskzbwwlivrilza.supabase.co/storage/v1/object/public/public-storage/favicon.png'
          alt='logo da HomeworkAI'
          style={stylesSheet.logo}
        />
        <p style={{ marginTop: '16px', fontSize: '12px' }}>©2024 HomeworkAI</p>
      </div>

      <div
        style={{
          backgroundColor: '#F9FAFB',
          padding: '20px',
          textAlign: 'left',
          fontSize: '12px',
          borderRadius: '0 0 8px 8px',
        }}
      >
        <p style={{ fontSize: '12px' }}>
          If you no longer wish to receive these emails, please contact{' '}
          <a href='mailto:suporte@homeworkai.com.br' style={stylesSheet.link}>
            by sending an email to Support.
          </a>
        </p>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>
          To log in, visit{' '}
          <a href='https://homeworkai.com.br/signin' style={stylesSheet.link}>
            https://www.homeworkai.com.br/signin
          </a>
        </p>
        <p style={{ marginTop: '8px', fontSize: '12px' }}>
          <a href='https://homeworkai.com.br/privacy' style={stylesSheet.link}>
            Privacy Policy
          </a>{' '}
          •
          <a
            href='https://homeworkai.com.br/terms&conditions'
            style={stylesSheet.link}
          >
            Terms of Use
          </a>
        </p>
      </div>
    </div>
  );
};

const stylesSheet = {
  container: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#fff',
    color: '#101828',
    maxWidth: '600px',
    margin: '50px auto',
    borderRadius: '8px',
    padding: '20px',
    overflow: 'hidden',
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '35px',
    fontWeight: 'bold',
    color: '#F4EBFF',
  },
  titleSpan: {
    color: '#E9D7FE',
  },
  content: {
    padding: '20px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#7F56D9',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease-in-out',
  },
  link: {
    color: '#7C3AED',
    textDecoration: 'none',
  },
  logo: {
    width: '51px',
    margin: '0 auto',
  },
};

export default ReviewEmailTemplate;
