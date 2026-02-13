import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 614 Restore Portfolio Page
 * Showcase of completed projects and drone media work
 */
export default function Portfolio() {
  const [, setLocation] = useLocation();

  const portfolioItems = [
    {
      title: "Luxury Home Listing",
      category: "Drone Photography",
      description: "4K aerial photography and video for premium residential property in Columbus"
    },
    {
      title: "Commercial Property Inspection",
      category: "Thermal Imaging",
      description: "Comprehensive thermal imaging inspection revealing hidden moisture issues"
    },
    {
      title: "Insurance Claim Documentation",
      category: "Documentation",
      description: "Professional damage assessment and claims-ready documentation"
    },
    {
      title: "Estate Property Media",
      category: "360° Tour",
      description: "Complete 360° virtual tour with professional photography"
    },
    {
      title: "Roof Damage Assessment",
      category: "Thermal Imaging",
      description: "Hail damage assessment using advanced thermal imaging technology"
    },
    {
      title: "Listing Media Package",
      category: "Video Production",
      description: "Full listing package with drone video, photography, and virtual staging"
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
            <button onClick={() => setLocation('/portfolio')} className="text-sm font-medium text-red-600">Portfolio</button>
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
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            See examples of our professional inspections, drone photography, and media work across Columbus.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-gray-700 font-semibold">{item.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-red-600 font-semibold mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <Button onClick={() => setLocation('/contact')} variant="outline" className="w-full">
                    Request Similar Work
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Drone Photo Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Drone Photography Showcase</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of aerial perspectives. Our drone photography reveals property details that ground-level photography simply cannot capture.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663159852010/RwKrTJRauxcdVpzD.JPG" 
              alt="Aerial drone photography of residential property" 
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">360°</div>
              <p className="text-gray-300">Complete property coverage from every angle</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">4K</div>
              <p className="text-gray-300">Ultra-high resolution aerial photography</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">FAA</div>
              <p className="text-gray-300">Licensed drone pilot with Part 107 certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-700">Properties Inspected</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">68%</div>
              <p className="text-gray-700">More Inquiries with Media</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">32%</div>
              <p className="text-gray-700">Faster Sales</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <p className="text-gray-700">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Deliver</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📷</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4K Drone Photography</h3>
              <p className="text-gray-700">Professional aerial photography showcasing properties from unique perspectives</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Video</h3>
              <p className="text-gray-700">Cinematic drone footage and edited videos that tell your property's story</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thermal Imaging</h3>
              <p className="text-gray-700">Advanced thermal imaging to detect moisture, damage, and structural issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Showcase Your Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Request a portfolio session and see how professional media can transform your listings.
          </p>
          <Button onClick={() => setLocation('/contact')} className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
            Request Portfolio Session
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
