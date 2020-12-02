import { Link } from "react-router-dom";
import styled from "../../utils/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.PRIMARY_500};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-align: center;
  display: block;
  margin-top: 0.5rem;
  border: 1px solid transparent;
  &:hover {
    border-color: ${({ theme }) => theme.colors.PRIMARY_500};
  }
`;

export default StyledLink;
