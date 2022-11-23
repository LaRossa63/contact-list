import React from 'react';
import styled from 'styled-components';

import { Favourites } from 'images/Icon';
import {
  useAddFavouritesContactList,
  useGetDefaultContactList,
} from 'api/services/Contact';

const Container = styled.div``;

const Title = styled.p`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: 19px;
  line-height: 150%;
  color: ${(props) => props.theme.pallette.common.white};
`;

const List = styled.ul`
  width: 300px;

  display: flex;
  flex-direction: column;

  gap: 15px;
  margin-top: 10px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 20px;

  background-color: ${(props) => props.theme.pallette.common.white};
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const TextName = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: 18px;
  line-height: 155%;
  color: ${(props) => props.theme.pallette.common.black};
`;

const TextTel = styled.span`
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};

  font-size: 16px;
  line-height: 155%;
  color: ${(props) => props.theme.pallette.common.black};

  cursor: pointer;
  border-bottom: 2px dashed gray;
`;

export const DefaultList = () => {
  const { data: defaultContactList } = useGetDefaultContactList();
  const { mutate: sendData } = useAddFavouritesContactList();

  const handleClickAddFavourites = (id: string) => {
    sendData(id);
  };

  return (
    <Container>
      <Title>Список контактов:</Title>

      <List>
        {defaultContactList &&
          defaultContactList.map((element) => (
            <ListItem key={element._id}>
              <ContainerText>
                <TextName>{element.name}</TextName>
                <TextTel>{element.tel}</TextTel>
              </ContainerText>

              <Favourites
                onClick={() => handleClickAddFavourites(element._id)}
              />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};
