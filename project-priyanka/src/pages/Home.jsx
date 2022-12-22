import React from 'react'; 
import heroImg from "../assets/images/hero.png"
import Helmet from '../components/Helmet/Helmet';
import{Container,Row,Col} from "reactstrap"
import style from "../styles/herosection.css"
const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className='hero_content'>
                <h5 className='mb-3'>Easy make to make an order</h5>
                <h1 className='mb-4 hero_title'>
                  <span>HUNGRY?</span> Just wait <br /> a food <span>at your door</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quae consequatur laborum voluptatibus modi enim aliquam porro velit amet odio ipsa
                  culpa tenetur ad, minus accusamus sapiente aut totam quia voluptates!
                </p>

              </div>
            </Col>

            <Col lg="6" md="6">
              <div className='hero_image'>
                <img src={heroImg} alt="hero_img"  className="w-100"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home