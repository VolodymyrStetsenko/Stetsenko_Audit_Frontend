import { EnvelopeIcon } from '@heroicons/react/24/outline';

const SupportPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="bg-card rounded-xl shadow-soft p-8 w-full max-w-lg flex flex-col items-center">
        <EnvelopeIcon className="h-10 w-10 text-primary mb-4" />
        <h2 className="text-2xl font-bold mb-2">Contact Support</h2>
        <p className="text-muted mb-6 text-center">If you have any questions, suggestions, or need help, feel free to contact us. We respond as quickly as possible!</p>
        <form className="w-full flex flex-col gap-4" action="mailto:carstetsen@gmail.com" method="POST" encType="text/plain">
          <input className="input" type="email" name="email" placeholder="Your email" required />
          <textarea className="input" name="message" placeholder="Your message" rows={4} required />
          <button type="submit" className="btn-primary w-full">Send Email</button>
        </form>
        <div className="mt-4 text-xs text-muted text-center">
          Or write directly: <a href="mailto:carstetsen@gmail.com" className="underline hover:text-primary">carstetsen@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default SupportPage; 