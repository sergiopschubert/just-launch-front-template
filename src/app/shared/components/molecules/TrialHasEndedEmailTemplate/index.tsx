import React from 'react';

interface ReviewEmailProps {
  firstName: string;
}

export const TrialHasEndedEmailTemplate: React.FC<
  Readonly<ReviewEmailProps>
> = ({ firstName }: ReviewEmailProps) => {
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
          Free Trial
          <br />
          <span style={stylesSheet.titleSpan}>Has Ended</span>
        </h2>
      </header>

      <div style={stylesSheet.content}>
        <p>
          <strong>Hi, {firstName}</strong>
        </p>
        <p>
          We hope you enjoyed your first week with HomeworkAI! If our tool has
          helped to alleviate stress and optimize your time, we imagine you
          wouldn't want to stop here.
          <br />
          <br />
          Stress doesn't have to be a constant in your routine. HomeworkAI is
          here to transform each lesson into a journey full of discoveries and
          success, for both you and your students.
          <br />
          <br />
          Choose to continue on this innovative path. Opt for a plan that keeps
          inspiration and efficiency in your classes.
        </p>
        <div style={{ textAlign: 'center' }}>
          <a
            href={'https://homeworkai.com.br/en#pricing'}
            style={stylesSheet.button}
          >
            Subscribe now!
          </a>
        </div>
        <p>
          Ready to continue transforming education? Choose your plan and keep
          making a difference.
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

export default TrialHasEndedEmailTemplate;
