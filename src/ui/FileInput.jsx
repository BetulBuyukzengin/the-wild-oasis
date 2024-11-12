/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n.js";

const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

const CustomFileInputLabel = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  margin-right: 1.2rem;
  border-radius: var(--border-radius-sm);
  border: none;
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    background-color: var(--color-brand-700);
  }

  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;

const FileName = styled.span`
  font-size: 1.4rem;
  color: var(--color-text-primary);
  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;

const FileInput = ({ id, accept, disabled, onChange }) => {
  const { t } = useTranslation();
  const [fileName, setFileName] = useState("No file choose");
  const translatedFileStatus = t(`fileStatus.${fileName}`);
  const statusTr = t("{{fileName}}", {
    fileName: translatedFileStatus,
  });
  const statusEn = t("{{fileName}}", { fileName });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file);
    onChange && onChange(e);
  };

  return (
    <>
      <HiddenFileInput
        id={id}
        accept={accept}
        disabled={disabled}
        onChange={handleFileChange}
      />
      <CustomFileInputLabel htmlFor={id}>
        {t("Choose file")}
      </CustomFileInputLabel>
      <FileName>{i18n.language === "tr" ? statusTr : statusEn}</FileName>
    </>
  );
};

export default FileInput;
