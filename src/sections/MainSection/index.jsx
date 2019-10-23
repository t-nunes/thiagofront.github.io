import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import {
  Wrapper,
  Content,
  AvatarWrapper,
  ListSocial,
  ListSkills,
  SkillsWrapper,
} from "./styles"
import Avatar from "../../components/Avatar"
import Button from "../../components/Button"
import Label from "../../components/Label"

function MainSection() {
  return (
    <Wrapper>
      <Content>
        <AvatarWrapper>
          <Avatar url={"/avatar-thiago.jpeg"} size={130} />
          <h1>Thiago Nunes</h1>
          <p>Front-end Developer</p>
          <ListSocial>
            <li>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/thiago.nunes.1088"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/thiagonunestn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ListSocial>
          <p>
            Olá meu nome é <strong>Thiago</strong> sou programador já faz
            <strong> 7 anos </strong>atualmente trabalho como front-end na
            empresa
            <strong> Codex Sistemas</strong> onde utilizo React para fazer um
            sistema voltado para o mercado imobiliário chamado
            <strong> Tecimob</strong>
          </p>
        </AvatarWrapper>
        <SkillsWrapper>
          <h2>Habilidades</h2>
          <ListSkills>
            <li>
              <Label>React</Label>
            </li>
            <li>
              <Label>Javascript</Label>
            </li>
            <li>
              <Label>HTML</Label>
            </li>
            <li>
              <Label>CSS</Label>
            </li>
            <li>
              <Label>PHP</Label>
            </li>
            <li>
              <Label>Java</Label>
            </li>
            <li>
              <Label>Node</Label>
            </li>
            <li>
              <Label>Sass</Label>
            </li>
            <li>
              <Label>React Native</Label>
            </li>
          </ListSkills>
        </SkillsWrapper>
        <Button
          as="a"
          href="mailto:thiago_nunes_91@hotmail.com"
          color="primary"
        >
          Me Contrate
        </Button>
      </Content>
    </Wrapper>
  )
}

export default MainSection
