import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

/**
 * 614 Restore Contact Page
 * Contact form and information
 */
export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    property: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", property: "", service: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation('/')}>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663237003970/qoISrKwFyQtwyBqN.jpg" alt="614 Restore" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setLocation('/services')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Services</button>
            <button onClick={() => setLocation('/portfolio')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Portfolio</button>
            <button onClick={() => setLocation('/about')} className="text-sm font-medium text-gray-700 hover:text-gray-900">About</button>
            <button onClick={() => setLocation('/contact')} className="text-sm font-medium text-red-600">Contact</button>
            <Button onClick={() => setLocation('/contact')} className="bg-red-600 hover:bg-red-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container">
          <button onClick={() => setLocation('/')} className="flex items-center gap-2 text-gray-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ready to schedule your inspection or discuss your project? Contact us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="p-8 text-center">
              <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <a href="tel:+16147411771" className="text-lg text-red-600 hover:text-red-700 font-semibold">
                (614) 741-1771
              </a>
            </Card>
            <Card className="p-8 text-center">
              <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:jeffrey@614restore.com" className="text-lg text-red-600 hover:text-red-700 font-semibold">
                jeffrey@614restore.com
              </a>
            </Card>
            <Card className="p-8 text-center">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-lg text-gray-700 font-semibold">
                Columbus, Ohio
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                  <p className="text-green-700">
                    We've received your message and will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">Your Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Property Address</label>
                    <input
                      type="text"
                      name="property"
                      value={formData.property}
                      onChange={handleInputChange}
                      placeholder="123 Main St, Columbus, OH"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option value="">Select a service</option>
                      <option value="roof-inspection">Roof & Exterior Inspection</option>
                      <option value="drone-media">Professional Listing Media</option>
                      <option value="insurance-doc">Insurance Documentation</option>
                      <option value="all-services">All Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Tell us about your project</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any additional details about your project..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3"
                  >
                    Send Inquiry
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="bg-gray-50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Response Time</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We typically respond to inquiries within 2 hours during business hours. For urgent matters, please call directly.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663237003970/qoISrKwFyQtwyBqN.jpg" alt="614 Restore" className="h-10 w-auto mb-4" />
              <p className="text-sm">Professional property inspections & drone media solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/services')} className="hover:text-white">Inspections</button></li>
                <li><button onClick={() => setLocation('/services')} className="hover:text-white">Drone Media</button></li>
                <li><button onClick={() => setLocation('/services')} className="hover:text-white">Documentation</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/about')} className="hover:text-white">About Jeff</button></li>
                <li><button onClick={() => setLocation('/portfolio')} className="hover:text-white">Portfolio</button></li>
                <li><button onClick={() => setLocation('/contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+16147411771" className="hover:text-white">(614) 741-1771</a></li>
                <li><a href="mailto:jeffrey@614restore.com" className="hover:text-white">jeffrey@614restore.com</a></li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Columbus, Ohio</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 614 Restore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
