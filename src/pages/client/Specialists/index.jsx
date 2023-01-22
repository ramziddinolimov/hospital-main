import { useNavigate } from "react-router-dom";
import { Wrapper, Cards, Card } from "./styled-index";

function Specialists() {
  const navigate = useNavigate();
  const HendelClick = () => {
    navigate("/specialist");
  };
  return (
    <Wrapper>
      <Cards data-aos="zoom-out">
        <Card onClick={HendelClick}>
          <h2>Terepert</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Kardiolog</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>EndikRonolog</h2>
        </Card>
      </Cards>
      <Cards data-aos="zoom-out">
        <Card onClick={HendelClick}>
          <h2>Neveralog</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Ginokolog</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Dermatolog</h2>
        </Card>
      </Cards>
      <Cards data-aos="zoom-out">
        <Card onClick={HendelClick}>
          <h2>Urolog</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Lor</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Okulist</h2>
        </Card>
      </Cards>
      <Cards data-aos="zoom-out">
        <Card onClick={HendelClick}>
          <h2>Urolog</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Lor</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Okulist</h2>
        </Card>
      </Cards>
      <Cards data-aos="zoom-out">
        <Card onClick={HendelClick}>
          <h2>Urolog</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Lor</h2>
        </Card>
        <Card onClick={HendelClick}>
          <h2>Okulist</h2>
        </Card>
      </Cards>
    </Wrapper>
  );
}

export default Specialists;
