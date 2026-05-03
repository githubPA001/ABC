type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  return (
    <form
      action={`https://formsubmit.co/${email}`}
      method="POST"
      className="grid gap-4"
    >
      <input type="hidden" name="_subject" value="New portfolio inquiry" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} />

      <div className="grid gap-2">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="form-input"
          placeholder="Your name"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="you@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="form-input resize-none"
          minLength={10}
          placeholder="Tell me about your project or opportunity..."
          required
        />
      </div>

      <button type="submit" className="button-primary">
        Send Message
      </button>
    </form>
  );
}
