import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-6 text-sm text-neutral-400 c-space text-center">
      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-2" />

      {/* Centered Logo */}
      <div className="flex justify-center items-center mb-2">
        <img
          src="/assets/logos/KLogo.svg"
          className="w-10 h-10 object-contain"
          alt="Kamaljeet Logo"
        />
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        <span>|</span>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.icon}
              className="w-5 h-5 hover:scale-110 transition-transform"
              alt={social.name}
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© 2025 Kamal. All rights reserved.</p>
    </section>
  );
};

export default Footer;
