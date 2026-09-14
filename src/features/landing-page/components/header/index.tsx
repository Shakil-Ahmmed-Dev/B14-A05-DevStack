import { NAV_LINKS } from "@/constants";

export default function Header() {
  return (
    <header className="pt-6 max-w-7xl mx-auto flex justify-between items-center">
      <Logo />
      <NavLinks />
      <CTA />
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-8 rounded-lg bg-linear-45 from-[#EC4899] to-[#7C3AED] text-white font-bold flex items-center justify-center">
        DS
      </div>
      <span className="font-bold">
        Dev <span className="text-[#DB2777]">Stack</span>
      </span>
    </div>
  );
}

function NavLinks() {
  return (
    <nav>
      <ul className="flex gap-4 text-sm">
        {NAV_LINKS.header.map((link, index) => (
          <li key={link}>
            <a
              href="javascript:void(0)"
              className={`${index == 0 ? "text-[#DB2777] font-semibold" : "text-[#475569] fotn-medium"}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function CTA() {
  return <div>
    <button className="px-4 py-2 rounded-full text-sm">Sign In</button>
    <button className="bg-[#D91B7E] px-4 py-2 text-white rounded-full text-sm">Sign Up</button>
  </div>;
}
