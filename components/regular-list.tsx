import React from "react";
import styled, { css } from "styled-components";

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: any) => {
  const CardWrapper = styled.div`
    overflow: hidden;
    padding: 32px;
    margin: 28px;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
  `;

  const CardItem = styled.div`
    margin: 6px;
    width: 100%;
    text-align: center;

    border-radius: 5px;
  `;

 const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

  const CardHeading = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
  return (
    <CardWrapper>
      <CardHeader>
        <CardHeading>{resourceName}</CardHeading>
      </CardHeader>
      {items.map((item: any, index: number) => (
        // {...{ [resourceName]: item }} --> ex: person ={item}
        <CardItem key={index}>
          <ItemComponent {...{ [resourceName]: item }} />
        </CardItem>
      ))}
    </CardWrapper>
  );
};

export default RegularList;
