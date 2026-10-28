"use client";


import { whatsappLink } from "@/lib/site";
import { trackLead } from "@/lib/analytics";
import { emailLead } from "@/lib/lead-client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Users,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import FormStatusModal from "@/components/common/FormStatusModal";

type ModalState = {
  isOpen: boolean;
  type: "success" | "error";
  title: string;
  message: string;
};

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  // Form ko completely remount/reset karne ke liye
  const [formKey, setFormKey] = useState(0);

  // const handleSubmit = async (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();

  //   // FormData async request se pehle immediately create karo
  //   const formData = new FormData(e.currentTarget);

  //   const data = {
  //     name: String(formData.get("name") || "").trim(),
  //     email: String(formData.get("email") || "").trim(),
  //     phone: String(formData.get("phone") || "").trim(),

  //     contactMethod: String(
  //       formData.get("contactMethod") || ""
  //     ).trim(),

  //     destination: String(
  //       formData.get("destination") || ""
  //     ).trim(),

  //     travelDate: String(
  //       formData.get("travelDate") || ""
  //     ).trim(),

  //     travellers: String(
  //       formData.get("travellers") || ""
  //     ).trim(),

  //     journeyType: String(
  //       formData.get("journeyType") || ""
  //     ).trim(),

  //     message: String(
  //       formData.get("message") || ""
  //     ).trim(),
  //   };

  //   // Basic validation
  //   if (!data.name || !data.email || !data.phone) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Missing Information",
  //       message:
  //         "Please provide your name, email address and phone number.",
  //     });

  //     return;
  //   }

  //   if (!data.destination) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Destination Required",
  //       message:
  //         "Please tell us where you would like to travel.",
  //     });

  //     return;
  //   }

  //   if (!data.travelDate) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Travel Date Required",
  //       message:
  //         "Please select your preferred travel date.",
  //     });

  //     return;
  //   }

  //   if (!data.travellers) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Traveller Information Required",
  //       message:
  //         "Please enter the number of pilgrims travelling.",
  //     });

  //     return;
  //   }

  //   if (!data.contactMethod) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Contact Method Required",
  //       message:
  //         "Please select your preferred contact method.",
  //     });

  //     return;
  //   }

  //   if (!data.journeyType) {
  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Package Type Required",
  //       message:
  //         "Please select the type of package you are interested in.",
  //     });

  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/api/travel-quote",
  //       {
  //         method: "POST",

  //         headers: {
  //           "Content-Type": "application/json",
  //         },

  //         body: JSON.stringify(data),
  //       }
  //     );

  //     const result = await response.json().catch(() => ({
  //       success: false,
  //       message: "Unable to process server response.",
  //     }));

  //     if (!response.ok) {
  //       throw new Error(
  //         result.message ||
  //           "Unable to submit your quote request."
  //       );
  //     }

  //     // IMPORTANT:
  //     // Native form.reset() use nahi karenge
  //     // Form ko remount karenge
  //     setFormKey((previous) => previous + 1);

  //     setModal({
  //       isOpen: true,
  //       type: "success",
  //       title: "Quote Request Received!",
  //       message:
  //         "Thank you for sharing your travel requirements. Our travel specialists will review your details and get back to you shortly with a personalised quotation.",
  //     });
  //   } catch (error) {
  //     console.error("Travel Quote Error:", error);

  //     setModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Unable To Send Request",
  //       message:
  //         error instanceof Error
  //           ? error.message
  //           : "Something went wrong. Please try again.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };



  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = {
    name: String(formData.get("name") || "").trim(),

    email: String(formData.get("email") || "").trim(),

    phone: String(formData.get("phone") || "").trim(),

    contactMethod: String(
      formData.get("contactMethod") || ""
    ).trim(),

    destination: String(
      formData.get("destination") || ""
    ).trim(),

    travelDate: String(
      formData.get("travelDate") || ""
    ).trim(),

    travellers: String(
      formData.get("travellers") || ""
    ).trim(),

    journeyType: String(
      formData.get("journeyType") || ""
    ).trim(),

    message: String(
      formData.get("message") || ""
    ).trim(),
  };

  /* =====================================================
      VALIDATION
  ===================================================== */

  if (!data.name || !data.email || !data.phone) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Missing Information",
      message:
        "Please provide your name, email address and phone number.",
    });

    return;
  }

  if (!data.destination) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Departure City Required",
          message:
            "Please tell us which city you would like to fly from.",
    });

    return;
  }

  if (!data.travelDate) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Travel Date Required",
      message:
        "Please select your preferred travel date.",
    });

    return;
  }

  if (!data.travellers) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Traveller Information Required",
      message:
        "Please enter the number of travellers.",
    });

    return;
  }

  if (!data.contactMethod) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Contact Method Required",
      message:
        "Please select your preferred contact method.",
    });

    return;
  }

  if (!data.journeyType) {
    setModal({
      isOpen: true,
      type: "error",
      title: "Journey Type Required",
      message:
        "Please select the type of journey you are planning.",
    });

    return;
  }

  /* =====================================================
      SUBMIT STATE
  ===================================================== */

  setIsSubmitting(true);

  try {
    /* =====================================================
        WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage = `
🕋 *NEW UMRAH / HAJ QUOTE REQUEST*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${data.name}

Email: ${data.email}

Phone: ${data.phone}

Preferred Contact: ${data.contactMethod}

━━━━━━━━━━━━━━━━━━

✈️ *PILGRIMAGE DETAILS*

📍 Departure City: ${data.destination}

📅 Travel Date: ${data.travelDate}

👥 Pilgrims: ${data.travellers}

🧭 Package Type: ${data.journeyType}

━━━━━━━━━━━━━━━━━━

💬 *ADDITIONAL MESSAGE*

${data.message || "No additional message provided."}

━━━━━━━━━━━━━━━━━━

🌟 *Ayesha Tours*
*New Website Enquiry*
    `.trim();

    const whatsappURL = whatsappLink(whatsappMessage);

    /* =====================================================
        OPEN WHATSAPP
    ===================================================== */

    trackLead("travel_quote");
    emailLead("travel_quote", data);

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    /* =====================================================
        RESET FORM
    ===================================================== */

    setFormKey((previous) => previous + 1);

    /* =====================================================
        SUCCESS MODAL
    ===================================================== */

    setModal({
      isOpen: true,
      type: "success",
      title: "Request Ready In WhatsApp",
          message:
            "WhatsApp has been opened with your quote request filled in. Please press send in WhatsApp to deliver it to our team – it has not been sent until you do.",
    });

  } catch (error) {
    console.error("Travel Quote Error:", error);

    setModal({
      isOpen: true,
      type: "error",
      title: "Unable To Continue",
      message:
        "Something went wrong while preparing your WhatsApp request. Please try again.",
    });

  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <>
      <div className="relative overflow-visible rounded-[28px] border border-[#e2d7dd] bg-[#fffdfe] shadow-[0_30px_100px_rgba(63,17,82,0.12)]">
        {/* Top Accent */}
        <div className="h-[4px] w-full rounded-t-[28px] bg-gradient-to-r from-[#3f1152] via-[#e40e83] to-[#3f1152]" />

        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full border border-[#e40e83]/15" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-[#4e1367]/[0.025] blur-3xl" />

        <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-14">
          {/* HEADER */}

          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#e40e83]" />

              <div className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-[#e40e83]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#4e1367]">
                  Umrah & Haj Quote
                </span>
              </div>
            </div>

            <h2 className="mt-5 font-serif text-[32px] font-bold leading-[1.15] text-[#3f1152] sm:text-[40px] lg:text-[46px]">
              Tell Us About Your

              <span className="block italic text-[#e40e83]">
                Pilgrimage.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#7b6f80] sm:text-[15px]">
              Share your plans with us and our team will prepare
              a quotation with hotel options, inclusions and
              timings for your group.
            </p>
          </div>

          {/* FORM */}

          <form
            key={formKey}
            method="post"
            onSubmit={handleSubmit}
            className="mt-10 space-y-12 lg:mt-12"
          >
            {/* YOUR DETAILS */}

            <FormSection
              number="01"
              title="Your Details"
              subtitle="Let us know how we can get in touch with you."
            >
              <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
                <PremiumInput
                  icon={<User size={17} />}
                  label="Full Name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />

                <PremiumInput
                  icon={<Mail size={17} />}
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

                <PremiumInput
                  icon={<Phone size={17} />}
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

                <PremiumSelect
                  label="Preferred Contact Method"
                  name="contactMethod"
                  placeholder="Select preferred contact method"
                  required
                  options={[
                    "Email",
                    "Phone Call",
                    "WhatsApp",
                  ]}
                />
              </div>
            </FormSection>

            {/* TRAVEL DETAILS */}

            <FormSection
              number="02"
              title="Your Pilgrimage"
              subtitle="Tell us about the Umrah or Haj journey you are planning."
            >
              <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
                <PremiumInput
                  icon={<MapPin size={17} />}
                  label="Departure City"
                  name="destination"
                  placeholder="Which city will you fly from?"
                  required
                />

                <PremiumDateInput required />

                <PremiumInput
                  icon={<Users size={17} />}
                  label="Number of Pilgrims"
                  name="travellers"
                  type="number"
                  placeholder="Adults and children"
                  min="1"
                  required
                />

                <PremiumSelect
                  label="Package Type"
                  name="journeyType"
                  placeholder="Select a package type"
                  required
                  options={[
                    "Economy Umrah",
                    "Standard Umrah",
                    "Premium Umrah",
                    "Family Umrah",
                    "Ramadan Umrah",
                    "Group Umrah",
                    "Haj",
                    "Transport / Ziyarat Only",
                  ]}
                />
              </div>
            </FormSection>

            {/* REQUIREMENTS */}

            <FormSection
              number="03"
              title="Your Requirements"
              subtitle="Anything that will help us plan your pilgrimage properly."
            >
              <div>
                <label className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.6px] text-[#6e6272]">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4e1367]/10 text-[#4e1367]">
                    <MessageSquare size={14} />
                  </span>

                  Additional Details
                </label>

                <div className="group relative">
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="E.g. nights in Makkah vs Madinah, hotel distance from the Haram, room sharing, wheelchair needs, ziyarat, or anything else we should know..."
                    className="w-full resize-none rounded-[16px] border border-[#dad2d6] bg-[#fbf9fa] px-5 py-4 text-[14px] leading-7 text-[#5d5163] outline-none transition-all duration-300 placeholder:text-[#a9a2ac] hover:border-[#cabdc4] focus:border-[#4e1367] focus:bg-white focus:shadow-[0_10px_30px_rgba(78,19,103,0.08)] sm:px-6 sm:py-5"
                  />

                  <div className="pointer-events-none absolute bottom-0 left-5 right-5 h-[2px] scale-x-0 bg-gradient-to-r from-[#4e1367] via-[#e40e83] to-[#4e1367] transition-transform duration-500 group-focus-within:scale-x-100 sm:left-6 sm:right-6" />
                </div>
              </div>
            </FormSection>

            {/* SUBMIT AREA */}

            <div className="relative overflow-hidden rounded-[20px] border border-[#e3dfe5] bg-[#f6f8f7] p-6 sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-[#4e1367]/[0.035] to-transparent" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#e40e83]"
                    />

                    <h3 className="font-serif text-[20px] font-bold text-[#3f1152]">
                      Ready To Plan Your Pilgrimage?
                    </h3>
                  </div>

                  <p className="mt-3 text-[13px] leading-6 text-[#7c7181] sm:text-sm">
                    Your request opens in WhatsApp so you can send
                    it to our team, who will reply with a
                    quotation.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex min-h-[56px] w-full items-center justify-center gap-4 overflow-hidden bg-[#4e1367] px-8 text-[10px] font-bold uppercase tracking-[1.8px] text-white shadow-[0_15px_35px_rgba(78,19,103,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3f1152] hover:shadow-[0_22px_45px_rgba(78,19,103,0.3)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[220px]"
                >
                  <span className="absolute inset-0 translate-x-[-110%] bg-[#e40e83] transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting
                      ? "Submitting..."
                      : "Request My Quote"}

                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </button>
              </div>
            </div>

            {/* Privacy */}

            <div className="flex items-center justify-center gap-2 px-2 text-center text-[10px] leading-5 text-[#9a929d] sm:text-[11px]">
              <CheckCircle2
                size={14}
                className="shrink-0 text-[#e40e83]"
              />

              Your information is kept private and used only to
              respond to your pilgrimage enquiry.
            </div>
          </form>
        </div>
      </div>

      {/* COMMON PREMIUM MODAL */}

      <FormStatusModal
        isOpen={modal.isOpen}
        type={modal.type}
        title={modal.title}
        message={modal.message}
        onClose={() =>
          setModal((previous) => ({
            ...previous,
            isOpen: false,
          }))
        }
      />
    </>
  );
}

/* =====================================================
   FORM SECTION
===================================================== */

function FormSection({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <div className="mb-6 flex items-start gap-4 sm:mb-7">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e40e83]/30 bg-[#fcf3f8] font-serif text-[13px] font-bold text-[#e40e83] sm:h-11 sm:w-11 sm:text-sm">
          {number}
        </div>

        <div className="pt-0.5">
          <h3 className="font-serif text-[21px] font-bold text-[#3f1152] sm:text-[22px]">
            {title}
          </h3>

          <p className="mt-1 text-[12px] leading-5 text-[#928996] sm:text-[13px] sm:leading-6">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mb-6 h-px w-full bg-gradient-to-r from-[#dad2d6] via-[#dad2d6]/60 to-transparent sm:mb-7" />

      {children}
    </section>
  );
}

/* =====================================================
   PREMIUM INPUT
===================================================== */

function PremiumInput({
  icon,
  label,
  ...props
}: {
  icon?: ReactNode;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div className="group">
      <label className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#6e6272]">
        {icon && (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4e1367]/8 text-[#4e1367] transition-colors duration-300 group-focus-within:bg-[#4e1367] group-focus-within:text-white">
            {icon}
          </span>
        )}

        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          className="h-[56px] w-full rounded-[14px] border border-[#dad2d6] bg-[#fbf9fa] px-5 text-[14px] text-[#5d5163] outline-none transition-all duration-300 placeholder:text-[#a9a2ac] hover:border-[#cabdc4] focus:border-[#4e1367] focus:bg-white focus:shadow-[0_10px_28px_rgba(78,19,103,0.08)]"
        />

        <span className="pointer-events-none absolute bottom-0 left-[18px] right-[18px] h-[2px] scale-x-0 bg-gradient-to-r from-[#4e1367] via-[#e40e83] to-[#4e1367] transition-transform duration-500 group-focus-within:scale-x-100" />
      </div>
    </div>
  );
}

/* =====================================================
   PREMIUM SELECT
===================================================== */

function PremiumSelect({
  label,
  name,
  options,
  placeholder = "Select an option",
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder?: string;
  required?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div ref={selectRef} className="group relative z-20">
      <label className="mb-2.5 block text-[10px] font-bold uppercase tracking-[1.5px] text-[#6e6272]">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className={`relative flex h-[56px] w-full items-center justify-between rounded-[14px] border px-5 text-left transition-all duration-300 ${
          isOpen
            ? "border-[#4e1367] bg-white shadow-[0_10px_28px_rgba(78,19,103,0.10)]"
            : "border-[#dad2d6] bg-[#fbf9fa] hover:border-[#cabdc4]"
        }`}
      >
        <span
          className={`text-[14px] ${
            selectedValue
              ? "text-[#5d5163]"
              : "text-[#a9a2ac]"
          }`}
        >
          {selectedValue || placeholder}
        </span>

        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#4e1367] text-white"
              : "bg-[#4e1367]/8 text-[#4e1367]"
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <input
        type="hidden"
        name={name}
        value={selectedValue}
        required={required}
      />

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+10px)] z-[80] w-full overflow-hidden rounded-[18px] border border-[#e0d5db] bg-[#fffdfe] p-2 shadow-[0_25px_70px_rgba(63,17,82,0.18)]">
          <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#3f1152] via-[#e40e83] to-[#3f1152]" />

          <div className="px-3 pb-2 pt-3">
            <span className="text-[9px] font-bold uppercase tracking-[1.8px] text-[#a19aa4]">
              Choose an option
            </span>
          </div>

          <div className="max-h-[250px] space-y-1 overflow-y-auto px-1 pb-1">
            {options.map((option, index) => {
              const isSelected =
                selectedValue === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelectedValue(option);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[12px] px-3.5 py-3 text-left text-[13px] transition-all duration-200 ${
                    isSelected
                      ? "bg-[#4e1367] text-white shadow-[0_8px_20px_rgba(78,19,103,0.18)]"
                      : "text-[#5d5163] hover:bg-[#f4f6f5] hover:text-[#4e1367]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
                        isSelected
                          ? "bg-white/15 text-[#fb1895]"
                          : "bg-[#4e1367]/7 text-[#4e1367]/60"
                      }`}
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span className="font-medium">
                      {option}
                    </span>
                  </div>

                  {isSelected && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e40e83] text-white">
                      <CheckCircle2 size={14} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* =====================================================
   PREMIUM DATE INPUT
===================================================== */

function PremiumDateInput({
  required = false,
}: {
  required?: boolean;
}) {
  const [selectedDate, setSelectedDate] =
    useState<Date | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();

    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
  });

  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  const previousMonth = () => {
    const today = new Date();

    const previous = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );

    const minimumMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (previous >= minimumMonth) {
      setCurrentMonth(previous);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const today = new Date();

  const days = Array.from(
    {
      length: firstDay + daysInMonth,
    },
    (_, index) => {
      if (index < firstDay) return null;

      return index - firstDay + 1;
    }
  );

  const isSameDay = (
    date1: Date | null,
    date2: Date
  ) => {
    if (!date1) return false;

    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (date: Date) => {
    const compareDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const todayDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    return compareDate < todayDate;
  };

  const formattedValue = selectedDate
    ? `${selectedDate.getFullYear()}-${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}-${String(
        selectedDate.getDate()
      ).padStart(2, "0")}`
    : "";

  return (
    <div ref={calendarRef} className="group relative z-30">
      <label className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#6e6272]">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#e40e83] text-white"
              : "bg-[#e40e83]/10 text-[#b30765]"
          }`}
        >
          <CalendarDays size={15} />
        </span>

        Preferred Travel Date
      </label>

      <button
        type="button"
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
        className={`relative flex h-[56px] w-full items-center justify-between rounded-[14px] border px-5 text-left transition-all duration-300 ${
          isOpen
            ? "border-[#4e1367] bg-white shadow-[0_10px_28px_rgba(78,19,103,0.10)]"
            : "border-[#dad2d6] bg-[#fbf9fa] hover:border-[#cabdc4]"
        }`}
      >
        <span
          className={`text-[14px] ${
            selectedDate
              ? "text-[#5d5163]"
              : "text-[#a9a2ac]"
          }`}
        >
          {selectedDate
            ? formatDate(selectedDate)
            : "Select your preferred date"}
        </span>

        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            isOpen
              ? "bg-[#4e1367] text-white"
              : "bg-[#4e1367]/8 text-[#4e1367]"
          }`}
        >
          <CalendarDays size={16} />
        </span>
      </button>

      <input
        type="hidden"
        name="travelDate"
        value={formattedValue}
        required={required}
      />

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-[100] w-full min-w-[310px] overflow-hidden rounded-[22px] border border-[#e0d5db] bg-[#fffdfe] p-4 shadow-[0_30px_80px_rgba(63,17,82,0.20)] sm:min-w-[350px] sm:p-5">
          <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#3f1152] via-[#e40e83] to-[#3f1152]" />

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={previousMonth}
              disabled={
                currentMonth.getFullYear() ===
                  today.getFullYear() &&
                currentMonth.getMonth() ===
                  today.getMonth()
              }
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dad2d6] bg-[#f9f6f8] text-[#4e1367] transition-all hover:border-[#4e1367] hover:bg-[#4e1367] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="text-center">
              <h4 className="font-serif text-lg font-bold text-[#3f1152] sm:text-xl">
                {currentMonth.toLocaleString(
                  "default",
                  {
                    month: "long",
                  }
                )}
              </h4>

              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[1.8px] text-[#e40e83]">
                {year}
              </span>
            </div>

            <button
              type="button"
              onClick={nextMonth}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dad2d6] bg-[#f9f6f8] text-[#4e1367] transition-all hover:border-[#4e1367] hover:bg-[#4e1367] hover:text-white"
            >
              <ChevronRight size={17} />
            </button>
          </div>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-[#e40e83]/40 to-transparent" />

          <div className="grid grid-cols-7 gap-1 text-center">
            {[
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ].map((day) => (
              <div
                key={day}
                className="pb-2 text-[8px] font-bold uppercase tracking-[1px] text-[#a19aa4]"
              >
                {day}
              </div>
            ))}

            {days.map((day, index) => {
              if (!day) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="aspect-square"
                  />
                );
              }

              const date = new Date(
                year,
                month,
                day
              );

              const selected = isSameDay(
                selectedDate,
                date
              );

              const currentDay = isToday(date);

              const past = isPastDate(date);

              return (
                <button
                  key={day}
                  type="button"
                  disabled={past}
                  onClick={() => {
                    setSelectedDate(date);
                    setIsOpen(false);
                  }}
                  className={`relative flex aspect-square items-center justify-center rounded-full text-[11px] font-semibold transition-all duration-200 ${
                    selected
                      ? "scale-105 bg-[#4e1367] text-white shadow-[0_8px_20px_rgba(78,19,103,0.30)]"
                      : currentDay
                      ? "border border-[#e40e83] bg-[#fcf3f8] text-[#b30765]"
                      : past
                      ? "cursor-not-allowed text-[#d0d3d2]"
                      : "text-[#5d5163] hover:bg-[#4e1367]/10 hover:text-[#4e1367]"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#e8e1e5] pt-3">
            <button
              type="button"
              onClick={() => {
                const now = new Date();

                setCurrentMonth(
                  new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    1
                  )
                );

                setSelectedDate(now);
                setIsOpen(false);
              }}
              className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#4e1367] transition hover:text-[#e40e83]"
            >
              Select Today
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedDate(null);
              }}
              className="text-[9px] font-bold uppercase tracking-[1.3px] text-[#a19aa4] transition hover:text-[#b61d50]"
            >
              Clear Date
            </button>
          </div>
        </div>
      )}
    </div>
  );
}