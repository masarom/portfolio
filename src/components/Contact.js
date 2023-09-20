import '../styles/layout/Contact.scss';
import {useState} from 'react';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForm = (ev) => {
    let value = ev.target.value;
    if (ev.target.id === 'name') {
      return setName(value);
    } else if (ev.target.id === 'email') {
      return setEmail(value);
    } else if (ev.target.id === 'message') {
      setMessage(value);
    }
  }
  return (
    <section className='contact'>
      <div className='contact__hero'>
        <h1 className='contact__title'>Send me a message</h1>
      </div>
      <form action='https://formspree.io/f/mjvqarjl' method='POST' className='contact__form'>
        <label htmlFor='name' className='contact__form--label'>
          Name *{' '}
        </label>
        <input
          type='text'
          className='contact__form--input'
          id='name'
          placeholder='Your name'
          required
          value={name}
          onInput={handleForm}
        />
        <label htmlFor='email' className='contact__form--label'>
          {' '}
          Email *
        </label>
        <input
          type='email'
          className='contact__form--input'
          id='email'
          placeholder='your-email@mail.com'
          required
          value={email}
          onInput={handleForm}
        />
        <label htmlFor='message' className='contact__form--label'>
          Your message:
        </label>
        <textarea
          name='message'
          className='contact__form--textarea'
          id='message'
          cols='30'
          rows='13'
          placeholder='Your message here...'
          value={message}
          onInput={handleForm}
        ></textarea>
        <button type='submit' className='contact__form--submit'>
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
