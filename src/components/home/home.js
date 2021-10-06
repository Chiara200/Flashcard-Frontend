// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';

const Home = () => (
  <Row>
    <Col m={12} s={12}>
        <h5 className="subtitle">Sobre nós</h5>
        <Card>
          <div>
            <p>Oferecemos à sociedade uma educação acessível, focando em uma formação de alta qualidade para construir um país melhor</p>
            <br/>
          </div>
        </Card>
        <h5 className="subtitle">Cursos</h5>  

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Sobre nossos cursos"
                    description="Nossos cursos são focados na formação dos nossos alunos. Eles são totalmente gratuitos disponibilizados à distância com foco na parte prática."
                    avatar={company_avatar}
        />
    </Col>
  </Row>
);

export default Home;