import Footer from "./Footer";
import Header from "./Header";
import Pagination from "./Pagination";

// pages/contact.js
export default function Contact() {
    return (
        <div>
            <Header/>
            <div className=" mt-[80px]">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-56 flex items-center justify-center"
        style={{
          backgroundImage: "url('/img4.png')",
        }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
          <p className="text-gray-500 mt-2">
            <span className="text-gray-400">Home</span> &gt; Contact
          </p>
        </div>
      </div>
      </div>



      <div className="min-h-screen  flex justify-center items-center p-5">
        <div className="w-full max-w-6xl  rounded-lg  p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Get In Touch With Us</h2>
          <p className="text-center text-gray-600 mb-8">
            For More Information About Our Product & Services, Please Feel Free To Drop Us <br />
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-xl">📍</div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-xl">📞</div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-xl">⏰</div>
                <div>
                  <h4 className="font-bold">Working Time</h4>
                  <p>Monday-Friday: 9:00 - 22:00</p>
                  <p>Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Your name</label>
                <input
                  type="text"
                  placeholder="Abc"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Email address</label>
                <input
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="This is an optional"
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  placeholder="Hi! I’d like to ask about"
                  className="w-full border rounded p-2 h-28"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

<Pagination/>
<Footer/>
      </div>
    );
  }
  