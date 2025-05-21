import React from "react";

const Aboutme = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 lg:p-20">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co/pjT075xp/Whats-App-Image-2023-09-17-at-22-14-22.jpg"
            alt="About imad"
            className="w-full max-w-xs rounded-md shadow-md "
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-white">
          <p className="text-white mb-6">
            My name is Shoib Rahman Imad. Student of Feni Polytecnic Institute
            in Computer Science and Technology{" "}
          </p>
          <ul className="text-white space-y-2">
            <li>
              <strong>Name:</strong> Shoib Rahman Imad
            </li>
            <li>
              <strong>Date of Birth:</strong> July 03, 2003
            </li>
            <li>
              <strong>Address:</strong> Malipur Feni
            </li>
            <li>
              <strong>Email:</strong> imad64236@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +8801581561630
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
