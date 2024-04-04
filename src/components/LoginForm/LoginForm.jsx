import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { FormContainer, Label, Button } from "./LoginForm.styled"; 

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <Form autoComplete="off">
          <Label>
            Email
            <Field type="email" name="email" />
          </Label>
          <Label>
            Password
            <Field type="password" name="password" />
          </Label>
          <Button type="submit">Log In</Button>
        </Form>
      </FormContainer>
    </Formik>
  );
}
