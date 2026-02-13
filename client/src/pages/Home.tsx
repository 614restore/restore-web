import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 614 Restore Home Page
 * Landing page with hero, services overview, and testimonials
 */
export default function Home() {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: "Roof & Exterior Inspections",
      description: "See what others miss. Aerial thermal imaging detects hidden moisture, hail damage, and structural concerns.",
      features: ["Comprehensive assessment", "Thermal imaging included", "Claims-ready documentation"],
      icon: "🏠"
    },
    {
      title: "Professional Listing Media",
      description: "Listings with professional drone footage receive 68% more inquiries. Full rights included.",
      features: ["4K drone photography", "360° property tours", "Full usage rights included"],
      icon: "📷",
      popular: true
    },
    {
      title: "Insurance Documentation",
      description: "Former insurance adjuster expertise. Claims-ready reports that adjusters respect.",
      features: ["Professional documentation", "Adjuster-approved format", "Digital & print formats"],
      icon: "📋"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Real Estate Agent, Columbus",
      quote: "The professional photos made all the difference. We had multiple offers within a week. Highly recommend!"
    },
    {
      name: "James Rodriguez",
      role: "Broker, Westside Realty",
      quote: "The videography was exceptional. My listings are getting 3x more views now. This is a game-changer."
    },
    {
      name: "Emily Chen",
      role: "Homeowner, Columbus",
      quote: "The inspection reports are thorough and professional. My clients feel confident with the documentation."
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
            <button onClick={() => setLocation('/services')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Services</button>
            <button onClick={() => setLocation('/portfolio')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Portfolio</button>
            <button onClick={() => setLocation('/about')} className="text-sm font-medium text-gray-700 hover:text-gray-900">About</button>
            <button onClick={() => setLocation('/contact')} className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</button>
            <Button onClick={() => setLocation('/contact')} className="bg-red-600 hover:bg-red-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663237003970/Yjm6VPLEd0vLGwKQ.jpg" alt="88 Seconds" className="h-20 w-auto" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Elevate Your Listing, Protect Your Investment
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Expert property inspections & professional media solutions by Jeff Newell. Former insurance adjuster providing comprehensive inspections in Columbus, Ohio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setLocation('/contact')} className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
                Schedule Inspection
              </Button>
              <Button onClick={() => setLocation('/portfolio')} variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6">
                View Portfolio
              </Button>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Former Insurance Adjuster</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>FAA-Certified Drone Pilot</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span>Ohio Licensed Inspector</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why 88 Seconds Section */}
      <section className="bg-amber-50 py-16">
        <div className="container text-center">
          <p className="text-amber-700 text-sm font-semibold uppercase tracking-wide mb-3">Why 88 Seconds Matters</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The average buyer decides in 88 seconds.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our inspections and media ensure your property makes every second count.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600">Complete real estate solutions designed to help you close deals faster.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className={`p-8 ${service.popular ? 'ring-2 ring-red-600 relative' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => setLocation('/contact')} variant={service.popular ? "default" : "outline"} className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Professionals Choose 614 Restore</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Faster Sales</h3>
                <p className="text-gray-700">Properties with professional photos and videos sell 32% faster on average</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Higher Offers</h3>
                <p className="text-gray-700">Professional presentation increases perceived value and buyer confidence</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Reduced Liability</h3>
                <p className="text-gray-700">Comprehensive inspection reports protect you and your clients with detailed documentation</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quick Turnaround</h3>
                <p className="text-gray-700">Same-day editing and delivery keeps your listings moving forward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">What Real Estate Professionals Say</h2>
          <p className="text-center text-gray-600 mb-12">Trusted by agents and brokers across Columbus</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get professional photography, videography, and inspection services that help you close deals faster.
          </p>
          <Button onClick={() => setLocation('/contact')} className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
            Schedule Your Inspection
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
