import React, { useState, useEffect } from "react";
import { Form, Button, Message, Segment, Divider } from "semantic-ui-react";
import { loginUser } from "../utils/authUser";
import {
  HeaderMessage,
  FooterMessage,
} from "../components/Common/WelcomeMessage";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const isUser = Object.values({ email, password }) // Here we create object with the values "name, email..."
      .every((item) => Boolean(item)); // with EVERY method, we check if every Item in the array has value

    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true); // If only one Item has no value we setsetSubmitDisabled(true)
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginUser(user, setErrorMsg, setFormLoading);
  };

  return (
    <div>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMessage(null)}
        />
        <Segment>
          <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            fluid
            icon="envelope"
            iconPosition="left"
            type="email"
            required
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            fluid
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
            required
          />
          <Divider hidden />
          <Button
            icon="signup"
            content="Login"
            type="submit"
            color="orange"
            disabled={submitDisabled}
          />
        </Segment>
      </Form>
      <FooterMessage />
    </div>
  );
}

export default Login;
