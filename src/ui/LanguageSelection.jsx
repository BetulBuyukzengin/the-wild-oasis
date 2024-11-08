import i18next from "i18next";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const StyledButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
function LanguageSelection() {
  const handleChangeLang = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <StyledContent>
      <StyledButton onClick={() => handleChangeLang("tr")}>TR</StyledButton>
      <StyledButton onClick={() => handleChangeLang("en")}>EN </StyledButton>
    </StyledContent>
  );
}

export default LanguageSelection;
