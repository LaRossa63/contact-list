import React from 'react';
import styled from 'styled-components';

import { Favourites } from 'images/Icon';

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
    {
      id: 3,
      name: 'Строй. материал',
      tel: '8 (939) 711-30-65',
    },
    {
      id: 4,
      name: 'Максим',
      tel: '8 (939) 712-03-22',
    },
    {
      id: 5,
      name: 'Влад',
      tel: '8 (939) 714-54-16',
    },
    {
      id: 6,
      name: 'Работа',
      tel: '8 (939) 719-31-45',
    },
    {
      id: 7,
      name: 'Начальник',
      tel: '8 (939) 719-97-94',
    },
    {
      id: 8,
      name: 'Пицца',
      tel: '8 (939) 751-14-56',
    },
    {
      id: 9,
      name: 'Суши',
      tel: '8 (939) 751-16-39',
    },
    {
      id: 10,
      name: 'Сантехник',
      tel: '8 (939) 752-68-51',
    },
    {
      id: 11,
      name: 'Электрик',
      tel: '8 (939) 754-37-59',
    },
    {
      id: 12,
      name: 'Ремонт машины',
      tel: '8 (939) 754-95-95',
    },
    {
      id: 13,
      name: 'Бар',
      tel: '8 (939) 757-92-47',
    },
    {
      id: 14,
      name: 'Ресторан',
      tel: '8 (939) 766-11-91',
    },
  ];

  return (
    <Container>
      <Title>Список контактов:</Title>

      <List>
        {defaultList.map((element) => (
          <ListItem key={element.id}>
            <ContainerText>
              <TextName>{element.name}</TextName>
              <TextTel>{element.tel}</TextTel>
            </ContainerText>

            <Favourites />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
