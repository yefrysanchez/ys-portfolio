import "./styles/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <main className="contact">
        <div className="contact-title">
          <h1>
            <span>Get</span> in Touch.
          </h1>
        </div>
        <div className="contact-content">
          <form className="contact-form">
            <div className="name-input">
              <input id="name" type="text" name="name" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Name</span>
              </label>
            </div>
            <div className="name-input">
              <input id="name" type="email" name="name" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Email</span>
              </label>
            </div>
            <div className="name-input">
              <input id="name" type="text" name="name" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Subject</span>
              </label>
            </div>
            <div className="name-input">
              <textarea
                name="message"
                className="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </form>
          <div className="contact-links">
            <a
              className="c-link"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>Gmail</span>
            </a>
            <a
              className="c-link"
              href="https://www.linkedin.com/in/yefrysanchez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
              <span>Linkedin</span>
            </a>
            <a
              className="c-link"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
