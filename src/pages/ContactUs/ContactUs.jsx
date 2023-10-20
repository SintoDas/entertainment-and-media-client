import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="text-gray-700">
          <p>
            Feel free to reach out to us for any inquiries, suggestions, or
            feedback.
          </p>
          <p>
            For general inquiries, please contact us at:
            <span className="text-xl text-orange-600 font-bold">
              awesome@media.com
            </span>
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              We'd love to hear from you! If you have any questions,
              suggestions, or just want to say hello, don't hesitate to get in
              touch. You can reach us at{" "}
              <span className="text-xl text-orange-600 font-bold">
                awesome@entertainment.com
              </span>
              .
            </p>
          </div>
          <p>
            You can also call us at:
            <span className="font-semibold"> (123) 456-7890</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
