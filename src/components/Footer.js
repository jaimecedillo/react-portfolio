import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons/"

function Footer() {
    return (

        <IconContext.Provider value={{ color: "#C80140", size: "3em", }}>
            <footer>
                <Container fluid={true}>
                    <Row>
                        <Col md={3}>
                            <a href="https://twitter.com/Ja1m1t0" target="_blank"><FaTwitterSquare />
                            </a>
                            <a href="https://www.linkedin.com/in/jaime-cedillo-303b061a9/" target="_blank">< FaLinkedin />
                            </a>
                            <a href="https://github.com/jaimecedillo" target="_blank"><FaGithubSquare />
                            </a>
                        </Col>
                    </Row>
                </Container>

            </footer >
        </IconContext.Provider>
    );
}

export default Footer;