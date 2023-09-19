import '../styles/layout/Contact.scss';

const Contact = () => {
  return (
<section className='contact'>
  <h1 className='contact__title'>Send me a message</h1>
  <form action="" className='contact__form'>
      <label htmlFor="name" className='contact__form--label'>Name * </label><input type="text" className='contact__form--input' id='name' placeholder="Your name..." required/>
      <label htmlFor="email" className='contact__form--label'> Email *</label><input type="email" className='contact__form--input' id="email" placeholder='your-email@mail.com'required/>
      <label htmlFor="message" className='contact__form--label'>Your message:</label><textarea name="message" className='contact__form--textarea' id="message" cols="30" rows="10" placeholder='Your message here...'></textarea>
  </form>
  <div className="contact__other">
    <p>Or get in touch with me through <a href="https://www.linkedin.com/in/maria-sanchez-roman/" className='contact__other--link' target='_blank' rel='noreferrer'>LinkedIn</a></p>
  </div>
</section>
  );
}

export default Contact;