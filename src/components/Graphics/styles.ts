import styled from 'styled-components';
import { shade, lighten } from 'polished';

interface IActionButtonProps {
  isSelected: boolean;
}

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    background: #FFFFFF;
    border-radius: 4px;
    padding: 4px;
  }
`;

export const ActionButton = styled.button<IActionButtonProps>`
  padding: 10px 20px;
  background: ${({ isSelected }) => (isSelected ? '#01e9b5' : 'transparent')};
  color: ${({ isSelected }) => (isSelected ? '#fbfbfd' : '#222')};
  font-weight: 500;
  border-radius: 4px;
  border: 0;

  & + button {
    margin-left: 2px;
  }

  &:hover {
    background: ${({ isSelected }) =>
      shade(0.03, isSelected ? '#01e9b5' : '#fbfbfd')};
  }
`;

export const ExportButton = styled.button`
  color: #4198f7;
  background: ${lighten(0.3, '#4198f7')};
  transition: margin 0.2s;

  padding: 10px 20px;

  font-weight: 600;
  font-size: 12px;
  border-radius: 4px;
  border: 0;

  svg {
    margin-left: 10px;
  }

  & + button {
    margin-left: 2px;
  }

  &:hover {
    margin-left: 5px;
  }
`;

export const AreaGrafichs = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    border-radius:10px;
    height: fit-content;
`
