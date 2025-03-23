export default function Menu() {
  return (
    <nav className="relative mb-8 rounded-lg shadow-md md:block hidden " >
      <ul className="flex justify-center items-center font-normal text-sm text-gray ">
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light rounded-l-lg " style={{flex: "1 1 0"}}>
          <a href="#hero-section" className="transition-colors duration-300" style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            ACCEUIL
          </a>
        </li>
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light" style={{flex: "1 1 0"}}>
          <a
            href="#presentation-section"
            className="transition-colors duration-300"
            style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}
          >
            PRESENTATION
          </a>
        </li>
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light" style={{flex: "1 1 0"}}>
          <a href="#product-section" className="transition-colors duration-300" style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            PRODUCT
          </a>
        </li>
        <li className="py-4 px-6 bg-secondary hover:bg-secondary_light rounded-r-lg" style={{flex: "1 1 0"}}>
          <a
            href="#technical-section"
            className="transition-colors duration-300"
            style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}
          >
            TECHNICAL
          </a>
        </li>
      </ul>
    </nav>
  );
}
