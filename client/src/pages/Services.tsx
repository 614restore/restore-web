import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 614 Restore Services Page
 * Detailed service offerings and pricing
 */
export default function Services() {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: "The Foundation Report",
      description: "Inspection only with written analysis and key inspection photos. Perfect for sellers who want a professional assessment.",
      features: [
        "Roof & Exterior Integrity Audit",
        "Seller's Transparency Report (PDF)",
        "Realtor Speed-Dial Support",
        "High-Resolution Inspection Photos",
        "Email Delivery within 24 Hours",
        "Deal-Killer Issues Identified"
      ],
      icon: "📋",
      price: "$395"
    },
    {
      title: "The Custom Choice Suite",
      description: "Inspection + Choose ANY 3 Media Assets from our menu. Perfect for agents who want inspection foundation plus marketing power.",
      features: [
        "Roof & Exterior Integrity Audit",
        "Seller's Transparency Report (PDF)",
        "Choose ANY 3 Media Assets",
        "3D Dollhouse Walkthrough (Matterport)",
        "Professional 2D Floor Plan",
        "Aerial Drone Photography & More"
      ],
      icon: "📷",
      price: "$595"
    },
    {
      title: "The Gold Standard",
      description: "Inspection + ALL Media + Cinematic Edit + Social Media Kit. The ultimate package for maximum market impact.",
      features: [
        "Roof & Exterior Integrity Audit",
        "Seller's Transparency Report (PDF)",
        "ALL Media Assets Included",
        "Professional Cinematic Edit",
        "Social Media Kit (Reels, Stories, Posts)",
        "Branded Property Webpage"
      ],
      icon: "🏆",
      price: "$995"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Schedule",
      description: "Book your inspection or media session at a time that works for you"
    },
    {
      step: 2,
      title: "Inspection",
      description:      "Professional assessment using latest drone technology and visual inspection methods"},
    {
      step: 3,
      title: "Analysis",
      description: "Detailed review and professional documentation of findings"
    },
    {
      step: 4,
      title: "Delivery",
      description: "Receive polished results with full usage rights and support"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation('/')}>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663237003970/qoISrKwFyQtwyBqN.jpg" alt="614 Restore" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setLocation('/services')} className="text-sm font-medium text-red-600">Services</button>
            <button onClick={() => setLocation('/service-packages')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Packages</button>
            <button onClick={() => setLocation('/portfolio')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Portfolio</button>
            <button onClick={() => setLocation('/about')} className="text-sm font-medium text-gray-700 hover:text-gray-900">About</button>
            <button onClick={() => setLocation('/contact')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</button>
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
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive property inspection and professional media solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-2xl font-bold text-red-600 mb-6">{service.price}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setLocation('/contact')} className="w-full bg-red-600 hover:bg-red-700">
                  Request Quote
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose 614 Restore</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Credentials</h3>
                <p className="text-gray-700">FAA Part 107 certified drone pilot with 15+ years of property assessment experience and former insurance adjuster background.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-700">Properties with our professional media receive 68% more inquiries and sell 32% faster on average.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Full Rights Included</h3>
                <p className="text-gray-700">All media is yours to use everywhere, forever. No licensing restrictions or hidden fees.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Turnaround</h3>
                <p className="text-gray-700">Same-day editing and delivery keeps your listings moving forward without delays.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adjuster-Approved</h3>
                <p className="text-gray-700">Insurance documentation formatted to meet adjuster standards and maximize claim approval rates.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Support</h3>
                <p className="text-gray-700">Direct support from Jeff Newell with personalized consultation for your specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your inspection or media session today and see the difference professional documentation makes.
          </p>
          <Button onClick={() => setLocation('/contact')} className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
            Get Started Now
          </Button>
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
