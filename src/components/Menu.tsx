export default function Menu() {
  return (
    <nav className="relative mb-8 rounded-lg shadow-md">
      <ul className="flex justify-center items-center font-normal text-sm text-gray rounded-lg">
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light">
          <a
            href="#hero-section"
            className="transition-colors duration-300"
          >
      ACCEUIL
          </a>
        </li>
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light">
          <a
            href="#presentation-section"
            className="transition-colors duration-300"
          >
            PRESENTATION
          </a>
        </li>
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light">
          <a
            href="#product-section"
            className="transition-colors duration-300"
          >
            PRODUCT 
          </a>
        </li>
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light">
          <a
            href="#technical-section"
            className="transition-colors duration-300"
          >
            TECHNICAL 
          </a>
        </li>
      </ul>
    </nav>
  );
}
