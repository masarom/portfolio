import '../styles/layout/Contact.scss';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, handleSubmit] = useForm('mjvqarjl');

  if (state.succeeded) {
    return <p className='contact__succeed'>Your message has been sent. Thank you!</p>;
  }
  const handleForm = (ev) => {
    let value = ev.target.value;
    if (ev.target.id === 'name') {
      return setName(value);
    } else if (ev.target.id === 'email') {
      return setEmail(value);
    } else if (ev.target.id === 'message') {
      setMessage(value);
    }
  };

  return (
    <section className='contact'>
      <div className='contact__hero'>
        <h1 className='contact__title'>Send me a message</h1>
      </div>
      <form action='https://formspree.io/f/mjvqarjl' method='POST' className='contact__form' onSubmit={handleSubmit}>
        <label htmlFor='name' className='contact__form--label'>
          Name *{' '}
        </label>
        <input
          type='text'
          className='contact__form--input'
          id='name'
          name='name'
          placeholder='Your name'
          required
          value={name}
          onInput={handleForm}
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />
        <label htmlFor='email' className='contact__form--label'>
          {' '}
          Email *
        </label>
        <input
          type='email'
          className='contact__form--input'
          id='email'
          name='email'
          placeholder='your-email@mail.com'
          required
          value={email}
          onInput={handleForm}
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <label htmlFor='message' className='contact__form--label'>
          Your message:
        </label>
        <textarea
          id='message'
          name='message'
          className='contact__form--textarea'
          cols='30'
          rows='9'
          placeholder='Your message here...'
          value={message}
          onInput={handleForm}
        ></textarea>
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        <button type='submit' className='contact__form--submit' disabled={state.submitting}>
          {' '}
          Submit
        </button>
      </form>
      <div className='contact__other'>
        <p>
          Or get in touch with me through{' '}
          <a
            href='https://www.linkedin.com/in/maria-sanchez-roman/'
            className='contact__other--link'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a href='mailto:romansanmaria@gmail.com' className='contact__other--link' target='_blank' rel='noreferrer'>
            email
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
