import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import { useTranslation } from "react-i18next";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  // take getValues for password verification
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { t } = useTranslation();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      // Resets the form on success or failure
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label={t("Full name")} error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: t("This field is required!") })}
        />
      </FormRow>

      <FormRow label={t("Email address")} error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: t("This field is required!"),
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label={t("Password (min 8 characters)")}
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: t("This field is required!"),
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label={t("Repeat password")}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: t("This field is required!"),
            //use validate for password verification
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          {t("Cancel")}
        </Button>
        <Button disabled={isLoading}>{t("Create new user")}</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
