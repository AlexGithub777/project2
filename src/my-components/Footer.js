//Function Component
function Footer() {
  const footerStyle = {
    minHeight: "10vh",
    fontSize: "1.2em",
    color: "white",
    backgroundColor: "#2C3E50",
    /* Centralize item both vertical and horizontal */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  //Component UI: HTML Rendering
  return (
    <>
      <footer style={footerStyle}>
        <p className="text-center">Advanced Web App Development. @2023.</p>
      </footer>
    </>
  );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Footer;
