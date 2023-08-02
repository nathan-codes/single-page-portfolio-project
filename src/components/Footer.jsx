import "./Footer.css";
import TextField from "@mui/material/TextField";
import Button from "./Button";
import Navbar from "./Navbar";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container text-center">
        <div className="row align-items-center  justify-content-center  ">
          <div className="col-12 col-lg-6 contactIntro">
            <h2 className="footerHeader">Contact </h2>
            <p className="footerDescription">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <form action="" className="formGroup">
              <TextField
                id="Name"
                label="Name"
                variant="standard"
                sx={{
                  width: "100%",
                  color: "white",
                  borderBottom: "1px solid white",
                  "& .MuiInput-input": {
                    color: "white",
                    paddingLeft: "1.5rem",
                  },
                  "& .MuiFormLabel-root": {
                    color: "white",
                    paddingLeft: "1.5rem",
                  },
                }}
              />
              <TextField
                id="Email"
                label="Email"
                variant="standard"
                sx={{
                  margin: "20px 0",
                  width: "100%",
                  color: "white",
                  borderBottom: "1px solid white",
                  "& .MuiInput-input": {
                    color: "white",
                    paddingLeft: "1.5rem",
                  },
                  "& .MuiFormLabel-root": {
                    color: "white",
                    paddingLeft: "1.5rem",
                  },
                }}
              />

              <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="standard"
                sx={{
                  width: "100%",
                  color: "white",
                  marginBottom: "1rem",
                  borderBottom: "1px solid white",
                  "& .MuiInput-input": {
                    color: "white",
                    paddingLeft: "1.5rem",
                  },
                  "& .MuiFormLabel-root": {
                    color: "white",
                    paddingLeft: "1.5rem",
                  },
                }}
              />

              <span className="d-flex justify-content-end">
                <Button text="SEND MESSAGE" />
              </span>
            </form>
                      
          </div>
        </div>
          </div>
          <hr className="my-5" style={{ border: "2px solid white", opacity: "1", maxWidth: "1100px", margin: "0 auto" }} />
          <Navbar />
    </footer>
  );
}

export default Footer;
