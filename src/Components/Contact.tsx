function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-evenly gap-5 items-center p-5"
    >
      <em>Future Web Dev</em>
      <h1 className="text-2xl font-extrabold lg:text-3xl">
        hello world, my name is <em className="text-blue-600">Marcos</em>
      </h1>
      <p>Email: mark4elias@gmail.com</p>
      <div className="flex flex-row justify-between gap-5">
        <a href="https://github.com/mark-elias" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marcos-elias-382484226/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
