import React from 'react';
import { Container, Row , Col, Image} from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div className="home-bg pt-5">
                <Container>
                    <Row className="align-items-center  mt-5">
                        <Col xs={12} md={6}>
                            <div className="w-75">
                                <h1 className="fw-bold fs-1">Fresh <span className="foods-color">Grocery </span>
                                Shopping</h1>
                                <p>It Is a long established fact that a readerwill be
        the readable content of a page</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}  className="side-bg ps-4">
                            <Image src="https://templates.iqonic.design/foodsto/html/theme/dist/assets/images/banner/man.png"/>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Home;