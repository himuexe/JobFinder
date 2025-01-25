import { IconAsset } from "@tabler/icons-react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

interface FooterLinkProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  children,
  href,
  icon: Icon,
}) => (
  <a
    href={href}
    className="flex items-center gap-2 text-mine-shaft-300 hover:text-clairt-400 
    transition-all duration-300 group font-primary"
  >
    {Icon && (
      <Icon className="w-4 h-4 text-clairt-400 group-hover:text-clairt-400 transition-colors" />
    )}
    {children}
  </a>
);

interface SocialIconProps {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative"
    aria-label={label}
  >
    <Icon
      className="w-6 h-6 text-mine-shaft-300 hover:text-clairt-400 
      transition-all duration-300"
    />
  </a>
);

const Footer: React.FC = () => {
  // Define the social icons data
  const socialIcons: SocialIconProps[] = [
    {
      Icon: Facebook,
      href: "https://facebook.com/utsavia",
      label: "Facebook",
    },
    {
      Icon: Instagram,
      href: "https://instagram.com/utsavia",
      label: "Instagram",
    },
    {
      Icon: Twitter,
      href: "https://twitter.com/utsavia",
      label: "Twitter",
    },
    {
      Icon: Linkedin,
      href: "https://linkedin.com/company/utsavia",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      className="bg-mine-shaft-950 mt-20 text-mine-shaft-100 py-16 px-6 overflow-hidden relative"
      aria-label="Utsavia Footer"
    >
      <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-8 relative z-10">
        {/* Company Logo and Tagline */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex gap-1 items-center text-clairt-400">
            <IconAsset className="h-8 w-8" stroke={1.5} />
            <div className="text-3xl font-semibold">JobFinder</div>
          </div>
          <div className="text-sm text-mine-shaft-300">
            Job portal with user friendly interface
          </div>
        </div>

        {/* Explore Links */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-mine-shaft-100 font-secondary">
            Explore
          </h3>
          <nav className="space-y-3">
            <FooterLink href="/events">Upcoming Job postings</FooterLink>
            <FooterLink href="/categories">Job Categories</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4 text-mine-shaft-100 font-secondary">
            Connect
          </h3>
          <div className="space-y-3">
            <FooterLink href="mailto:sharmaslov@gmail.com" icon={Mail}>
              sharmaslov@gmail.com
            </FooterLink>
            <FooterLink href="tel:+919828477222" icon={Phone}>
              +91 9828477222
            </FooterLink>
          </div>
        </div>

        {/* Social Media */}
        <div className="md:col-span-1 flex flex-col space-y-4">
          <h3 className="text-xl font-semibold mb-4 text-mine-shaft-100 font-secondary">
            Follow Us
          </h3>
          <div className="flex space-x-6">
            {socialIcons.map(({ Icon, href, label }, index) => (
              <SocialIcon key={index} Icon={Icon} href={href} label={label} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="mt-12 pt-6 border-t border-mine-shaft-700 
          text-center text-mine-shaft-300 text-sm relative z-10"
      >
        <p className="flex items-center justify-center gap-2 font-secondary">
          © {new Date().getFullYear()} Job Finder Pvt. Ltd.
        </p>
        <div className="mt-2 space-x-4 font-secondary">
          <a
            href="/privacy"
            className="hover:text-clairt-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-clairt-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;