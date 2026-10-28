"use client";


import { whatsappLink } from "@/lib/site";
import { trackLead } from "@/lib/analytics";
import { emailLead } from "@/lib/lead-client";
import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbarforenquirypage";
import Footer from "@/components/Footer";
import FormStatusModal from "@/components/common/FormStatusModal";
import {
  Loader2,
  ArrowUpRight,
} from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Bed,
  CalendarDays,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Infinity,
  Luggage,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plane,
  Plus,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  UserRoundPlus,
  Users,
  FileCheck2,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type TravelerType = "solo" | "couple" | "family" | "group";

type Member = {
  id: string;
  name: string;
  age: string;
};

type ContactData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

/* =========================================================
   DATA
========================================================= */

const destinations = [
  {
  title: "Umrah – Makkah & Madinah",
  subtitle: "Economy, standard or premium Umrah...",
  image: "/images/demo/kaaba-tawaf.jpg",
},
{
  title: "Ramadan Umrah",
  subtitle: "Part of Ramadan or the last ten nights...",
  image: "/images/demo/haram-aerial.jpg",
},
{
  title: "Haj",
  subtitle: "Guidance for the journey of a lifetime...",
  image: "/images/demo/arafat.jpg",
},
{
  title: "Umrah + Extended Ziyarat",
  subtitle: "More time for Madinah, Taif & historic sites...",
  image: "/images/demo/quba.jpg",
},
];

const services = [
  {
    title: "Ziyarat Tours",
    description:
      "Guided visits to the historic sites of Makkah and Madinah.",
    icon: MapPin,
  },
  {
    title: "Private Transfers",
    description:
      "Private vehicles between the airport, hotels and the two holy cities.",
    icon: Car,
  },
  {
    title: "Airport Transfers",
    description:
      "Pickups and drop-offs at Jeddah or Madinah airport.",
    icon: Plane,
  },
  {
    title: "Hotels Near Haram",
    description:
      "Hotel options in Makkah and Madinah by distance and budget.",
    icon: Bed,
  },
  {
    title: "Visa & Flights",
    description:
      "Help with Umrah visa paperwork and flight options.",
    icon: FileCheck2,
  },
  {
    title: "Full Package",
    description:
      "Flights, visa, hotels, transfers and ziyarat arranged together.",
    icon: Infinity,
  },
];

const vehicles = [
  {
    title: "Private Sedan",
    tag: "COUPLES / SOLO PILGRIMS",
    passengers: "Up to 3 Pilgrims",
    bags: "2 Large + 2 Small Bags",
    description:
      "Comfortable for couples and small families on airport and hotel transfers.",
    image:
      "/images/demo/vehicle-sedan.jpg",
  },
  {
    title: "Family SUV / GMC",
    tag: "FAMILIES",
    passengers: "Up to 6 Pilgrims",
    bags: "4 Large + 3 Small Bags",
    description:
      "Extra space for elders, children and Umrah luggage.",
    popular: true,
    image:
      "/images/demo/vehicle-suv.jpg",
  },
  {
    title: "Group Van / Coach",
    tag: "GROUPS",
    passengers: "10+ Pilgrims",
    bags: "Ample Storage",
    description:
      "Keeps family and community groups together on transfers and ziyarat.",
    image:
      "/images/demo/vehicle-coach.jpg",
  },
];

const travelerOptions = [
  {
    id: "solo" as TravelerType,
    title: "Solo",
    subtitle: "Just you",
    icon: User,
  },
  {
    id: "couple" as TravelerType,
    title: "Couple",
    subtitle: "Two pilgrims",
    icon: Heart,
  },
  {
    id: "family" as TravelerType,
    title: "Family",
    subtitle: "Travel together",
    icon: Users,
  },
  {
    id: "group" as TravelerType,
    title: "Group",
    subtitle: "Friends & more",
    icon: UserRoundPlus,
  },
];

/* =========================================================
   HELPERS
========================================================= */

