import styled from 'styled-components';

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.navyBlue};
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xl : theme.fontSize.xl};
`;
export default Heading;
