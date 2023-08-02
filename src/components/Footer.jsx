import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="co col-lg-6">
            <h2 className="footerHeader">Contact </h2>
            <p className="footerDescription">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="col col-lg-6">One of two columns</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
