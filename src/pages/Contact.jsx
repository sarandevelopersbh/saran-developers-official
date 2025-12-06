import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry. This is a demo site.");
  };

  return (
    <div className="pt-20 bg-stone-50 min-h-screen">
      <SEO title="Contact Us" description="Get in touch with Saran Developers." />
      
      <div className="bg-neutral-900 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-serif mb-4">Client Inquiries</h1>
        <p className="text-neutral-400">Begin a conversation about your next legacy project.</p>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">Global Headquarters</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-full text-amber-700">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase tracking-widest text-neutral-400 mb-1">Address</p>
                  <p className="text-neutral-800">9000 Wilshire Blvd<br />Beverly Hills, CA 90211</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-full text-amber-700">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase tracking-widest text-neutral-400 mb-1">Electronic Mail</p>
                  <a href="mailto:inquiries@sarandevelopers.com" className="text-neutral-800 hover:text-amber-600 transition">inquiries@sarandevelopers.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-100 flex items-center justify-center rounded-full text-amber-700">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-xs uppercase tracking-widest text-neutral-400 mb-1">Phone</p>
                  <p className="text-neutral-800">+1 (310) 555-0123</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white border-l-4 border-neutral-900 shadow-sm">
              <p className="text-neutral-500 text-sm leading-relaxed">
                To maintain client privacy, visits to our corporate offices are strictly by appointment only. Please submit a digital inquiry to schedule a consultation.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Full Name</label>
              <input type="text" className="w-full p-4 bg-white border border-neutral-200 focus:outline-none focus:border-amber-600 transition-colors" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Email Address</label>
              <input type="email" className="w-full p-4 bg-white border border-neutral-200 focus:outline-none focus:border-amber-600 transition-colors" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Project Interest</label>
              <select className="w-full p-4 bg-white border border-neutral-200 focus:outline-none focus:border-amber-600 transition-colors">
                <option>New Construction</option>
                <option>Asset Acquisition</option>
                <option>Press / Media</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Message</label>
              <textarea className="w-full p-4 bg-white border border-neutral-200 focus:outline-none focus:border-amber-600 h-32 transition-colors" placeholder="Tell us about your project requirements..."></textarea>
            </div>
            <button type="submit" className="w-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 hover:bg-amber-600 transition-colors">
              Submit Inquiry
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
