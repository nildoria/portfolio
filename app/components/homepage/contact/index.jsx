// @flow strict
import { personalData } from "@/utils/data/personal-data";
import SectionHeader from "../../helper/section-header";
import ContactForm from "./contact-form";

const DETAILS = [
  { label: "Email", value: personalData.email },
  { label: "Phone", value: personalData.phone },
  { label: "Location", value: personalData.address },
];

function ContactSection() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-page">
        <SectionHeader index="06" label="Contact" title="Get in touch" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactForm />

          <dl className="space-y-6">
            {DETAILS.filter((d) => d.value).map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-[0.12em] text-low">
                  {label}
                </dt>
                <dd className="mt-1 text-[0.9375rem] text-mid">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
