import * as yup from "yup";
import { Form, Formik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { message } from "antd";

const Register = ({
  onSuccess,
  onError,
  children,
}) => {
  const handleSubmit = (
    values,
    { isSubmitting, setSubmitting }
  ) => {
    if (!isSubmitting) {
      const { email, password } = values
      const auth = getAuth()

      setSubmitting(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          onSuccess()
        })
        .catch((error) => {
          const errorMessage = error.message;
          onError()
          message.error(errorMessage);
        })
    }
  };

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
    confirmationPassword: yup
      .string()
      .when("password", (password, field) =>
        password ? field.required().oneOf([yup.ref("password")]) : field
      ),
    password: yup.string().min(6).required(),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmationPassword: "",
      }}
      {...{ validationSchema }}
    >
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Register;
