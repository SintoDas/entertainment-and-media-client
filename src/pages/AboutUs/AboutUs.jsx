import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="py-10">
        <div className="bg-gray-100 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              About Our Project
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to our world of entertainment and media! We are passionate
              about bringing you the best content and experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  At{" "}
                  <span className="text-xl text-orange-600 font-bold">
                    Our Entertainment & Media project
                  </span>
                  , our mission is to inspire, entertain, and connect people
                  through the power of media. We are dedicated to creating
                  engaging content that brings joy, sparks conversations, and
                  fosters creativity.
                </p>
              </div>

              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Team
                </h2>
                <p className="text-gray-600">
                  We are a passionate team of creative individuals, including
                  writers, designers, developers, and content creators, all
                  united by our love for entertainment and media. Together, we
                  work tirelessly to deliver the best possible experiences to
                  our audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
