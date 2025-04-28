/** @jsxImportSource @emotion/react */

import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";
import Button from "../../../shared/components/Button/Button";

import fields from "./fields";
import { contactsFormStyle, userEmailFormStyle, textareaFormStyle, btnStyle } from "./styles"

const ContactsForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div css={contactsFormStyle}>
        <div css={userEmailFormStyle}>
          <TextField 
            {...fields.username}
            register={register}
            error={errors.username}
          />
          <TextField {...fields.email} register={register} error={errors.email} />
        </div>
        <TextField css={textareaFormStyle}
          {...fields.description}
          register={register}

        /></div>
        <div css={btnStyle}>
        <Button >Send</Button>
        </div>
      
    </form>
  );
};

export default ContactsForm;