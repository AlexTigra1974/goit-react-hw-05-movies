import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;

  padding: 8px 16px;
  gap: 4px;

  border: 1px solid lightgrey;
  border-radius: 4px;
  text-decoration: none;
  color: black;

  :hover {
    color: red;
  }
`;
export const DetailsWrap = styled.div`
  display: flex;
  gap: 14px;
`;

export const AdditionalWrap = styled.div`
  border-bottom: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
`;
