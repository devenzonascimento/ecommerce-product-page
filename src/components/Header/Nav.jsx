const Nav = ({ isOpenMenu, handleOpenMenu }) => {
  
  const handleOutsideClick = ({ clientX, currentTarget }) => {
    if (document.body.offsetWidth > 1024) return;
    if (clientX > currentTarget.offsetWidth) {
      handleOpenMenu()
    }
  };

  return (
    <nav
      className="navbar"
      style={{ display: isOpenMenu }}
      onClick={handleOutsideClick}
    >
      <img
        src="src/assets/icon-close.svg"
        alt="menu icon"
        className="close-icon"
        onClick={handleOpenMenu}
      />
      <ul>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Woman</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
