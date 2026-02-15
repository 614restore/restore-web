import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, X } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 614 Restore Service Packages Page
 * Custom Choice Suite - Inspection Foundation meets Marketing Power
 * Designed for agents who want to clear the home structurally while making it stand out digitally
 */
export default function ServicePackages() {
  const [, setLocation] = useLocation();

  const packages = [
    {
      name: "The Foundation Report",
      price: "$395",
      description: "Inspection only with written analysis and key inspection photos",
      popular: false,
      features: [
        "Roof & Exterior Integrity Audit",
        "The Seller's Transparency Report (PDF)",
        "Realtor Speed-Dial Support",
        "High-Resolution Inspection Photos",
        "Email Delivery within 24 Hours",
        "Deal-Killer Issues Identified",
      ],
      notIncluded: [
        "Media Assets",
        "Drone Photography",
        "3D Virtual Tour",
        "Professional Video",
      ],
      cta: "Schedule Inspection"
    },
    {
      name: "The Custom Choice Suite",
      price: "$595",
      description: "Inspection + Choose ANY 3 Media Assets from our menu",
      popular: true,
      features: [
        "Roof & Exterior Integrity Audit",
        "The Seller's Transparency Report (PDF)",
        "Realtor Speed-Dial Support",
        "Choose ANY 3 Media Assets",
        "3D Dollhouse Walkthrough (Matterport)",
        "Professional 2D Floor Plan",
        "Aerial Drone Photography (5-8 shots)",
        "Cinematic Drone Highlight (30-45 sec)",
        "Interior High-Light Stills (10 photos)",
        "Virtual Twilight Conversion",
        "Professional Editing Included",
        "Full Rights to All Media",
      ],
      notIncluded: [
        "All Media Assets (only 3 chosen)",
        "Social Media Kit",
        "Branded Property Webpage",
      ],
      cta: "Build Your Suite"
    },
    {
      name: "The Gold Standard",
      price: "$995",
      description: "Inspection + ALL Media + Cinematic Edit + Social Media Kit",
      popular: false,
      features: [
        "Roof & Exterior Integrity Audit",
        "The Seller's Transparency Report (PDF)",
        "Realtor Speed-Dial Support",
        "ALL Media Assets Included",
        "3D Dollhouse Walkthrough (Matterport)",
        "Professional 2D Floor Plan",
        "Aerial Drone Photography (5-8 shots)",
        "Cinematic Drone Highlight (30-45 sec)",
        "Interior High-Light Stills (10 photos)",
        "Virtual Twilight Conversion",
        "Professional Cinematic Edit",
        "Social Media Kit (Reels, Stories, Posts)",
        "Branded Property Webpage",
        "Interactive Floor Plan Upgrade",
        "Full Rights to All Media",
        "Next-Day Rush Delivery Available",
      ],
      notIncluded: [],
      cta: "Get The Gold Standard"
    },
  ];

  const comparisonRows = [
    {
      label: "Roof & Exterior Integrity Audit",
      availability: [true, true, true],
    },
    {
      label: "Seller's Transparency Report",
      availability: [true, true, true],
    },
    {
      label: "Realtor Speed-Dial Support",
      availability: [true, true, true],
    },
    {
      label: "3D Dollhouse Walkthrough",
      availability: [false, true, true],
    },
    {
      label: "Professional 2D Floor Plan",
      availability: [false, true, true],
    },
    {
      label: "Aerial Drone Photography",
      availability: [false, true, true],
    },
    {
      label: "Cinematic Drone Highlight",
      availability: [false, true, true],
    },
    {
      label: "Interior High-Light Stills",
      availability: [false, true, true],
    },
    {
      label: "Virtual Twilight Conversion",
      availability: [false, true, true],
    },
    {
      label: "Professional Cinematic Edit",
      availability: [false, false, true],
    },
    {
      label: "Social Media Kit",
      availability: [false, false, true],
    },
    {
      label: "Branded Property Webpage",
      availability: [false, false, true],
    },
  ];

  const addOns = [
    {
      name: "Extra Media Selection",
      price: "$75",
      description: "Add one additional asset from the media menu",
    },
    {
      name: "Next-Day Rush Delivery",
      price: "$95",
      description: "Guaranteed delivery by 10 AM next business day",
    },
    {
      name: "Interactive Floor Plan Upgrade",
      price: "$45",
      description: "Link 2D floor plan directly to 3D tour",
    },
    {
      name: "Branded Property Webpage",
      price: "$50",
      description: "Single-property website with all media and contact info",
    },
  ];

  const faqs = [
    {
      question: "What's included in the Roof & Exterior Integrity Audit?",
      answer:
        "A professional, unbiased assessment of the roof, siding, gutters, foundation, and exterior drainage. You'll receive a detailed PDF report identifying any 'deal-killer' issues before they hit the negotiating table.",
    },
    {
      question: "How do I choose my 3 media assets for The Custom Choice Suite?",
      answer:
        "You can select any 3 assets from our menu: 3D Dollhouse Walkthrough, Professional 2D Floor Plan, Aerial Drone Photography, Cinematic Drone Highlight, Interior High-Light Stills, or Virtual Twilight Conversion. Mix and match based on your property's unique needs.",
    },
    {
      question: "What's included in The Gold Standard?",
      answer:
        "Everything! All media assets, professional cinematic editing, a complete social media kit (Reels, Stories, Posts), branded property webpage, interactive floor plan upgrade, and our full inspection report. This is the ultimate package for maximum market impact.",
    },
    {
      question: "Can I add more media assets later?",
      answer:
        "Yes! You can add extra media selections for $75 each. We also offer next-day rush delivery for $95 if you need everything quickly.",
    },
    {
      question: "How quickly can you deliver?",
      answer:
        "Standard delivery is within 48 hours. We offer next-day rush delivery for $95 (guaranteed by 10 AM next business day). All inspection reports are delivered within 24 hours.",
    },
    {
      question: "Do I own the rights to all photos and videos?",
      answer:
        "Yes! All packages include full rights to all photos and videos. You can use them for MLS listings, social media, print marketing, and more.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold mb-4">Service Packages</h1>
          <p className="text-xl text-gray-300">
            The Ultimate Hybrid: Professional Inspection meets High-Impact Marketing
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        {/* Intro Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The Custom Choice Suite
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Designed for agents who want to clear the home structurally while making it stand out digitally. 
            Every package includes our professional inspection foundation, plus your choice of marketing assets.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, idx) => (
            <Card key={idx} className={`overflow-hidden flex flex-col ${pkg.popular ? "ring-2 ring-red-500 shadow-lg" : ""}`}>
              {pkg.popular && (
                <div className="bg-red-500 text-white py-2 px-4 text-center font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-red-600">{pkg.price}</span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  {pkg.features.length > 5 && (
                    <div className="text-gray-600 text-sm font-semibold pt-2">
                      + {pkg.features.length - 5} more features
                    </div>
                  )}
                </div>

                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => setLocation("/contact")}
                >
                  {pkg.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gray-700 text-white py-6 px-8 text-left font-bold text-lg border border-gray-700">
                    Feature
                  </th>
                  <th className="bg-gray-700 text-white py-6 px-8 text-center font-bold text-lg border border-gray-700">
                    Foundation Report<br />
                    <span className="text-red-400 font-bold text-base">$395</span>
                  </th>
                  <th className="bg-gray-700 text-white py-6 px-8 text-center font-bold text-lg border border-gray-700">
                    Custom Choice Suite<br />
                    <span className="text-red-400 font-bold text-base">$595</span>
                  </th>
                  <th className="bg-gray-700 text-white py-6 px-8 text-center font-bold text-lg border border-gray-700">
                    Gold Standard<br />
                    <span className="text-red-400 font-bold text-base">$995</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="border border-gray-300">
                    <td className="py-5 px-8 text-gray-900 font-medium bg-gray-50">
                      {row.label}
                    </td>
                    {row.availability.map((available, i) => (
                      <td key={i} className="text-center py-5 px-8 bg-white">
                        {available ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-Ons Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            À La Carte Add-Ons
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {addOns.map((addon, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{addon.name}</h3>
                  <span className="text-2xl font-bold text-red-600">{addon.price}</span>
                </div>
                <p className="text-gray-600">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your package and schedule your inspection or media session today.
          </p>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
            onClick={() => setLocation("/contact")}
          >
            Schedule Now
          </Button>
        </div>
      </div>
    </div>
  );
}
