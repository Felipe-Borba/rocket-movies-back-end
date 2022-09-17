import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import ButtonBack from "../../components/buttons/ButtonBack";
import { Header } from "../../components/Header";
import { Input, InputContainer } from "../../components/Input";
import { MainLayout } from "../../components/layouts/MainLayout";
import TagCreator from "../../components/TagCreator";

export default function MovieNew() {
  const [tags, setTags] = useState<string[]>(['react']);

  return (
    <MainLayout header={<Header />} subHeader={<ButtonBack />}>
      <form>
        <Container>
          <h1>Novo filme</h1>

          <Section>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </Section>

          <InputContainer>
            <textarea />
          </InputContainer>

          <TagCreator tags={tags} setTags={setTags} />

          <Section>
            <Button alt>Excluir filme</Button>
            <Button>Salvar alterações</Button>
          </Section>
        </Container>
      </form>
    </MainLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  textarea {
    height: 274px;
    resize: none;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;