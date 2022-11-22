import React from 'react';
import styled from 'styled-components';

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
  const defaultList = [
    {
      id: 0,
      name: 'Стройка',
      tel: '+7 (939) 709-32-58',
    },
    {
      id: 1,
      name: 'Овощи',
      tel: '8 (939) 709-89-57',
    },
    {
      id: 2,
      name: 'Фрукты',
      tel: '8 (939) 711-24-27',
    },
  ];

  return (
    <Container>
      <Title>Избранные контакты:</Title>

      <List>
        {defaultList.map((element) => (
          <ListItem key={element.id}>
            <ContainerText>
              <TextName>{element.name}</TextName>
              <TextTel>{element.tel}</TextTel>
            </ContainerText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
