import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Main({
  advice,
  setAdvice
}) {

  const URL = 'https://api.adviceslip.com/advice';

  const getAdvice = async () => {
    const res = await fetch(URL);
    const data = await res.json();

    setAdvice([data.slip.id, data.slip.advice])
  };

  return (
    <main>
      <Container
        className="main__container my-5 pb-2 w-75 rounded-3"
      >
        <Container
          className="main__title text-center py-4"
        >
          <h1>advice # {advice[0]}</h1>
        </Container>

        <Container
          className="main__quote"
        >
          <p>“{advice[1]}”</p>
        </Container>

        <Container className="mb-5">

          <Row>
            <Col className="col-12 text-center">
              <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg" className="main__img"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>

            </Col>
          </Row>
        </Container>

        <Container className="main__button col-8 offset-2">
          <Button
            className="button my-3"
            onClick={getAdvice}
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
          </Button>
        </Container>
      </Container>
    </main>
  )
};

export { Main };