import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

 const HeroTyper = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["interact with the spaceman underneath :) ", "5+ years of techncial sales engineering experience", "I build techncial solutions and solve technical use-cases across business and industries", "I build 3D full-stack web application solutions for real estate and residential business","Hire me to launch your ecommerce full-stack no-code/low code solution", "I build low/code to no/code data pipelines", "Hire me to transform your information technology", "Hire me to launch your business on Amazon, shopify and build your website", "Hire me to solve for any technical use-case " ];
  const period = -510;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="txt-rotate" dataperiod="10" data-rotate='["interact with the spaceman underneath :) ", "5+ years of techncial sales engineering experience", "I build techncial solutions and solve technical use-cases across business and industries", "I build 3D full-stack web application solutions for real estate and residential business","Hire me to launch your ecommerce full-stack no-code/low code solution", "I build low/code to no/code data pipelines", "Hire me to transform your information technology", "Hire me to launch your business on Amazon, shopify and build your website", "Hire me to solve for any technical use-case " ]'><span className="wrap">{text}</span></span>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroTyper;