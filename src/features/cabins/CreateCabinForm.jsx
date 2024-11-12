/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import { useTranslation } from "react-i18next";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  //* use custom hook
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const { t } = useTranslation();
  const { id: editId, ...editValues } = cabinToEdit;
  //! get default value when click on edit button
  const isEditSession = Boolean(editId);

  //! REACT HOOK FORM
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    // for default value
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    // for upload data and img
    // else createCabin({ ...data, image: data.image[0] });
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={onCloseModal ? "modal" : ""}>
      <FormRow label={t("Cabin name")} error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: t("This field is required!"),
          })}
        />
      </FormRow>

      <FormRow
        label={t("Maximum capacity")}
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: t("This field is required!"),
            min: {
              value: 1,
              message: t("Capacity should be at least 1!"),
            },
          })}
        />
      </FormRow>

      <FormRow label={t("Regular Price")} error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: t("This field is required!"),
            min: {
              value: 1,
              message: t("Regular price should be at least 1!"),
            },
          })}
        />
      </FormRow>

      <FormRow label={t("Discount")} error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: t("This field is required!"),
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              t("Discount should be less than regular price!"),
          })}
        />
      </FormRow>

      <FormRow
        label={t("Description for website")}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", {
            required: t("This field is required!"),
          })}
        />
      </FormRow>

      <FormRow
        label={t("Cabin photo")}
        error={errors?.image?.message}
        disabled={isWorking}
      >
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSession ? false : t("This field is required!"),
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          {t("Cancel")}
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? t("Edit cabin") : t("Create new cabin")}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
