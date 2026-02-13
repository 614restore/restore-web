import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 614 Restore About Page
 * Information about Jeff Newell and company background
 */
export default function About() {
  const [, setLocation] = useLocation();

  const credentials = [
    {
      title: "FAA Part 107 Certified",
      description: "Licensed drone pilot with advanced aerial photography and inspection capabilities"
    },
    {
      title: "Former Insurance Adjuster",
      description: "15+ years of property assessment and insurance claim documentation experience"
    },
    {
      title: "Ohio Licensed Inspector",
      description: "Certified property inspector meeting all state requirements and standards"
    },
    {
      title: "Professional Photographer",
      description: "Expert in 4K drone photography, thermal imaging, and professional media production"
    }
  ];

  const values = [
    {
      title: "Accuracy",
      description: "Every inspection is thorough and detailed, providing comprehensive documentation"
    },
    {
      title: "Integrity",
      description: "We provide honest assessments that protect both buyers and sellers"
    },
    {
      title: "Excellence",
      description: "Professional quality in every photo, video, and report we deliver"
    },
    {
      title: "Speed",
      description: "Quick turnaround times without compromising on quality or detail"
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
            <button onClick={() => setLocation('/about')} className="text-sm font-medium text-red-600">About</button>
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
          <h1 className="text-5xl font-bold mb-4">About Jeff Newell</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Professional property inspector, drone pilot, and insurance expert dedicated to protecting your investment.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why 614 Restore Exists</h2>
              <p className="text-lg text-gray-700 mb-6">
                I started 614 Restore after seeing too many homeowners and real estate professionals discover problems too late. As a former insurance adjuster with over 15 years of experience in property assessment, I know exactly what documentation holds up in claims—and what gets denied.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience in property assessment and claims documentation, I bring a unique perspective to every inspection. My goal is to help you make informed decisions and protect your investment before problems become expensive.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a real estate professional looking to elevate your listings or a homeowner protecting your property, I'm here to provide the professional documentation and media you need to succeed.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-12 rounded-lg">
              <h3 className="text-3xl font-bold mb-8">By The Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <p className="text-red-100">Properties Inspected</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <p className="text-red-100">Years of Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-red-100">Client Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Image Section with Overlay */}
      <section className="relative bg-white overflow-hidden py-20">
        <div className="relative min-h-96 flex items-center">
          {/* Background Image with Transparency */}
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663159852010/isPCJDOObBYdYsML.JPG" 
            alt="614 Restore - Professional Services" 
            className="absolute inset-0 w-full h-full object-cover opacity-25" 
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/60"></div>
          
          {/* Text Content */}
          <div className="container relative z-10 text-white">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Comprehensive Property Solutions
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                With 15+ years of insurance adjuster experience and FAA drone certification, I provide the professional documentation and media your property deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => setLocation('/contact')} className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                  Get in Touch
                </Button>
                <Button onClick={() => setLocation('/services')} variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Credentials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((cred, idx) => (
              <Card key={idx} className="p-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cred.title}</h3>
                    <p className="text-gray-700">{cred.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Areas of Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Inspections</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Roof assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Thermal imaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Structural analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Damage assessment</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Media</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">4K drone photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Cinematic videography</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">360° virtual tours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Professional editing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Documentation</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Claims documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Adjuster-approved format</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Expert analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Claims support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need a property inspection, professional media, or insurance documentation, I'm ready to help you protect and showcase your investment.
          </p>
          <Button onClick={() => setLocation('/contact')} className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
            Get in Touch
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
