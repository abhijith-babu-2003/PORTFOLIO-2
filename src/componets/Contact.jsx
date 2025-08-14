import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: MdEmail,
      label: "Email",
      value: "abhijth7133@gmail.com",
      href: "mailto:abhijth7133@gmail.com",
      color: "text-red-400",
      hoverBg: "hover:bg-red-500/20"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/abhijith-babu-820827329/",
      color: "text-blue-400",
      hoverBg: "hover:bg-blue-500/20"
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+91 9207256133",
      href: "tel:+9207257133",
      color: "text-green-400",
      hoverBg: "hover:bg-green-500/20"
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 mb-12 text-lg">Get in touch via any of the following methods</p>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700/50 ${contact.hoverBg}`}
              >
                <div className={`mb-4 p-4 rounded-full bg-gray-700/50 transition-all duration-300`}>
                  <IconComponent size={40} className={contact.color} />
                </div>
                <span className="text-white font-medium text-center">{contact.label}</span>
                <span className="text-gray-300 text-sm mt-1">{contact.value}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
