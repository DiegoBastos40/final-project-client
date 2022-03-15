import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const FooterTag = styled.footer`
   {
    height: 5vh;
    background-color: #4d4847;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
  }
  a {
    color: white;
  }
  .my-react-icons {
    height: 40px;
    width: 40px;
    margin-left: 80px;
    margin-right: 80px;
  }
`;

function Footer() {
  return (
    <FooterTag>
      <a href="https://github.com" target="_blank">
        {/* <AiFillGithub className="my-react-icons" /> */}
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        {/* <AiFillLinkedin className="my-react-icons" /> */}
      </a>
    </FooterTag>
  );
}

export default Footer;