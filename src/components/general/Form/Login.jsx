import * as yup from "yup";
import { Form, Formik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/ShoppingSlice";


const Login = ({
  onSuccess,
  onError,
  children,
}) => {
  const dispatch = useDispatch()
  const handleSubmit = (
    values,
    { isSubmitting, setSubmitting }
  ) => {
    const { email, password } = values
    const auth = getAuth()

    if (!isSubmitting) {
      setSubmitting(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({
            token: user.accessToken,
            email: user.email
          }))
          message.success('You are successfully logined');
          onSuccess()
        })
        .catch((error) => {
          onError()
        })
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(6).required(),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
      enableReinitialize
      {...{ validationSchema }}>
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Login
