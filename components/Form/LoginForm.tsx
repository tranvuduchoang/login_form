import React, { useState } from "react";
import { Container, Form } from "./FormElements";
import { InputError } from "../../types/error";
import { useRouter } from "next/router";
import SocialButton from "../SocialButton";
import GoogleImage from "../../public/assets/images/google.svg";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handleGoogleSignIn = async (event: React.FormEvent<Element>) => {
    event.preventDefault();

    // Sử dụng signIn của next-auth
    await signIn("google", { callbackUrl: "http://localhost:3000/" });
  };

  return (
    <Container>
      <Form>
        <SocialButton
          title={"Login with Google"}
          icon={GoogleImage}
          onClick={handleGoogleSignIn}
        />
      </Form>
    </Container>
  );
};

export default LoginForm;
