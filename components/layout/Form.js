import { Formik, Form } from "formik";
import referalFormSchema from "../../validations/referalForm";
import BaseInput from "../base/BaseInput";

const ReferalForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        currentCompany: "",
        position: "",
        yearsOfExp: "",
        expectedCtc: "",
      }}
      validationSchema={referalFormSchema}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <Form className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-y-6 gap-x-12">
            <BaseInput required name="firstName" label="First Name" />
            <BaseInput name="lastName" label="Last Name" />
            <BaseInput required name="email" label="Email" type="email" />
            <BaseInput
              required
              name="mobileNumber"
              label="Mobile Number"
              type="number"
            />
            <BaseInput name="currentCompany" label="Current Company Name" />
            <BaseInput name="position" label="Position" />
            <BaseInput
              name="yearsOfExp"
              label="Years of Experience"
              type="number"
            />
            <BaseInput name="expectedCtc" label="Expected CTC" />
          </div>
          <button
            type="submit"
            className="uppercase bg-indigo-500 text-white px-8 py-3 rounded-md mt-10 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:ring-offset-2 focus:ring-offset-indigo-700 hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2"
          >
            CONTINUE
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReferalForm;
