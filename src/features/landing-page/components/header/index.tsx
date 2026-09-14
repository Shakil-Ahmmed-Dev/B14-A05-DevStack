export default function Header() {
  return (
    <header>
      <Logo />
      <NavLinks />
      <CTA />
    </header>
  );
}

function Logo() {
  return <div>Logo</div>;
}

function NavLinks() {
  return <div>NavLinks</div>;
}

function CTA() {
  return <div>CTA</div>;
}
