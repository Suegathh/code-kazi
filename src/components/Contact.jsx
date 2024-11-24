import React from 'react';

function Contact() {
  return (
    <div className="p-6">
      <h3 className="text-3xl font-bold mb-4 text-center"style={{color: '#eab308', fontFamily: 'sans-serif', fontSize: '16px'}}>GET IN TOUCH</h3>
      <h4 className="text-2xl text-gray-700 mb-8 text-center"style={{color: '#4f4f4f', fontSize: '36px', fontFamily: 'sans-serif'}}>Contact Us</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="contacts">
          <p className="text-xl text-gray-600 mb-4">We are the future of software</p>
          <ul className="list-none">
            <li className="text-lg flex items-center mb-2 mt-10">
              <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 1.36.31 2.64.85 3.75L12 22l6.15-9.25c.54-1.11.85-2.39.85-3.75 0-3.87-3.13-7-7-7zm-1 9h-2v2h2v2h2v-2h2v-2h-2V7h-2v4z" />
              </svg>
              CodeKazi
            </li>
            <li className="text-lg flex items-center mb-2 mt-8">
              <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.17 0-4.15-1.1-5.33-2.83L16.83 6.67C18.54 8.85 19 10.85 19 12c0 3.87-3.13 7-7 7zm-4.15-4.83C9.46 16.9 10.68 18 12 18c2.21 0 4-1.79 4-4 0-.1-.01-.21-.02-.31l-4.13-4.13C11.21 9.99 11.11 10 11 10c-2.21 0-4 1.79-4 4 0 .32.04.63.12.93z" />
              </svg>
              Nairobi, Kenya
            </li>
            <li className="text-lg flex items-center mb-2 mt-8">
              <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12.713L1.804 6.158l-.008 11.392C1.796 19.77 3.017 21 4.62 21h14.76c1.603 0 2.824-1.23 2.824-2.45l.008-11.39L12 12.713zM22 5.977L12 12.287 2 5.975V5c0-1.276 1.185-3 2.698-3H19.28C20.795 2 22 3.724 22 5v.977z" />
              </svg>
              Contact@codekazi.org
            </li>
            <li className="text-lg flex items-center mt-8 mb-10">
              <svg className="w-5 h-5 mr-2 text-gray-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 1C5.926 1 1 5.926 1 12c0 3.226 1.47 6.097 3.772 7.866L4.375 17H3.367c-.495 0-.881-.383-.881-.883 0-.224.082-.433.219-.596L6.37 10.99c.132-.157.317-.247.515-.247.103 0 .207.019.304.054 1.017.359 1.92.902 2.682 1.617.484.451.816.972.937 1.633.027.137.037.278.037.422 0 .199-.06.391-.167.553L8.65 17.9c-.162.247-.45.399-.765.382H5.952l.633 1.155C7.647 20.789 9.843 22 12.197 22c6.074 0 11-4.926 11-11S18.074 1 12 1zm0 20c-1.36 0-2.646-.39-3.75-1.045l1.766-3.322c.243.209.492.41.748.605.282.213.59.4.927.526.17.063.346.093.523.093 1.401 0 2.67-.615 3.548-1.665l2.203 4.141C17.646 20.61 15.401 21 13 21zm4.9-7.9c-2.34 0-4.2-1.86-4.2-4.2s1.86-4.2 4.2-4.2 4.2 1.86 4.2 4.2-1.86 4.2-4.2 4.2z" />
              </svg>
              +2547123456
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3 id="contact" className="text-3xl font-bold mb-4">Send us a message</h3>
          <div className="flex flex-col space-y-4">
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name" 
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Email" 
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-4">
            <textarea 
              name="message" 
              id="message" 
              placeholder="Message" 
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            ></textarea>
          </div>
          <button className="m-3 p-3 flex items-center justify-center bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Send
            <svg className="w-5 h-5 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 17l5-5-5-5v10z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
