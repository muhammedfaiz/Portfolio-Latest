const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/muhammedfaiz"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammed-faiz-630742215/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>
      <p className="text-white-500">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </section>
  );
};
export default Footer;
