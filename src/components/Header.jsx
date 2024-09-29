const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?t=st=1727142056~exp=1727145656~hmac=7cf1554d4721dd84b84b26a684232ac202c7376b2267ed907f0f91f770f6bc2b&w=826"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
