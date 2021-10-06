// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
import company_avatar from '../../images/company.png';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';

const Contact = () => (
  <Row>
    <Col m={12} s={12}>
        <h5>Cursos</h5>
        <Card>
          <Row>
          <Experience title="Biologia"
            description=""
            avatar={img1}
          />
          <Experience title="Geografia"
            description=""
            avatar={img2}
          />
          <Experience title="História"
            description=""
            avatar={img3}
          />
          <Experience title="Física"
            description=""
            avatar={img4}
          />
          <Experience title="Química"
            description=""
            avatar={img5}
          />

          </Row>
        </Card>
    </Col>
  </Row>
);

export default Contact;