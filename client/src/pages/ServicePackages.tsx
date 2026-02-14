import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 614 Restore Service Packages Page
 * Detailed pricing and feature comparison for all service options
 */
export default function ServicePackages() {
  const [, setLocation] = useLocation();

  const packages = [
    {
      name: "Roof & Exterior Inspection",
      price: "$299",
      description: "Comprehensive inspection of roof, gutters, siding, and exterior elements",
      popular: false,
      features: [
        "Complete roof condition assessment",
        "Gutter and downspout inspection",
        "Siding and exterior materials review",
        "Foundation and grading evaluation",
        "Exterior inspection documentation",
        "Drone photography included",
        "Full rights to media",
        "High-resolution photos included",
        "Email delivery within 24 hours"
      ],
      notIncluded: [
        "Interior inspection",
        "Thermal imaging",
        "Video walkthrough"
      ],
      cta: "Schedule Inspection"
    },
    {
      name: "Professional Listing Media",
      price: "$399",
      description: "Premium drone photography and videography for real estate listings",
      popular: true,
      features: [
        "4K drone photography (20+ photos)",
        "Professional drone video (2-3 minutes)",
        "360° property coverage",
        "Aerial walkthrough video",
        "High-resolution still photos",
        "Professional editing included",
        "Delivered within 48 hours",
        "Full rights to all photos and videos"
      ],
      notIncluded: [
        "Written inspection report",
        "Thermal imaging",
        "Interior virtual tour"
      ],
      cta: "Book Media Session"
    },
    {
      name: "Property Evaluation Report",
      price: "$499",
      description: "For agents and homeowners: Complete professional evaluation showing full transparency. Buyers get confidence knowing nothing is hidden.",
      popular: false,
      features: [
        "Complete property analysis and evaluation",
        "Detailed professional written report",
        "Exterior inspection documentation",
        "Interior inspection documentation",
        "100+ high-resolution documentation photos",
        "Photo evidence of all findings",
        "Drone aerial photography included",
        "Professional video walkthrough",
        "Professionally formatted for distribution",
        "Email delivery within 24 hours",
        "Full rights to all photos and videos"
      ],
      notIncluded: [],
      cta: "Request Evaluation"
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
            <button onClick={() => setLocation('/service-packages')} className="text-sm font-medium text-red-600">Packages</button>
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
          <h1 className="text-5xl font-bold mb-4">Service Packages</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Choose the perfect package for your property inspection and media needs. All packages include professional service and detailed documentation.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <Card 
                key={idx} 
                className={`overflow-hidden flex flex-col ${pkg.popular ? 'ring-2 ring-red-600 md:scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-red-600 text-white py-2 text-center font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{pkg.description}</p>
                  
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-red-600 mb-2">{pkg.price}</div>
                    <p className="text-gray-600 text-sm">One-time service fee</p>
                  </div>

                  <Button 
                    onClick={() => setLocation('/contact')}
                    className={`w-full mb-8 ${pkg.popular ? 'bg-red-600 hover:bg-red-700' : 'border-red-600 text-red-600 hover:bg-red-50'}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.cta}
                  </Button>

                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Not Included:</h4>
                        <ul className="space-y-2">
                          {pkg.notIncluded.map((item, nidx) => (
                            <li key={nidx} className="text-gray-500 text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Feature Comparison</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Roof & Exterior */}
            <Card className="overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Roof & Exterior</h3>
                <p className="text-red-600 font-bold text-2xl mb-8">$299</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Written Inspection Report</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Drone Photography</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-400 flex-shrink-0">—</span>
                    <span className="text-sm text-gray-500">Professional Video</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">High-Resolution Photos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Full Rights to Media</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Exterior Inspection Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-400 flex-shrink-0">—</span>
                    <span className="text-sm text-gray-500">Interior Inspection Documentation</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Professional Media */}
            <Card className="overflow-hidden ring-2 ring-red-600 md:scale-105">
              <div className="bg-red-600 text-white py-2 text-center font-semibold">Most Popular</div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Media</h3>
                <p className="text-red-600 font-bold text-2xl mb-8">$399</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-400 flex-shrink-0">—</span>
                    <span className="text-sm text-gray-500">Written Inspection Report</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Drone Photography</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Professional Video</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">High-Resolution Photos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Full Rights to Media</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-400 flex-shrink-0">—</span>
                    <span className="text-sm text-gray-500">Exterior Inspection Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 text-gray-400 flex-shrink-0">—</span>
                    <span className="text-sm text-gray-500">Interior Inspection Documentation</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Property Evaluation */}
            <Card className="overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Property Evaluation</h3>
                <p className="text-red-600 font-bold text-2xl mb-8">$499</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Written Inspection Report</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Drone Photography</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Professional Video</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">High-Resolution Photos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Full Rights to Media</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Exterior Inspection Documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Interior Inspection Documentation</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I customize a package?</h3>
              <p className="text-gray-700">Absolutely! If you need a combination of services or have specific requirements, contact us and we'll create a custom package tailored to your needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly can you schedule an inspection?</h3>
              <p className="text-gray-700">We typically have availability within 3-5 business days. For urgent requests, please call us directly at (614) 741-1771 to discuss expedited scheduling.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What if I'm not satisfied with the service?</h3>
              <p className="text-gray-700">Your satisfaction is our priority. If you have any concerns, contact us within 48 hours of service delivery and we'll address them promptly.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer discounts for multiple services?</h3>
              <p className="text-gray-700">Yes! When booking multiple services or if you're a real estate agent with regular referrals, we offer package discounts. Contact us for details.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What areas do you service?</h3>
              <p className="text-gray-700">We primarily serve the Columbus, Ohio area and surrounding regions. Contact us to confirm service availability for your property location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose your package and schedule your inspection or media session today. We'll handle the rest.
          </p>
          <Button 
            onClick={() => setLocation('/contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
          >
            Schedule Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/services')} className="hover:text-white">Inspections</button></li>
                <li><button onClick={() => setLocation('/service-packages')} className="hover:text-white">Service Packages</button></li>
                <li><button onClick={() => setLocation('/portfolio')} className="hover:text-white">Portfolio</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setLocation('/about')} className="hover:text-white">About Jeff</button></li>
                <li><button onClick={() => setLocation('/contact')} className="hover:text-white">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-sm mb-2">Phone: <a href="tel:614-741-1771" className="text-red-400 hover:text-red-300">(614) 741-1771</a></p>
              <p className="text-sm">Email: <a href="mailto:jeffrey@614restore.com" className="text-red-400 hover:text-red-300">jeffrey@614restore.com</a></p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2024 614 Restore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
