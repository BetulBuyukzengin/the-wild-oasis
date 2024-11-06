import i18next from "i18next";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const StyledButton = styled.button`
  background-color: var(--color-grey-200);
  border-color: var(--color-grey-200);
  border-radius: 5px;
  padding: 1px 8px;
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
