import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Buttom from "../Buttom/Buttom";
import style from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const STORAGE_KEY = "bookingFormData";

export default function BookingForm({ carId }) {
  const getStoredValues = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    if (parsed.bookingDate) {
      parsed.bookingDate = new Date(parsed.bookingDate);
    }
    return parsed;
  };

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
    const bookingData = {
      carId,
      ...values,
      createdAt: new Date().toISOString(),
    };
    console.log("Booking object to send:", bookingData);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSuccess(true);
    localStorage.removeItem(STORAGE_KEY);
    resetForm();
  };

  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    const stored = getStoredValues();
    if (stored) {
      setFormValues(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div className={style.BookingForm}>
      <h3 className={style.bookingTitle}>Book your car now</h3>
      <p className={style.bookingText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={formValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values, setFieldValue }) => (
          <Form className={style.formBlock}>
            <div className={style.bokingBlockInput}>
              <label className={style.bokingBlockLabel}>Name*</label>
              <Field name="name" type="text" className={style.bokingInput} />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
                className={style.bokingBlockError}
              />
            </div>

            <div className={style.bokingBlockInput}>
              <label className={style.bokingBlockLabel}>Email*</label>
              <Field name="email" type="email" className={style.bokingInput} />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
                className={style.bokingBlockError}
              />
            </div>

            <div className={style.bokingBlockInput}>
              <label className={style.bokingBlockLabel}>Booking Date</label>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                dateFormat="yyyy-MM-dd"
                className={style.bokingInput}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                style={{ color: "red" }}
                className={style.bokingBlockError}
              />
            </div>

            <div className={style.bokingBlockTextArea}>
              <label className={style.bokingBlockLabel}>Comment</label>
              <Field
                name="comment"
                as="textarea"
                className={style.bokingTextArea}
              />
            </div>

            <Buttom type="submit" value="Send" styleCss={style.btnForm} />
          </Form>
        )}
      </Formik>
      {success && (
        <p style={{ color: "green" }} className={style.succsess}>
          Booking successful!
        </p>
      )}
    </div>
  );
}
