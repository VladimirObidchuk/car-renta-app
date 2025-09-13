import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Buttom from "../Buttom/Buttom";

export default function BookingForm({ carId }) {
  const [success, setSuccess] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    // Імітація відправки
    const bookingData = {
      carId,
      ...values,
      createdAt: new Date().toISOString(),
    };

    console.log("Booking object to send:", bookingData);

    // Симуляція затримки, як ніби дані йдуть на бек
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSuccess(true);
    resetForm();
  };

  return (
    <div>
      {success && <p style={{ color: "green" }}>Booking successful!</p>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>Name*</label>
            <Field name="name" type="text" />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Email*</label>
            <Field name="email" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Booking Date</label>
            <Field name="bookingDate" type="date" />
            <ErrorMessage
              name="bookingDate"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label>Comment</label>
            <Field name="comment" as="textarea" />
          </div>

          <Buttom type="submit" value="Send" />
        </Form>
      </Formik>
    </div>
  );
}
