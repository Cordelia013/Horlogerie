export default function Menu() {
  return (
    <nav className="relative bg-secondary mb-8 rounded-lg shadow-md">
      <ul className="py-4 px-6 flex justify-center items-center font-normal text-sm gap-6">
        <li>
          <a
            href="#hero-section"
            className="transition-colors duration-300 hover:text-gray"
          >
            HERO SECTION
          </a>
        </li>
        <li>
          <a
            href="#presentation-section"
            className="transition-colors duration-300 hover:text-gray"
          >
            PRESENTATION SECTION
          </a>
        </li>
        <li>
          <a
            href="#product-section"
            className="transition-colors duration-300 hover:text-gray"
          >
            PRODUCT SECTION
          </a>
        </li>
        <li>
          <a
            href="#technical-section"
            className="transition-colors duration-300 hover:text-gray"
          >
            TECHNICAL SECTION
          </a>
        </li>
      </ul>
    </nav>
  );
}
