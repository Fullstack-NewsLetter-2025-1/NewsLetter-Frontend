import Logo from "../logo/logo";

export default function Footer() {
  return (
    <footer className="bg-white shadow-top shadow-2xl flex justify-between items-center z-50 fixed bottom-0">
      <div>
        <Logo></Logo>
      </div>
    </footer>
  );
}
