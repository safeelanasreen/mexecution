import Style from "./SubscribeForm.module.scss";
import Icon from "../../../Icons";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { postContent } from "../../../../../../lib/pages";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const SubscribeForm = ({ props }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required")
        .matches(emailRegex, "Please enter a valid email"),
    }),

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        let obj = {
          email: values.email,
        };

        postContent("newsletter/subscribe", obj).then((response) => {
          if (response?.status === 200) {
            submitForm(resetForm);
            toast.success("Thank you for submission", {
              position: "bottom-right",
            });
          }
          setError(response?.data?.status === "Not Found");

          setTimeout(() => {
            setError(false);
            resetForm();
          }, 3000);
        });
      } catch (error) {
        console.error("Error submitting the form:", error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });
  const submitForm = (resetForm) => {
    resetForm();
    setLoading(false);
  };
  useEffect(() => {
    const handleRouteChange = () => {
      formik.resetForm();
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router, formik]);

  return (
    <div className={Style.wrap}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <span className="h6 text-white">Subscribe to Our Newsletter</span>
        <div className={Style.form}>
          <div className={Style.form_input}>
            <input
              placeholder="Enter your Email ID"
              type="email"
              name="email"
              id="formBasicEmail"
              {...formik.getFieldProps("email")}
            />
          </div>
          <button className={Style.form_button} aria-label="submit email" type="submit">
            <Icon icon="arrow-right" size={15} />
          </button>
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
          {error && <span className="error"> Email already exists </span>}
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
