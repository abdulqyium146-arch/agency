import type { Metadata } from "next";
import { getServices } from "@/app/actions/booking";
import BookingForm from "@/components/booking/BookingForm";
import { Calendar, Clock, Shield, Star } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Book a Free Consultation | SBMP",
  description: "Book a free strategy call with our digital marketing experts. Choose from SEO, Social Media, Google Ads, Website Development, Content Writing, and Email Marketing.",
};

const FALLBACK_SERVICES = [
  { id: "seo", name: "SEO", slug: "seo", description: "Local & national search engine optimisation", duration: 60, price: 499, active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: "social-media", name: "Social Media Marketing", slug: "social-media", description: "Strategic social media management", duration: 60, price: 299, active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: "google-ads", name: "Google Ads", slug: "google-ads", description: "PPC campaign management", duration: 60, price: 399, active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: "web-development", name: "Website Development", slug: "web-development", description: "Custom website design & development", duration: 90, price: 1499, active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: "content-writing", name: "Content Writing", slug: "content-writing", description: "SEO-optimised blog & web copy", duration: 60, price: 199, active: true, createdAt: new Date(), updatedAt: new Date() },
  { id: "email-marketing", name: "Email Marketing", slug: "email-marketing", description: "Email campaigns & automation", duration: 60, price: 249, active: true, createdAt: new Date(), updatedAt: new Date() },
];

export default async function BookPage() {
  const services = await getServices().catch(() => FALLBACK_SERVICES);

  return (
    <main className="min-h-screen bg-[#080D1A] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full px-4 py-1.5 mb-4">
            <Calendar className="h-4 w-4 text-[#4F8EF7]" />
            <span className="text-sm text-[#4F8EF7] font-medium">Free Consultation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4">
            Book Your Strategy Call
          </h1>
          <p className="text-lg text-[#8B9CB8] max-w-2xl mx-auto">
            Speak with a digital marketing expert. Get a tailored strategy for your business — no obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-[#E2E8F0] mb-6">Your Details</h2>
              <BookingForm services={services} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-[#E2E8F0] mb-4">What to Expect</h3>
              <ul className="space-y-3">
                {[
                  { icon: Clock, text: "60-minute strategy call" },
                  { icon: Star, text: "Tailored marketing roadmap" },
                  { icon: Shield, text: "No sales pressure" },
                  { icon: Calendar, text: "Flexible rescheduling" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-[#8B9CB8]">
                    <Icon className="h-4 w-4 text-[#4F8EF7] shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0D1627] border border-white/7 rounded-2xl p-6">
              <h3 className="text-base font-semibold text-[#E2E8F0] mb-3">Our Services</h3>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.id} className="flex justify-between items-center text-sm">
                    <span className="text-[#8B9CB8]">{s.name}</span>
                    <span className="text-[#4F8EF7] font-medium">from £{s.price.toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
