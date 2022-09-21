import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container
      className="col-12 text-center pt-2"
      >
        <span>Made with 🧡 By <a href="https://github.com/juandavaron" target="_blank">Juan Varón</a></span>
      </Container>
    </footer>
  )
};

export { Footer };