import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Profile } from "./styles";
import Notifications from "../Notifications";
import logo from "../../assets/logo-p.svg";
export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Diego f</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy to Clipboard
"
              alt="Diego f"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
