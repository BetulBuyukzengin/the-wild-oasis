import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useTranslation } from "react-i18next";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { isUpdating, updateUser } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);
  const { t } = useTranslation();
  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }
  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label={t("Email address")}>
        <Input value={email} disabled />
      </FormRow>
      <FormRow label={t("Full name")}>
        <Input
          type="text"
          value={fullName}
          disabled={isUpdating}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label={t("Avatar image")}>
        <FileInput
          id="avatar"
          accept="image/*"
          disabled={isUpdating}
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button
          type="reset" // HTML 5's attribute
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          {t("Cancel")}
        </Button>
        <Button disabled={isUpdating}>{t("Update account")}</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
