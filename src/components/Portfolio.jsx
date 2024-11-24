import React from 'react';

function Portfolio() {
  return (
    <div id="portfolio" className="p-6">
      <h3 className="text-3xl font-bold mb-4 text-center" style={{color: 'rgb(234 179 8)', fontSize: '16px', fontFamily: 'sans-serif'}}>PORTFOLIO</h3>
      <p className="text-xl text-gray-700 mb-8 text-center" style={{fontSize: '36px', fontFamily: 'poppin, sans-serif'}}>Our Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="/images/bulksms_rtqb7f.jpg" alt="PopSms - Bulk SMS" className="w-full h-64 object-cover rounded-t-lg" />
          <h4 className="text-2xl font-semibold mt-4">PopSms - Bulk SMS</h4>
          <p className="text-gray-600 mt-2">Experience seamless communication with our bulk SMS and email service.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="/images/Mtumbler_gh88qs.png" alt="M-Tumbler" className="w-full h-64 object-cover rounded-t-lg" />
          <h4 className="text-2xl font-semibold mt-4">M-Tumbler</h4>
          <p className="text-gray-600 mt-2">Instant Bonga Points to cash converter.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="/images/nextauth_icotjb.webp" alt="NextAuth.js Documentation" className="w-full h-64 object-cover rounded-t-lg" />
          <h4 className="text-2xl font-semibold mt-4">NextAuth.js Documentation</h4>
          <p className="text-gray-600 mt-2">Documentation on how to use NextAuth.js.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img src="/images/dr_x4yqnh.avif" alt="Dr Floor" className="w-full h-64 object-cover rounded-t-lg" />
          <h4 className="text-2xl font-semibold mt-4">Dr Floor</h4>
          <p className="text-gray-600 mt-2">Site that allows you to view and purchase flooring materials.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
