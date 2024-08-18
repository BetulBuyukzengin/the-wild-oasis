import i18next from "i18next";

function LanguageSelection() {
  //   const { t, i18n } = useTranslation();

  const handleChangeLang = (lang) => {
    console.log(lang.toString());
    i18next.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => handleChangeLang("tr")}>Türkçe</button>
      <button onClick={() => handleChangeLang("en")}>English </button>
    </div>
  );
}

export default LanguageSelection;
