import styled from "styled-components";
import { PiFacebookLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 162px;
  height: 35px;
  margin-left: 46px;
  a {
    text-decoration: none;
  }
  .style-icon {
    font-size: 35px;
    color: #fff;
  }
  @media (max-width: 775px) {
    .style-icon {
      font-size: 24px;
    }
  }
`;

const Text = styled.p`
  font-weight: 500;
  color: #fff;
  margin-right: 46px;
`;

const Footer = () => {
  return (
    <>
      <SocialIcon>
        <a href="#">
          <PiFacebookLogoFill className="style-icon" />
        </a>
        <a href="#">
          <FaTwitter className="style-icon" />
        </a>
        <a href="#">
          <FaInstagram className="style-icon" />
        </a>
      </SocialIcon>
      <Text>Desenvolvido por Alura | Gilberto Espinoso</Text>
    </>
  );
};

export default Footer;
