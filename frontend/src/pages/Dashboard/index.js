import React from "react";
import api from "../../services/api";
import { Container, Time } from './styles';
import { MdChevronLeft,MdChevronRight} from 'react-icons/md';

export default function Dashboard() {

  return (
    <Container>
    <header>
      <button type="button">
        <MdChevronLeft size={36} color="#fff" />
      </button>
      <strong>31 de maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
    </header>
    <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Diego 3g</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Diego 3g</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Diego 3g</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Diego 3g</span>
        </Time>

    </ul>
    </Container>
  )
}
