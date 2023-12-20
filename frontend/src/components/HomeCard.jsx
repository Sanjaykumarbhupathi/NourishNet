import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = () => {
  const services = [
    {
      heading: "Admins",
      subtext: "They control all the activities and accept/reject donations and select agents.",
      linkTo: "/services", // Add the route path you want to redirect to
    },
    {
      heading: "Donors",
      subtext: "They are the driving users of the application who donate food.",
      linkTo: "/services", // Add the route path you want to redirect to
    },
    {
      heading: "Volunteer",
      subtext: "They are responsible for collecting food from homes of food donors.",
      linkTo: "/services", // Add the route path you want to redirect to
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-4 border-coffee rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-0 text-coffee"> {/* Remove the bottom margin here */}
              {service.heading}
            </h2>
            <p className="text-coffee-dark">{service.subtext}</p>
            <Link to={service.linkTo}>
              <button
                className="mt-4 bg-coffee text-white py-2 px-4 rounded-md hover:bg-coffee-darker focus:outline-none" style={{ color: 'white' }}
              >
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
