import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
        await emailjs.send('service_uuz5bmo','template_9nymk2d',{
            from_name:form.name,
            email_id:form.email,
            message:form.message,
        },'gCTZVcgiLi9R1YGp-');
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({ name: "", email: "", message: "" });
    } catch (error) {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
    }
    

  };
  return (
    <section className="c-space my-20 " id="contact">
      <div className="relative min-h-screen flex  justify-center items-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to collaborate.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="What's your name?" className="field-input" />
            </label>
            <label className="space-y-3">
                <span className="field-label">Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="What's your email?" className="field-input" />
            </label>
            <label className="space-y-3">
                <span className="field-label">Your Message</span>
                <textarea type="text" name="message" value={form.message} onChange={handleChange} rows={5} required placeholder="Write your message here..." className="field-input" />
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
