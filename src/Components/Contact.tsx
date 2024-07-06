function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-evenly gap-5 items-center border-red-500 border-2 p-5"
    >
      <em>Future Web Dev</em>
      <h1 className="text-3xl">
        hello world, my name is <em className="text-blue-600">Marcos</em>
      </h1>
      <p>Email: mark4elias@gmail.com</p>
      <a
        href="https://github.com/mark-elias"
        target="_blank"
        className="text-pink-500 underline"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/marcos-elias-382484226/"
        target="_blank"
        className="text-pink-500 underline"
      >
        LinkedIn
      </a>
    </section>
  );
}

export default Contact;
