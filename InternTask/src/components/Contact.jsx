import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const licenseOptions = ["Select", "Microsoft", "Adobe", "Autodesk", "Other"];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.license || formData.license === "Select")
      newErrors.license = "Please select a license type";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully (frontend only)");
      setErrors({});
      setFormData({
        name: "",
        email: "",
        company: "",
        license: "",
        message: "",
      });
    }
  };

  // variants={fadeIn('up', 0.2)}
  //     initial="hidden"
  //     whileInView="show"

  return (
    <motion.section
      className="py-25"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg "
        variants={fadeIn("up", 0.3)}
        id="contact"
      >
        <motion.h2 
         variants={textVariant(0.2)}
        className="text-3xl font-bold mb-4 text-center dark:text-gray-500">
          Contact Us
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "company"].map((field) => (
            <div key={field}>
              <motion.input
               variants={textVariant(0.2)}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={(e) =>
                  setFormData({ ...formData, [field]: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md dark:text-black border-none shadow"
              />
              {errors[field] && (
                <p  variants={textVariant(0.2)} className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <select
              value={formData.license}
              onChange={(e) =>
                setFormData({ ...formData, license: e.target.value })
              }
              className="w-full px-4 py-2 shadow rounded-sm text-black"
            >
              {licenseOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.license && (
              <p  variants={textVariant(0.2)} className="text-red-500 text-sm mt-1">{errors.license}</p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2  shadow h-24 resize-none text-black"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}