function formatDate(date: Date | null) {
  if (!date) return "Select date";

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDateInput(date: Date | null) {
  if (!date) return "";

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function createMember(index: number): Member {
  return {
    id: `${Date.now()}-${index}-${Math.random()}`,
    name: "",
    age: "",
  };
}

function calculateNights(checkIn: Date | null, checkOut: Date | null) {
  if (!checkIn || !checkOut) return 0;

  const difference = checkOut.getTime() - checkIn.getTime();

  return Math.max(0, Math.ceil(difference / (1000 * 60 * 60 * 24)));
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Home() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [statusModal, setStatusModal] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title?: string;
    message: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  /* DESTINATION */

  const [selectedDestination, setSelectedDestination] = useState("");
  const [specificLocation, setSpecificLocation] = useState("");

  /* DATES */

  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  /* TRAVELERS */

  const [travelerType, setTravelerType] = useState<TravelerType>("solo");

  const [soloMembers, setSoloMembers] = useState<Member[]>([
    createMember(1),
  ]);

  const [coupleMembers, setCoupleMembers] = useState<Member[]>([
    createMember(1),
    createMember(2),
  ]);

  const [familyAdults, setFamilyAdults] = useState(2);
  const [familyChildren, setFamilyChildren] = useState(0);
  const [familyInfants, setFamilyInfants] = useState(0);

  const [familyMembers, setFamilyMembers] = useState<Member[]>([
    createMember(1),
    createMember(2),
  ]);

  const [groupCount, setGroupCount] = useState(3);

  const [groupMembers, setGroupMembers] = useState<Member[]>([
    createMember(1),
    createMember(2),
    createMember(3),
  ]);

  /* SERVICES */

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Full Package",
  ]);

  /* TRANSPORT */

  const [selectedVehicle, setSelectedVehicle] = useState("Luxury SUV");

  /* CONTACT */

  const [contact, setContact] = useState<ContactData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* =========================================================
     FAMILY MEMBER COUNT
  ========================================================= */

  const totalFamilyMembers = familyAdults + familyChildren + familyInfants;

  useEffect(() => {
    setFamilyMembers((previous) => {
      if (previous.length === totalFamilyMembers) {
        return previous;
      }

      if (previous.length < totalFamilyMembers) {
        const newMembers = [...previous];

        while (newMembers.length < totalFamilyMembers) {
          newMembers.push(createMember(newMembers.length));
        }

        return newMembers;
      }

      return previous.slice(0, totalFamilyMembers);
    });
  }, [totalFamilyMembers]);

  /* =========================================================
     GROUP MEMBER COUNT
  ========================================================= */

  useEffect(() => {
    setGroupMembers((previous) => {
      if (previous.length === groupCount) {
        return previous;
      }

      if (previous.length < groupCount) {
        const newMembers = [...previous];

        while (newMembers.length < groupCount) {
          newMembers.push(createMember(newMembers.length));
        }

        return newMembers;
      }

      return previous.slice(0, groupCount);
    });
  }, [groupCount]);

  /* =========================================================
     CURRENT MEMBERS
  ========================================================= */

  const activeMembers = useMemo(() => {
    if (travelerType === "solo") {
      return soloMembers;
    }

    if (travelerType === "couple") {
      return coupleMembers;
    }

    if (travelerType === "family") {
      return familyMembers;
    }

    return groupMembers;
  }, [travelerType, soloMembers, coupleMembers, familyMembers, groupMembers]);

  /* =========================================================
     UPDATE MEMBER
  ========================================================= */

  const updateMember = (
    type: TravelerType,
    index: number,
    field: "name" | "age",
    value: string
  ) => {
    const update = (
      members: Member[],
      setter: React.Dispatch<React.SetStateAction<Member[]>>
    ) => {
      setter(
        members.map((member, memberIndex) =>
          memberIndex === index ? { ...member, [field]: value } : member
        )
      );
    };

    if (type === "solo") update(soloMembers, setSoloMembers);
    if (type === "couple") update(coupleMembers, setCoupleMembers);
    if (type === "family") update(familyMembers, setFamilyMembers);
    if (type === "group") update(groupMembers, setGroupMembers);
  };

  /* =========================================================
     CALENDAR
  ========================================================= */

  const year = calendarMonth.getFullYear();
  const month = calendarMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => new Date(year, month, index + 1)),
  ];

  const selectDate = (date: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
      return;
    }

    if (date < checkIn) {
      setCheckIn(date);
      return;
    }

    if (date.getTime() === checkIn.getTime()) {
      return;
    }

    setCheckOut(date);
  };

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;

    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isBetweenDates = (date: Date) => {
    if (!checkIn || !checkOut) return false;

    return date.getTime() > checkIn.getTime() && date.getTime() < checkOut.getTime();
  };

  const nights = calculateNights(checkIn, checkOut);

  /* =========================================================
     SERVICES
  ========================================================= */

  const toggleService = (title: string) => {
    if (title === "Full Package") {
      setSelectedServices(["Full Package"]);
      return;
    }

    setSelectedServices((previous) => {
      let updated = previous.filter((service) => service !== "Full Package");

      if (updated.includes(title)) {
        updated = updated.filter((service) => service !== title);
      } else {
        updated.push(title);
      }

      return updated;
    });
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const canContinue = () => {
    if (step === 1) return !!selectedDestination;
    if (step === 2) return !!checkIn && !!checkOut;
    if (step === 3)
      return activeMembers.every(
        (member) => member.name.trim() !== "" && member.age.trim() !== ""
      );
    if (step === 4) return selectedServices.length > 0;
    if (step === 5) return !!selectedVehicle;

    return true;
  };

  /* =========================================================
     PER-STEP PAYLOADS
     Har step apna independent payload maintain karta hai.
     Ye sab final step par combine hoke backend ko bheje jaate hain,
     wahan se WhatsApp Cloud API call hoti hai.
  ========================================================= */

  const destinationPayload = useMemo(
    () => ({
      destination: selectedDestination,
      specificLocation: specificLocation.trim(),
    }),
    [selectedDestination, specificLocation]
  );

  const datesPayload = useMemo(
    () => ({
      checkIn: formatDateInput(checkIn),
      checkOut: formatDateInput(checkOut),
      checkInDisplay: formatDate(checkIn),
      checkOutDisplay: formatDate(checkOut),
      nights,
    }),
    [checkIn, checkOut, nights]
  );

  const travelersPayload = useMemo(() => {
    const travelers = activeMembers.map((member, index) => ({
      number: index + 1,
      name: member.name.trim(),
      age: member.age.trim(),
    }));

    return {
      travelerType,
      travelers,
      travelerCount: activeMembers.length,
      familyDetails:
        travelerType === "family"
          ? {
              adults: familyAdults,
              children: familyChildren,
              infants: familyInfants,
            }
          : null,
    };
  }, [activeMembers, travelerType, familyAdults, familyChildren, familyInfants]);

  const servicesPayload = useMemo(
    () => ({ services: selectedServices }),
    [selectedServices]
  );

  const transportPayload = useMemo(
    () => ({ vehicle: selectedVehicle }),
    [selectedVehicle]
  );

  const contactPayload = useMemo(
    () => ({
      name: contact.name.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
      requirements: contact.message.trim(),
    }),
    [contact]
  );

  // Final combined payload — sabhi steps ka data ek jagah, backend ko bheja jaayega
  const finalPayload = useMemo(
    () => ({
      ...destinationPayload,
      ...datesPayload,
      ...travelersPayload,
      ...servicesPayload,
      ...transportPayload,
      ...contactPayload,
    }),
    [
      destinationPayload,
      datesPayload,
      travelersPayload,
      servicesPayload,
      transportPayload,
      contactPayload,
    ]
  );

  /* =========================================================
     SUBMIT ENQUIRY
     Combined payload backend (/api/enquiry) ko bheja jaata hai.
     Backend WhatsApp Cloud API se message client ko bhejta hai.
  ========================================================= */

  // const submitEnquiry = async () => {
  //   if (isSubmitting) return;

  //   // FINAL CONTACT VALIDATION

  //   if (!contact.name.trim() || !contact.email.trim() || !contact.phone.trim()) {
  //     setStatusModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Contact Details Required",
  //       message:
  //         "Please provide your full name, email address and mobile number before submitting your travel enquiry.",
  //     });

  //     return;
  //   }

  //   // EMAIL VALIDATION

  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (!emailRegex.test(contact.email.trim())) {
  //     setStatusModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Invalid Email Address",
  //       message: "Please enter a valid email address so our team can contact you.",
  //     });

  //     return;
  //   }

  //   try {
  //     setIsSubmitting(true);

  //     console.log("ENQUIRY PAYLOAD:", finalPayload);

  //     const API_URL = "http://localhost:5000";

  //     const response = await fetch(`${API_URL}/api/enquiry`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(finalPayload),
  //     });

  //     const responseText = await response.text();

  //     console.log("API STATUS:", response.status);
  //     console.log("API RESPONSE:", responseText);

  //     let result: any = null;

  //     try {
  //       result = JSON.parse(responseText);
  //     } catch {
  //       result = { message: responseText };
  //     }

  //     if (!response.ok) {
  //       throw new Error(result?.message || `Server error: ${response.status}`);
  //     }

  //     setStatusModal({
  //       isOpen: true,
  //       type: "success",
  //       title: "Journey Request Received!",
  //       message:
  //         "Thank you for sharing your travel plans with Ayesha Tours. Our travel experts will personally review your requirements and get in touch with you shortly.",
  //     });
  //   } catch (error) {
  //     console.error("Enquiry submission error:", error);

  //     setStatusModal({
  //       isOpen: true,
  //       type: "error",
  //       title: "Unable to Send Request",
  //       message:
  //         error instanceof Error
  //           ? error.message
  //           : "Something went wrong while submitting your enquiry. Please try again.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };



    const submitEnquiry = async () => {
  if (isSubmitting) return;

  /* =====================================================
      FINAL CONTACT VALIDATION
  ===================================================== */

  if (
    !contact.name.trim() ||
    !contact.email.trim() ||
    !contact.phone.trim()
  ) {
    setStatusModal({
      isOpen: true,
      type: "error",
      title: "Contact Details Required",
        message:
          "Please provide your full name, email address and mobile number before sending your enquiry.",
    });

    return;
  }

  /* =====================================================
      EMAIL VALIDATION
  ===================================================== */

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(contact.email.trim())) {
    setStatusModal({
      isOpen: true,
      type: "error",
      title: "Invalid Email Address",
      message:
        "Please enter a valid email address so our team can contact you.",
    });

    return;
  }

  try {
    setIsSubmitting(true);

    /* =====================================================
        DEBUG FINAL PAYLOAD
    ===================================================== */

    console.log(
      "FINAL ENQUIRY PAYLOAD:",
      JSON.stringify(finalPayload, null, 2)
    );

    /* =====================================================
        CREATE WHATSAPP MESSAGE

        NOTE:
        finalPayload ke fields dynamically use kiye gaye hain
        taaki undefined field se error na aaye.
    ===================================================== */

    const whatsappMessage = `
🕋 *NEW UMRAH / HAJ ENQUIRY*

━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

Name: ${contact.name.trim()}

Email: ${contact.email.trim()}

Phone: ${contact.phone.trim()}

━━━━━━━━━━━━━━━━━━

✈️ *PILGRIMAGE REQUIREMENTS*

${Object.entries(finalPayload)
  .filter(
    ([key]) =>
      ![
        "name",
        "email",
        "phone",
        "contact",
      ].includes(key)
  )
  .map(([key, value]) => {
    let formattedValue = "";

    if (Array.isArray(value)) {
      formattedValue =
        value.length > 0
          ? value.join(", ")
          : "Not specified";
    } else if (
      typeof value === "object" &&
      value !== null
    ) {
      formattedValue = Object.entries(value)
        .map(
          ([objectKey, objectValue]) =>
            `${objectKey}: ${objectValue}`
        )
        .join(", ");
    } else {
      formattedValue =
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ""
          ? String(value)
          : "Not specified";
    }

    const formattedKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

    return `• *${formattedKey}:* ${formattedValue}`;
  })
  .join("\n\n")}

━━━━━━━━━━━━━━━━━━

🕋 *Ayesha Tours*
_New pilgrimage enquiry from the website._
`.trim();

    /* =====================================================
        WHATSAPP NUMBER

        + SIGN MAT LAGANA
    ===================================================== */

    const whatsappURL = whatsappLink(whatsappMessage);

    /* =====================================================
        OPEN WHATSAPP
    ===================================================== */

    trackLead("enquiry_form");
    emailLead("enquiry_form", finalPayload);

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    /* =====================================================
        SUCCESS MODAL
    ===================================================== */

    setStatusModal({
      isOpen: true,
      type: "success",
      title: "Enquiry Ready In WhatsApp",
      message:
        "WhatsApp has been opened with your enquiry filled in. Please press send in WhatsApp to deliver it to our team – it has not been sent until you do.",
    });

  } catch (error) {
    console.error(
      "Enquiry submission error:",
      error
    );

    setStatusModal({
      isOpen: true,
      type: "error",
      title: "Unable to Continue",
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong while preparing your enquiry. Please try again.",
    });

  } finally {
    setIsSubmitting(false);
  }
};






  /* =========================================================
     STEP TITLES
  ========================================================= */

  const steps = ["Pilgrimage", "Dates", "Pilgrims", "Services", "Transfers", "Contact"];

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f3f5] text-[#291631]">
      <Navbar />

      {/* HERO HEADER */}

      <section className="relative overflow-hidden bg-[#36004e] px-4 pb-28 pt-12 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full border border-white/30" />
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-white/20" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="text-[#ea3471]" size={20} />
            <span className="text-xs font-semibold tracking-[4px] text-[#e3d9e8]">
              AYESHA TOURS
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-center font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Plan Your
            <span className="block text-[#ea3471]">Pilgrimage</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-[#d6c8dc] sm:text-lg">
            Tell us about your Umrah or Haj plans in six short steps, and our team will
            reply with suitable options for you and your family.
          </p>
        </div>
      </section>

      {/* MAIN CARD */}

      <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-white bg-white shadow-[0_30px_100px_rgba(54,0,78,0.15)]">
          {/* PROGRESS */}

          <div className="border-b border-gray-100 bg-[#fcfafb] px-4 py-6 sm:px-8 lg:px-12">
            <div className="hidden items-center justify-between md:flex">
              {steps.map((item, index) => {
                const number = index + 1;

                return (
                  <div key={item} className="relative flex flex-1 items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition ${
                          step > number
                            ? "bg-[#ea3471] text-white"
                            : step === number
                            ? "bg-[#3d0057] text-white shadow-lg shadow-[#3d0057]/20"
                            : "bg-[#edf0ef] text-gray-400"
                        }`}
                      >
                        {step > number ? <Check size={18} /> : number}
                      </div>

                      <div>
                        <p
                          className={`text-xs font-bold uppercase tracking-wider ${
                            step >= number ? "text-[#3d0057]" : "text-gray-400"
                          }`}
                        >
                          Step {number}
                        </p>

                        <p className="text-sm font-semibold text-gray-700">{item}</p>
                      </div>
                    </div>

                    {index !== steps.length - 1 && (
                      <div
                        className={`mx-4 h-[2px] flex-1 ${
                          step > number ? "bg-[#ea3471]" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* MOBILE */}

            <div className="md:hidden">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-[#ea3471]">
                    Step {step} of 6
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#3d0057]">{steps[step - 1]}</h2>
                </div>

                <div className="text-3xl font-serif font-bold text-[#3d0057]">
                  {step}
                  <span className="text-gray-300">/6</span>
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-[#ea3471] transition-all duration-500"
                  style={{ width: `${(step / 6) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div className="min-h-[600px] px-5 py-8 sm:px-10 sm:py-12 lg:px-16">
            {/* STEP 1 — DESTINATION */}

            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#ffebf2] px-4 py-2 text-xs font-bold tracking-[2px] text-[#bc1a50]">
                    <MapPin size={14} />
                    YOUR PILGRIMAGE
                  </span>

                  <h2 className="mt-6 font-serif text-3xl font-bold text-[#291631] sm:text-4xl">
                    What are you
                    <span className="text-[#ea3471]"> planning?</span>
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-gray-500">
                    Choose the type of pilgrimage and we will tailor the next steps to it.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
                  {destinations.map((destination) => {
                    const selected = selectedDestination === destination.title;

                    return (
                      <button
                        key={destination.title}
                        type="button"
                        onClick={() => setSelectedDestination(destination.title)}
                        className={`group relative h-[260px] overflow-hidden rounded-[24px] text-left transition-all duration-300 ${
                          selected
                            ? "scale-[1.015] ring-4 ring-[#ea3471]/30"
                            : "hover:-translate-y-1 hover:shadow-2xl"
                        }`}
                      >
                        <img
                          src={destination.image}
                          alt={destination.title}
                          className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 ${
                            selected ? "scale-110" : ""
                          }`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                        <div
                          className={`absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border-2 transition ${
                            selected
                              ? "border-[#ea3471] bg-[#ea3471] text-white"
                              : "border-white bg-black/20"
                          }`}
                        >
                          {selected && <Check size={18} />}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                          <p className="text-xs font-bold tracking-[3px] text-[#fc93b6]">
                            PILGRIMAGE TYPE
                          </p>

                          <h3 className="mt-2 font-serif text-3xl font-bold">
                            {destination.title}
                          </h3>

                          <p className="mt-2 text-sm text-white/75">{destination.subtitle}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-2xl border border-gray-200 bg-[#faf8f9] p-6">
                  <label className="text-xs font-bold tracking-[2px] text-[#3d0057]">
                    DEPARTURE CITY / NOTES (OPTIONAL)
                  </label>

                  <input
                    value={specificLocation}
                    onChange={(event) => setSpecificLocation(event.target.value)}
                    placeholder="E.g. flying from Mumbai, prefer more nights in Madinah..."
                    className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#3d0057] focus:ring-4 focus:ring-[#3d0057]/10"
                  />
                </div>
              </div>
            )}

            {/* STEP 2 — CALENDAR */}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#f2eaf5] px-4 py-2 text-xs font-bold tracking-[2px] text-[#3d0057]">
                    <CalendarDays size={14} />
                    TRAVEL PERIOD
                  </span>

                  <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl">
                    Choose your
                    <span className="text-[#ea3471]"> travel dates.</span>
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-gray-500">
                    Select your approximate departure and return dates. Final dates are
                    confirmed with flight and hotel availability.
                  </p>
                </div>

                <div className="mt-10 grid overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-xl shadow-gray-200/50 lg:grid-cols-[1.4fr_0.8fr]">
                  <div className="p-6 sm:p-10">
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCalendarMonth(new Date(year, month - 1, 1))}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#3d0057] hover:bg-[#3d0057] hover:text-white"
                      >
                        <ChevronLeft size={20} />
                      </button>

                      <div className="text-center">
                        <p className="text-xs font-bold tracking-[3px] text-[#ea3471]">
                          SELECT DATES
                        </p>

                        <h3 className="mt-2 font-serif text-2xl font-bold text-[#3d0057]">
                          {calendarMonth.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => setCalendarMonth(new Date(year, month + 1, 1))}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 transition hover:border-[#3d0057] hover:bg-[#3d0057] hover:text-white"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    <div className="mt-10 grid grid-cols-7 text-center">
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                        <div
                          key={day}
                          className="pb-5 text-xs font-bold uppercase tracking-wider text-gray-400"
                        >
                          {day}
                        </div>
                      ))}

                      {calendarDays.map((date, index) => {
                        if (!date) {
                          return <div key={`empty-${index}`} className="aspect-square" />;
                        }

                        const selectedStart = isSameDay(date, checkIn);
                        const selectedEnd = isSameDay(date, checkOut);
                        const between = isBetweenDates(date);
                        const today = isSameDay(date, new Date());
                        const startOfToday = new Date();
                        startOfToday.setHours(0, 0, 0, 0);
                        const past = date < startOfToday;

                        return (
                          <div
                            key={date.toISOString()}
                            className={`relative flex aspect-square items-center justify-center ${
                              between ? "bg-[#efe7f2]" : ""
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => selectDate(date)}
                              disabled={past}
                              aria-label={date.toDateString()}
                              className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition-all sm:h-12 sm:w-12 ${
                                past
                                  ? "cursor-not-allowed text-gray-300"
                                  : selectedStart || selectedEnd
                                  ? "scale-110 bg-[#3d0057] text-white shadow-lg shadow-[#3d0057]/30"
                                  : today
                                  ? "border-2 border-[#ea3471] text-[#ea3471]"
                                  : "text-gray-700 hover:bg-[#f1eef0]"
                              }`}
                            >
                              {date.getDate()}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-gray-100 pt-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#3d0057]" />
                        Selected date
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#efe7f2]" />
                        Your journey
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border-2 border-[#ea3471]" />
                        Today
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#36004e] p-7 text-white sm:p-10">
                    <p className="text-xs font-bold tracking-[3px] text-[#ea3471]">
                      YOUR TRAVEL PLAN
                    </p>

                    <div className="mt-10">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-xs font-bold tracking-wider text-white/50">
                          CHECK-IN
                        </p>

                        <p className="mt-3 font-serif text-2xl font-bold">
                          {formatDate(checkIn)}
                        </p>
                      </div>

                      <div className="relative ml-7 h-8 border-l border-dashed border-white/30" />

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-xs font-bold tracking-wider text-white/50">
                          CHECK-OUT
                        </p>

                        <p className="mt-3 font-serif text-2xl font-bold">
                          {formatDate(checkOut)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10 rounded-2xl bg-[#ea3471] p-6">
                      <p className="text-xs font-bold tracking-[2px] text-white/70">
                        JOURNEY DURATION
                      </p>

                      <p className="mt-2 font-serif text-4xl font-bold">
                        {nights}
                        <span className="ml-2 text-xl">Night{nights !== 1 ? "s" : ""}</span>
                      </p>
                    </div>

                    <p className="mt-8 text-sm leading-6 text-white/60">
                      Select your check-in date first, followed by your check-out date.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 — TRAVELERS */}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#ffebf2] px-4 py-2 text-xs font-bold tracking-[2px] text-[#bc1a50]">
                    <Users size={14} />
                    TRAVEL PARTY
                  </span>

                  <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl">
                    Who is joining
                    <span className="text-[#ea3471]"> the pilgrimage?</span>
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-gray-500">
                    Tell us about each pilgrim so we can plan rooms, transfers and any
                    special assistance properly.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {travelerOptions.map((option) => {
                    const Icon = option.icon;
                    const selected = travelerType === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setTravelerType(option.id)}
                        className={`relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                          selected
                            ? "border-[#3d0057] bg-[#3d0057] text-white shadow-xl shadow-[#3d0057]/20"
                            : "border-gray-200 bg-white hover:-translate-y-1 hover:border-[#ea3471]"
                        }`}
                      >
                        {selected && (
                          <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#ea3471]">
                            <Check size={15} />
                          </div>
                        )}

                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                            selected ? "bg-white/10" : "bg-[#f1eef0]"
                          }`}
                        >
                          <Icon size={27} className={selected ? "text-[#ea3471]" : "text-[#3d0057]"} />
                        </div>

                        <h3 className="mt-5 text-xl font-bold">{option.title}</h3>

                        <p className={`mt-1 text-sm ${selected ? "text-white/60" : "text-gray-400"}`}>
                          {option.subtitle}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {travelerType === "family" && (
                  <div className="mt-8 rounded-3xl border border-gray-200 bg-[#faf8f9] p-6 sm:p-8">
                    <h3 className="font-serif text-2xl font-bold text-[#3d0057]">
                      Family Composition
                    </h3>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {[
                        {
                          label: "Adults",
                          subtitle: "12 years and above",
                          value: familyAdults,
                          min: 1,
                          setValue: setFamilyAdults,
                        },
                        {
                          label: "Children",
                          subtitle: "2 to 11 years",
                          value: familyChildren,
                          min: 0,
                          setValue: setFamilyChildren,
                        },
                        {
                          label: "Infants",
                          subtitle: "Under 2 years",
                          value: familyInfants,
                          min: 0,
                          setValue: setFamilyInfants,
                        },
                      ].map((item) => (
                        <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm">
                          <p className="font-bold text-[#3d0057]">{item.label}</p>

                          <p className="mt-1 text-xs text-gray-400">{item.subtitle}</p>

                          <div className="mt-5 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => item.setValue(Math.max(item.min, item.value - 1))}
                              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1eef0] transition hover:bg-gray-200"
                            >
                              <Minus size={18} />
                            </button>

                            <span className="font-serif text-3xl font-bold text-[#3d0057]">
                              {item.value}
                            </span>

                            <button
                              type="button"
                              onClick={() => item.setValue(item.value + 1)}
                              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3d0057] text-white transition hover:bg-[#300044]"
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {travelerType === "group" && (
                  <div className="mt-8 rounded-3xl border border-gray-200 bg-[#faf8f9] p-6 sm:p-8">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#3d0057]">
                          Group Size
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          How many travelers are joining this journey?
                        </p>
                      </div>

                      <div className="flex items-center gap-5 rounded-2xl bg-white p-3 shadow-sm">
                        <button
                          type="button"
                          onClick={() => setGroupCount((value) => Math.max(2, value - 1))}
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1eef0]"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="min-w-[50px] text-center font-serif text-3xl font-bold text-[#3d0057]">
                          {groupCount}
                        </span>

                        <button
                          type="button"
                          onClick={() => setGroupCount((value) => Math.min(20, value + 1))}
                          className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3d0057] text-white"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold tracking-[2px] text-[#ea3471]">
                        TRAVELER DETAILS
                      </p>

                      <h3 className="mt-2 font-serif text-2xl font-bold text-[#3d0057]">
                        {travelerType === "solo"
                          ? "Tell us about yourself"
                          : travelerType === "couple"
                          ? "Your couple details"
                          : travelerType === "family"
                          ? "Family member details"
                          : "Group member details"}
                      </h3>
                    </div>

                    <span className="rounded-full bg-[#f2eaf5] px-4 py-2 text-sm font-bold text-[#3d0057]">
                      {activeMembers.length} Traveler{activeMembers.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {activeMembers.map((member, index) => {
                      let label = `Traveler ${index + 1}`;

                      if (travelerType === "solo") {
                        label = "Your Details";
                      }

                      if (travelerType === "couple") {
                        label = index === 0 ? "Partner 1" : "Partner 2";
                      }

                      if (travelerType === "family") {
                        if (index < familyAdults) {
                          label = `Adult ${index + 1}`;
                        } else if (index < familyAdults + familyChildren) {
                          label = `Child ${index - familyAdults + 1}`;
                        } else {
                          label = `Infant ${index - familyAdults - familyChildren + 1}`;
                        }
                      }

                      return (
                        <div
                          key={member.id}
                          className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-[#3d0057]/40 hover:shadow-lg"
                        >
                          <div className="flex flex-col gap-5 md:flex-row md:items-center">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f2eaf5] font-serif text-lg font-bold text-[#3d0057]">
                              {index + 1}
                            </div>

                            <div className="flex-1">
                              <p className="text-xs font-bold tracking-[2px] text-[#ea3471]">
                                {label.toUpperCase()}
                              </p>

                              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_180px]">
                                <input
                                  value={member.name}
                                  onChange={(event) =>
                                    updateMember(travelerType, index, "name", event.target.value)
                                  }
                                  placeholder="Full name"
                                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#3d0057] focus:ring-4 focus:ring-[#3d0057]/10"
                                />

                                <input
                                  type="number"
                                  min="0"
                                  value={member.age}
                                  onChange={(event) =>
                                    updateMember(travelerType, index, "age", event.target.value)
                                  }
                                  placeholder="Age"
                                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#3d0057] focus:ring-4 focus:ring-[#3d0057]/10"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 — SERVICES */}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#f2eaf5] px-4 py-2 text-xs font-bold tracking-[2px] text-[#3d0057]">
                    <Sparkles size={14} />
                    CHOOSE YOUR SERVICES
                  </span>

                  <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl">
                    What should we
                    <span className="text-[#ea3471]"> arrange for you?</span>
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-gray-500">
                    Select individual services, or choose the Full Package for everything together.
                  </p>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => {
                    const Icon = service.icon;
                    const selected = selectedServices.includes(service.title);
                    const fullPackage = service.title === "Full Package";

                    return (
                      <button
                        key={service.title}
                        type="button"
                        onClick={() => toggleService(service.title)}
                        className={`group relative min-h-[280px] overflow-hidden rounded-[24px] border p-7 text-left transition-all duration-300 ${
                          selected
                            ? fullPackage
                              ? "border-[#ea3471] bg-[#fff3f7] shadow-xl shadow-[#ea3471]/10"
                              : "border-[#3d0057] bg-[#f9f5fb] shadow-xl shadow-[#3d0057]/10"
                            : "border-gray-200 bg-white hover:-translate-y-1 hover:shadow-xl"
                        }`}
                      >
                        <div
                          className={`absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                            selected
                              ? fullPackage
                                ? "border-[#ea3471] bg-[#ea3471] text-white"
                                : "border-[#3d0057] bg-[#3d0057] text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {selected && <Check size={16} />}
                        </div>

                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                            selected && fullPackage ? "bg-[#fcd2e0]" : "bg-[#f1eef0]"
                          }`}
                        >
                          <Icon size={30} className={fullPackage ? "text-[#ea3471]" : "text-[#3d0057]"} />
                        </div>

                        <h3 className="mt-7 font-serif text-2xl font-bold">{service.title}</h3>

                        <p className="mt-4 text-sm leading-7 text-gray-500">
                          {service.description}
                        </p>

                        <Icon size={120} className="absolute -bottom-7 -right-7 opacity-[0.035]" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 5 — TRANSPORT */}

            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#ffebf2] px-4 py-2 text-xs font-bold tracking-[2px] text-[#bc1a50]">
                    <Car size={14} />
                    TRANSFERS IN SAUDI ARABIA
                  </span>

                  <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl">
                    Travel in
                    <span className="text-[#ea3471]"> comfort.</span>
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-gray-500">
                    Select the vehicle type that suits your group (demo images shown).
                  </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  {vehicles.map((vehicle) => {
                    const selected = selectedVehicle === vehicle.title;

                    return (
                      <button
                        key={vehicle.title}
                        type="button"
                        onClick={() => setSelectedVehicle(vehicle.title)}
                        className={`group overflow-hidden rounded-[24px] border text-left transition-all duration-300 ${
                          selected
                            ? "border-[#3d0057] shadow-2xl shadow-[#3d0057]/15"
                            : "border-gray-200 hover:-translate-y-2 hover:shadow-xl"
                        }`}
                      >
                        <div className="relative h-[220px] overflow-hidden">
                          <img
                            src={vehicle.image}
                            alt={vehicle.title}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                          {vehicle.popular && (
                            <span className="absolute left-5 top-5 rounded-full bg-[#ea3471] px-4 py-2 text-xs font-bold tracking-wider text-white">
                              MOST POPULAR
                            </span>
                          )}

                          <div
                            className={`absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border-2 ${
                              selected
                                ? "border-[#ea3471] bg-[#ea3471] text-white"
                                : "border-white bg-black/20 text-white"
                            }`}
                          >
                            {selected && <Check size={17} />}
                          </div>

                          <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-bold tracking-wider text-white">
                            <Car size={16} />
                            {vehicle.tag}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="font-serif text-2xl font-bold text-[#291631]">
                            {vehicle.title}
                          </h3>

                          <div className="mt-5 space-y-3 text-sm text-gray-500">
                            <div className="flex items-center gap-3">
                              <Users size={17} className="text-[#3d0057]" />
                              {vehicle.passengers}
                            </div>

                            <div className="flex items-center gap-3">
                              <Luggage size={17} className="text-[#3d0057]" />
                              {vehicle.bags}
                            </div>
                          </div>

                          <p className="mt-6 border-t border-gray-100 pt-5 text-sm leading-7 text-gray-500">
                            {vehicle.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 6 — CONTACT */}

            {step === 6 && (
              <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#ffebf2] px-4 py-2 text-xs font-bold tracking-[2px] text-[#bc1a50]">
                    <Sparkles size={14} />
                    FINAL STEP
                  </span>

                  <h2 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                    Almost there.
                    <span className="block text-[#ea3471]">How can we reach you?</span>
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-gray-500">
                    Your enquiry will open in WhatsApp so you can send it to our team, who
                    will reply with suitable options.
                  </p>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-[28px] border border-gray-200 bg-white p-6 sm:p-9">
                    <div className="space-y-7">
                      <div>
                        <label className="text-xs font-bold tracking-[2px] text-[#3d0057]">
                          FULL NAME
                        </label>

                        <input
                          value={contact.name}
                          onChange={(event) =>
                            setContact({ ...contact, name: event.target.value })
                          }
                          placeholder="Your full name"
                          className="mt-3 w-full border-b border-gray-300 bg-transparent py-4 text-lg outline-none transition placeholder:text-gray-300 focus:border-[#3d0057]"
                        />
                      </div>

                      <div className="grid gap-7 md:grid-cols-2">
                        <div>
                          <label className="flex items-center gap-2 text-xs font-bold tracking-[2px] text-[#3d0057]">
                            <Mail size={14} />
                            EMAIL ADDRESS
                          </label>

                          <input
                            type="email"
                            value={contact.email}
                            onChange={(event) =>
                              setContact({ ...contact, email: event.target.value })
                            }
                            placeholder="you@example.com"
                            className="mt-3 w-full border-b border-gray-300 bg-transparent py-4 outline-none transition focus:border-[#3d0057]"
                          />
                        </div>

                        <div>
                          <label className="flex items-center gap-2 text-xs font-bold tracking-[2px] text-[#3d0057]">
                            <Phone size={14} />
                            MOBILE / WHATSAPP
                          </label>

                          <input
                            value={contact.phone}
                            onChange={(event) =>
                              setContact({ ...contact, phone: event.target.value })
                            }
                            placeholder="+91 XXXXX XXXXX"
                            className="mt-3 w-full border-b border-gray-300 bg-transparent py-4 outline-none transition focus:border-[#3d0057]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold tracking-[2px] text-[#3d0057]">
                          ANYTHING ELSE WE SHOULD KNOW?
                        </label>

                        <textarea
                          rows={4}
                          value={contact.message}
                          onChange={(event) =>
                            setContact({ ...contact, message: event.target.value })
                          }
                          placeholder="Wheelchair needs, room sharing, preferred hotel distance..."
                          className="mt-3 w-full resize-none rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#3d0057] focus:ring-4 focus:ring-[#3d0057]/10"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex gap-4 rounded-2xl bg-[#f1eef0] p-5">
                      <ShieldCheck className="mt-1 shrink-0 text-[#3d0057]" size={23} />

                      <div>
                        <h3 className="font-bold text-[#291631]">Human Touch Guaranteed</h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          No automated booking. Our team personally reviews every enquiry and
                    contacts you directly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] bg-[#36004e] p-7 text-white sm:p-9">
                    <p className="text-xs font-bold tracking-[3px] text-[#ea3471]">
                      YOUR ENQUIRY SUMMARY
                    </p>

                    <div className="mt-8 space-y-6">
                      <div className="border-b border-white/10 pb-5">
                        <p className="text-xs text-white/50">DESTINATION</p>

                        <p className="mt-2 font-serif text-xl font-bold">
                          {selectedDestination}
                        </p>
                      </div>

                      <div className="border-b border-white/10 pb-5">
                        <p className="text-xs text-white/50">TRAVEL DATES</p>

                        <p className="mt-2 text-sm leading-7">
                          {formatDate(checkIn)}
                          <br />
                          <span className="text-white/40">to</span>
                          <br />
                          {formatDate(checkOut)}
                        </p>
                      </div>

                      <div className="border-b border-white/10 pb-5">
                        <p className="text-xs text-white/50">TRAVELERS</p>

                        <p className="mt-2 font-serif text-xl font-bold capitalize">
                          {travelerType} · {activeMembers.length}
                        </p>
                      </div>

                      <div className="border-b border-white/10 pb-5">
                        <p className="text-xs text-white/50">TRANSPORT</p>

                        <p className="mt-2 font-serif text-xl font-bold">{selectedVehicle}</p>
                      </div>

                      <div>
                        <p className="text-xs text-white/50">EXPERIENCE</p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedServices.map((service) => (
                            <span
                              key={service}
                              className="rounded-full bg-white/10 px-3 py-2 text-xs"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* BOTTOM NAVIGATION */}

          <div className="flex flex-col gap-4 border-t border-gray-100 bg-[#fcfafb] px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
            <div>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep((value) => Math.max(1, value - 1))}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-gray-500 transition hover:bg-gray-100 hover:text-[#3d0057]"
                >
                  <ArrowLeft size={18} />
                  Previous Step
                </button>
              )}
            </div>

            {step < 6 ? (
              <button
                type="button"
                disabled={!canContinue()}
                onClick={() => canContinue() && setStep((value) => Math.min(6, value + 1))}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#3d0057] px-8 py-4 font-bold text-white shadow-lg shadow-[#3d0057]/20 transition hover:bg-[#300044] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
                <ArrowRight size={19} />
              </button>
            ) : (
              <button
                type="button"
                onClick={submitEnquiry}
                disabled={isSubmitting}
                className={`group relative inline-flex min-h-[54px] min-w-[220px] items-center justify-center gap-3 overflow-hidden rounded-full px-8 text-[10px] font-bold uppercase tracking-[0.14em] shadow-[0_15px_35px_rgba(63,17,82,0.22)] transition-all duration-300 ${
                  isSubmitting
                    ? "cursor-not-allowed bg-[#3f1152]/60 text-white/70"
                    : "bg-[#3f1152] text-white hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(63,17,82,0.32)]"
                }`}
              >
                {!isSubmitting && (
                  <span className="absolute inset-0 translate-y-full bg-[#e40e83] transition-transform duration-500 group-hover:translate-y-0" />
                )}

                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Enquiry On WhatsApp
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </>
                  )}
                </span>
              </button>
            )}
          </div>
        </div>
      </section>
      <Footer />

      <FormStatusModal
        isOpen={statusModal.isOpen}
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
        onClose={() =>
          setStatusModal((previous) => ({ ...previous, isOpen: false }))
        }
      />
    </main>
  );
}