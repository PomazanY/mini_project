/** @jsxImportSource @emotion/react */
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import Container from "../layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";
import LoadingError from "../../shared/components/LoadingError/LoadingError";

import ContactsForm from "./ContactsForm/ContactsForm";
import SocialContacts from "./SocialContacts/SocialContacts";

import { contactUser } from "../../shared/api/auth-api";

import {containerStyles} from "./styles"

const Contacts = () => {
  const [error, setError] = useState(null);
  // const navigate = useNavigate();
  const submitForm = async (payload) => {
    const { error } = await contactUser(payload);
    if (error) {
      return setError(error.response.data.message);
    }
    // navigate("/login");
    alert("Register successfully");
  };

  return (
    <div>
      <Container>
        <SectionTitle title="Контакты" />
        <div css={containerStyles}>
          <ContactsForm submitForm={submitForm} />
          <SocialContacts />
        </div>
        {error && <LoadingError>{error}</LoadingError>}
      </Container>
    </div>
  );
};

export default Contacts;