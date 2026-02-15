import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, MapPin, XCircle } from "lucide-react";
import { useLocation } from "wouter";

const ServicePackages = () => {
    const [, setLocation] = useLocation();

    const packages = [
        {
            title: "Roof & Exterior Inspection",
            description:
                "Comprehensive inspection of roof, gutters, siding, and exterior elements",
            price: "$299",
            cta: "Schedule Inspection",
            included: [
                "Complete roof condition assessment",
                "Gutter and downspout inspection",
                "Siding and exterior materials review",
                "Foundation and grading evaluation",
                "Detailed written report",
                "High-resolution photos included",
                "Email delivery within 24 hours",
            ],
            notIncluded: ["Drone photography", "Video walkthrough"],
        },
        {
            title: "Professional Listing Media",
            description:
                "Premium drone photography and videography for real estate listings",
            price: "$599",
            cta: "Book Media Session",
            popular: true,
            included: [
                "4K drone photography (20+ photos)",
                "Professional drone video (2-3 minutes)",
                "360deg property coverage",
                "Aerial walkthrough video",
                "High-resolution still photos",
                "Professional editing included",
                "Delivered within 48 hours",
                "Full rights to all photos and videos",
            ],
            notIncluded: ["Written inspection report", "Interior virtual tour"],
        },
        {
            title: "Property Evaluation Report",
            description:
                "Comprehensive property assessment with professional documentation for agents, buyers, and stakeholders",
            price: "$749",
            cta: "Request Evaluation",
            included: [
                "Complete property analysis and evaluation",
                "Detailed professional written report",
                "100+ high-resolution documentation photos",
                "Photo evidence of all findings",
                "Drone aerial photography included",
                "Professional video walkthrough",
                "Professionally formatted for distribution",
                "Email delivery within 24 hours",
                "Full rights to all photos and videos",
            ],
            notIncluded: ["Extended warranty"],
        },
    ];

    const comparisonRows = [
        {
            label: "Written Inspection Report",
            availability: [true, false, true],
        },
        {
            label: "Drone Photography",
            availability: [false, true, true],
        },
        {
            label: "Professional Video",
            availability: [false, true, true],
        },
        {
            label: "High-Resolution Photos",
            availability: [true, true, true],
        },
        {
            label: "Full Rights to Media",
            availability: [false, true, true],
        },
        {
            label: "Claims-Ready Documentation",
            availability: [true, false, true],
        },
    ];

    const faqs = [
        {
            question: "Can I customize a package?",
            answer:
                "Absolutely! If you need a combination of services or have specific requirements, contact us and we'll create a custom package tailored to your needs.",
        },
        {
            question: "How quickly can you schedule an inspection?",
            answer:
                "We typically have availability within 3-5 business days. For urgent requests, please call us directly at (614) 741-1771 to discuss expedited scheduling.",
        },
        {
            question: "What if I'm not satisfied with the service?",
            answer:
                "Your satisfaction is our priority. If you have any concerns, contact us within 48 hours of service delivery and we'll address them promptly.",
        },
        {
            question: "Do you offer discounts for multiple services?",
            answer:
                "Yes! When booking multiple services or if you're a real estate agent with regular referrals, we offer package discounts. Contact us for details.",
        },
        {
            question: "What areas do you service?",
            answer:
                "We primarily serve the Columbus, Ohio area and surrounding regions. Contact us to confirm service availability for your property location.",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="container flex items-center justify-between h-20">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setLocation("/")}
                    >
                        <img
                            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663237003970/qoISrKwFyQtwyBqN.jpg"
                            alt="614 Restore"
                            className="h-12 w-auto"
                        />
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => setLocation("/services")}
                            className="text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => setLocation("/service-packages")}
                            className="text-sm font-medium text-red-600"
                        >
                            Packages
                        </button>
                        <button
                            onClick={() => setLocation("/portfolio")}
                            className="text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => setLocation("/about")}
                            className="text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            About
                        </button>
                        <button
                            onClick={() => setLocation("/contact")}
                            className="text-sm font-medium text-gray-700 hover:text-gray-900"
                        >
                            Contact
                        </button>
                        <Button
                            onClick={() => setLocation("/contact")}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </nav>

            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
                <div className="container">
                    <button
                        onClick={() => setLocation("/")}
                        className="flex items-center gap-2 text-gray-300 hover:text-white mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </button>
                    <h1 className="text-5xl font-bold mb-4">Service Packages</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Choose the perfect package for your property inspection and media
                        needs. All packages include professional service and detailed
                        documentation.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container grid lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.title}
                            className={`p-8 border-2 ${
                                pkg.popular ? "border-red-600 shadow-xl" : "border-gray-200"
                            }`}
                        >
                            {pkg.popular && (
                                <div className="mb-4">
                                    <span className="inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {pkg.title}
                            </h3>
                            <p className="text-gray-600 mb-6">{pkg.description}</p>
                            <div className="text-4xl font-bold text-gray-900 mb-1">
                                {pkg.price}
                            </div>
                            <p className="text-sm text-gray-500 mb-6">One-time service fee</p>
                            <Button
                                onClick={() => setLocation("/contact")}
                                className={`w-full ${
                                    pkg.popular
                                        ? "bg-red-600 hover:bg-red-700"
                                        : "bg-slate-900 hover:bg-slate-800"
                                }`}
                            >
                                {pkg.cta}
                            </Button>
                            <div className="mt-8">
                                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                    What&apos;s Included:
                                </h4>
                                <ul className="space-y-3">
                                    {pkg.included.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {pkg.notIncluded.length > 0 && (
                                <div className="mt-6">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                        Not Included:
                                    </h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {pkg.notIncluded.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="container">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Feature Comparison
                    </h2>
                    <div className="overflow-x-auto">
                        <div className="min-w-[720px] rounded-2xl border border-gray-200 bg-white">
                            <div className="grid grid-cols-[2fr_repeat(3,1fr)] border-b border-gray-200 bg-gray-50 text-sm font-semibold text-gray-700">
                                <div className="px-6 py-4">Feature</div>
                                <div className="px-6 py-4 text-center">Inspection</div>
                                <div className="px-6 py-4 text-center">Listing Media</div>
                                <div className="px-6 py-4 text-center">Evaluation</div>
                            </div>
                            {comparisonRows.map((row) => (
                                <div
                                    key={row.label}
                                    className="grid grid-cols-[2fr_repeat(3,1fr)] border-b border-gray-100 text-sm"
                                >
                                    <div className="px-6 py-4 text-gray-700">{row.label}</div>
                                    {row.availability.map((available, index) => (
                                        <div
                                            key={`${row.label}-${index}`}
                                            className="px-6 py-4 flex items-center justify-center"
                                        >
                                            {available ? (
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            ) : (
                                                <XCircle className="w-5 h-5 text-red-500" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className="grid grid-cols-[2fr_repeat(3,1fr)] bg-gray-50 text-sm font-semibold text-gray-900">
                                <div className="px-6 py-4">Price</div>
                                <div className="px-6 py-4 text-center">$299</div>
                                <div className="px-6 py-4 text-center">$599</div>
                                <div className="px-6 py-4 text-center">$749</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {faqs.map((faq) => (
                            <Card key={faq.question} className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-700">{faq.answer}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-red-600 text-white py-16">
                <div className="container text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Choose your package and schedule your inspection or media session
                        today. We&apos;ll handle the rest.
                    </p>
                    <Button
                        onClick={() => setLocation("/contact")}
                        className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6"
                    >
                        Schedule Now
                    </Button>
                </div>
            </section>

            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <img
                                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663237003970/qoISrKwFyQtwyBqN.jpg"
                                alt="614 Restore"
                                className="h-10 w-auto mb-4"
                            />
                            <p className="text-sm">
                                Professional property inspections & drone media solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button
                                        onClick={() => setLocation("/services")}
                                        className="hover:text-white"
                                    >
                                        Inspections
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setLocation("/service-packages")}
                                        className="hover:text-white"
                                    >
                                        Service Packages
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setLocation("/portfolio")}
                                        className="hover:text-white"
                                    >
                                        Portfolio
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button
                                        onClick={() => setLocation("/about")}
                                        className="hover:text-white"
                                    >
                                        About Jeff
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setLocation("/contact")}
                                        className="hover:text-white"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="tel:+16147411771" className="hover:text-white">
                                        (614) 741-1771
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:jeffrey@614restore.com"
                                        className="hover:text-white"
                                    >
                                        jeffrey@614restore.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" /> Columbus, Ohio
                                </li>
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
};

export default ServicePackages;