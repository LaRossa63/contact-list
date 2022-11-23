import React from 'react';
import styled from 'styled-components';

import {
  useDeleteFavouritesContactList,
  useGetFavouritesContactList,
} from 'api/services/Contact';
import { Delete } from 'images/Icon';

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

export const FavouritesList = () => {
  const { data: favouritesList } = useGetFavouritesContactList();
  const { mutate: sendData } = useDeleteFavouritesContactList();

  const handleClickDelete = (id: string) => {
    sendData(id);

    console.log('delete', id);
  };

  return (
    <Container>
      <Title>Избранные контакты:</Title>

      <List>
        {favouritesList &&
          favouritesList.map((element) => (
            <ListItem key={element._id}>
              <ContainerText>
                <TextName>{element.name}</TextName>
                <TextTel>{element.tel}</TextTel>
              </ContainerText>

              <Delete onClick={() => handleClickDelete(element._id)} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};
