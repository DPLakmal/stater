"use client";

import React, { useState } from "react";
import { Formik } from "formik";
import StyledFormikInput from "@/components/StyledFormikInput";
import StyledButton from "@/components/StyledButton";
import * as Yup from "yup";
import axios from "axios";

const Form = ({
  slice,
  settings,
  recipient = "mahesh@atdigital.io",
  ackPhone,
}) => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div
      className={
        "border border-[#D5D8E7] max-w-[512px] mx-auto bg-white py-10 px-8 rounded-[20px] mt-8 md:mt-10 lg:mt-0 "
      }
    >
      <h4 className={"text-h4 text-center mb-2"}>Contact us</h4>
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().trim().required("Required"),
          email: Yup.string()
            .trim()
            .email("Invalid email")
            .required("Required"),
          phone: Yup.string().trim().required("Required"),
          message: Yup.string().trim().required("Required"),
        })}
        onSubmit={async (
          values,
          { isSubmitting, setSubmitting, resetForm },
        ) => {
          try {
            // Call the API
            const response = await axios.post("/api/send-mail", {
              recipient,
              replyTo: values.email,
              subject: `${values.name} - Inquiry - Pain and PT`,
              user: {
                fullName: "Admin",
                email: slice.primary.recipient,
              },
              content: getAdminEmailContent(values),
              ackPhone,
            });

            if (response.data.success) {
              setSuccess(true);
              setSubmitMessage(slice.primary.form_success_message);
              resetForm();
            } else {
              setSuccess(false);
              setSubmitMessage("Failed to send message.");
            }
          } catch (error) {
            setSuccess(false);
            setSubmitMessage("An error occurred! Please try again.");
            setSubmitting(false);
            return;
          }

          try {
            // Call the API
            const response = await axios.post("/api/send-mail", {
              recipient: values.email,
              replyTo: slice.primary.recipient,
              subject: `${values.name} - Inquiry - Pain and PT`,
              user: {
                fullName: values.name,
                email: values.email,
              },
              content: getUserEmailContent(values, ackPhone),
            });

            if (response.data.success) {
              setSuccess(true);
              setSubmitMessage(slice.primary.form_success_message);
              resetForm();
            } else {
              setSuccess(false);
              setSubmitMessage("Failed to send message.");
            }
          } catch (error) {
            setSuccess(false);
            setSubmitMessage("An error occurred! Please try again.");
          }
          setSubmitting(false);

          // Clear the submit message after 5000ms
          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);

          // Reset the form after 5000ms if successful
          if (success) {
            setTimeout(() => {
              resetForm();
            }, 5000);
          }
        }}
      >
        {({
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <StyledFormikInput label={"Full name"} name={"name"} />
            <StyledFormikInput label={"Email Address"} name={"email"} />
            <StyledFormikInput label={"Phone Number"} name={"phone"} />
            <StyledFormikInput
              label={"Message"}
              name={"message"}
              type={"textarea"}
            />
            <div className="mt-4 text-center">
              <StyledButton
                type="submit"
                label={"Submit"}
                className={"mx-auto"}
                disabled={isSubmitting}
                icon
              />
            </div>

            {submitMessage && (
              <p
                className={`text-base mt-4 text-center ${success ? "text-green-500" : "text-red-500"}`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;

const getAdminEmailContent = (values) => {
  return [
    {
      type: "html",
      content: `<p>You received a new form submission from the website.</p>`,
    },
    {
      type: "list",
      fields: [
        { label: "Name", value: values.name },
        { label: "Email", value: values.email },
        { label: "Phone", value: values.phone },
        { label: "Message", value: values.message },
      ],
    },
  ];
};

const getUserEmailContent = (values, ackPhone) => {
  return [
    {
      type: "html",
      content: `<p>Thank you for contacting Long Island Pain and Physical Therapy Specialists! We appreciate your interest in our services and will respond to your inquiry as soon as possible. Our team is dedicated to providing the highest level of care and support, and we're here to assist you with any questions or concerns you may have.
<br /><br />Your inquiry details:
</p>`,
    },
    {
      type: "list",
      fields: [
        { label: "Name", value: values.name },
        { label: "Email", value: values.email },
        { label: "Phone", value: values.phone },
        { label: "Message", value: values.message },
      ],
    },
    {
      type: "html",
      content: `<p>What to Expect Next:</p>`,
    },
    {
      type: "html",
      content: `
                <ul>
                <li>One of our friendly team members will review your message and contact you within 24 hours.</li>
                <li>If you requested a free consultation, we will reach out to schedule a convenient time for your visit.</li>
                <li>In the meantime, feel free to explore our website to learn more about our services and how we can help you on your journey to a pain-free life.</li></ul>`,
    },
    {
      type: "html",
      content: `<p>If you need immediate assistance, please don't hesitate to call us at ${ackPhone || "(631) 742-6662"}.</p>`,
    },
    {
      type: "html",
      content: `<p>Thank you again for choosing Long Island Pain and Physical Therapy Specialists. We look forward to helping you live pain-free!</p>`,
    },
  ];
};
