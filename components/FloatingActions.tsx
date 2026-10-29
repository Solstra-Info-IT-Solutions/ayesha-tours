"use client";


import { whatsappLink, phoneLink } from "@/lib/site";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  X,
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  Plane,
  Bus,
  Map,
  Headphones,
  FileText,
  CalendarDays,
  Phone,
  Sparkles,
  Route,
  Send,
} from "lucide-react";

type MenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export default function QuickTravelAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // On the homepage the hero already offers both actions, so the floating
  // buttons wait until the visitor has scrolled past the opening.
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const hideOnHero = pathname === "/" && !pastHero && !isOpen;

  /* =====================================================
     MENU DATA
  ===================================================== */

  const mainMenu: MenuItem[] = [
    {
      id: "trip",
      title: "Plan My Umrah",
    subtitle: "Packages, dates & enquiries",
      icon: <Plane size={19} />,
    },
    {
      id: "transport",
      title: "Transport & Ziyarat",
    subtitle: "Transfers in Makkah & Madinah",
      icon: <Bus size={19} />,
    },
    {
      id: "tours",
      title: "Umrah & Haj Packages",
    subtitle: "Explore package options",
      icon: <Map size={19} />,
    },
    {
      id: "support",
      title: "Quick Support",
      subtitle: "We're here to help",
      icon: <Headphones size={19} />,
    },
  ];

  const subMenus: Record<string, MenuItem[]> = {
    trip: [
      {
        id: "quote",
        title: "Request a Quote",
        subtitle: "Get a quote for your group",
        icon: <FileText size={18} />,
      },
      {
        id: "custom",
        title: "Customise My Package",
    subtitle: "Hotels, dates & special needs",
        icon: <Route size={18} />,
      },
      {
        id: "expert",
        title: "Talk to Our Team",
        subtitle: "Speak directly with our team",
        icon: <Phone size={18} />,
      },
    ],

    transport: [
      {
        id: "transport-booking",
        title: "Request Transfers",
    subtitle: "Airport, intercity & ziyarat",
        icon: <Bus size={18} />,
      },
      {
        id: "transport-enquiry",
        title: "Transport Enquiry",
    subtitle: "Ask about vehicles and pricing",
        icon: <FileText size={18} />,
      },
      {
        id: "call",
        title: "Call Our Team",
        subtitle: "Get immediate assistance",
        icon: <Phone size={18} />,
      },
    ],

    tours: [
      {
        id: "destinations",
        title: "Makkah & Madinah",
    subtitle: "About the holy cities",
        icon: <Map size={18} />,
      },
      {
        id: "packages",
        title: "View Umrah Packages",
    subtitle: "Economy, standard & premium",
        icon: <CalendarDays size={18} />,
      },
      {
        id: "custom-tour",
        title: "Group & Family Umrah",
    subtitle: "Plans for your whole family",
        icon: <Sparkles size={18} />,
      },
    ],

    support: [
      {
        id: "whatsapp",
        title: "Chat on WhatsApp",
        subtitle: "Get a quick response",
        icon: <MessageCircle size={18} />,
      },
      {
        id: "contact",
        title: "Contact Our Team",
        subtitle: "Send us your enquiry",
        icon: <Send size={18} />,
      },
      {
        id: "call-support",
        title: "Call Us Now",
        subtitle: "Speak directly with us",
        icon: <Phone size={18} />,
      },
    ],
  };

  /* =====================================================
     HELPERS
  ===================================================== */

  const closeAssistant = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const openAssistant = () => {
    setActiveMenu(null);
    setIsOpen(true);
  };

  /* =====================================================
     ESC KEY + BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAssistant();
      }
    };

    window.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  /* =====================================================
     ACTION HANDLER
  ===================================================== */

  const handleAction = (id: string) => {
    switch (id) {
      case "quote":
        window.location.href = "/request-quote";
        break;

      case "custom":
        window.location.href = "/enquiry";
        break;

      case "expert":
      case "call":
      case "call-support":
        window.location.href = phoneLink();
        break;

      case "transport-booking":
      case "transport-enquiry":
        window.location.href = "/transport";
        break;

      case "destinations":
        window.location.href = "/destinations";
        break;

      case "packages":
        window.location.href = "/tour-packages";
        break;

      case "custom-tour":
        window.location.href = "/enquiry";
        break;

      case "whatsapp":
        window.open(
          whatsappLink("Assalamu alaikum Ayesha Tours, I need help with my Umrah or Haj plans."),
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case "contact":
        window.location.href = "/contact";
        break;

      default:
        break;
    }

    closeAssistant();
  };

  /* =====================================================
     CURRENT MENU
  ===================================================== */

  const currentItems = activeMenu
    ? subMenus[activeMenu] || []
    : mainMenu;

  const getTitle = () => {
    if (!activeMenu) {
      return "How Can We Help?";
    }

    const menu = mainMenu.find(
      (item) => item.id === activeMenu
    );

    return menu?.title || "Quick Assistance";
  };

  const getSubtitle = () => {
    if (!activeMenu) {
      return "Choose an option and we'll help you plan your pilgrimage.";
    }

    return "Choose how you would like to continue.";
  };

  return (
    <>
      {/* =====================================================
          BACKDROP
      ===================================================== */}

      <div
        onClick={closeAssistant}
        className={`fixed inset-0 z-[110] bg-[#0d221c]/25 backdrop-blur-[2px] transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* =====================================================
          FLOATING ACTION BUTTONS
      ===================================================== */}

      <div
        className={`fixed bottom-4 right-4 z-[130] flex flex-col items-end gap-3 transition-[opacity,transform] duration-500 sm:bottom-7 sm:right-7 ${
          hideOnHero ? "pointer-events-none translate-y-4 opacity-0" : ""
        }`}
        inert={hideOnHero}
      >

        {/* WHATSAPP */}

        {!isOpen && (
  <a
    href={whatsappLink("Assalamu alaikum Ayesha Tours, I would like to know more about your Umrah and Haj packages")}
    target="_blank"
    rel="noopener noreferrer"
    title="WhatsApp us"
    className="group flex items-center rounded-full bg-[#0f7a41] p-1.5 text-white shadow-[0_12px_30px_rgba(15,122,65,0.32)] transition-all duration-300 hover:-translate-y-0.5"
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
      <MessageCircle size={20} aria-hidden />
    </div>

    <div className="sr-only">
      <p className="text-[10px] font-bold tracking-[0.18em]">
        WHATSAPP US
      </p>

      <p className="mt-0.5 text-[9px] text-white">
        Quick response
      </p>
    </div>
  </a>
)}

        {/* QUICK HELP */}

        <button
          type="button"
          onClick={() => {
            if (isOpen) {
              closeAssistant();
            } else {
              openAssistant();
            }
          }}
          title="Quick help"
          className={`group flex items-center rounded-full p-1.5 text-white shadow-[0_12px_30px_rgba(20,49,41,0.30)] transition-all duration-300 hover:-translate-y-0.5 ${
            isOpen
              ? "bg-[#16322a]"
              : "bg-[#1a3e34] hover:bg-[#16322a]"
          }`}
          aria-label="Toggle pilgrim assistant"
          aria-expanded={isOpen}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
            {isOpen ? (
              <X size={20} />
            ) : (
              <Sparkles size={19} />
            )}
          </div>

          <div className="sr-only">
            <p className="text-[10px] font-bold tracking-[0.18em] text-white">
              QUICK HELP
            </p>

            <p className="mt-0.5 text-[9px] text-white/65">
              Pilgrim assistant
            </p>
          </div>
        </button>
      </div>

      {/* =====================================================
          ASSISTANT CONTAINER
      ===================================================== */}

      <div
        className={`fixed inset-x-0 bottom-0 z-[120] flex justify-center transition-all duration-500 sm:inset-auto sm:bottom-[170px] sm:right-7 sm:block sm:w-[380px] ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0 sm:translate-y-5"
        }`}
      >
        {/* =====================================================
            POPUP
        ===================================================== */}

        <div className="relative w-full overflow-hidden rounded-t-[28px] border border-white/70 bg-[#faf9f6]/98 shadow-[0_-20px_60px_rgba(20,49,41,0.20)] backdrop-blur-xl sm:max-h-[calc(100vh-210px)] sm:rounded-[26px] sm:shadow-[0_25px_70px_rgba(20,49,41,0.25)]">

          {/* MOBILE HANDLE */}

          <div className="flex justify-center pt-3 sm:hidden">
            <div className="h-1.5 w-12 rounded-full bg-[#16322a]/15" />
          </div>

          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="relative overflow-hidden border-b border-[#16322a]/10 px-5 pb-5 pt-4 sm:px-6 sm:pt-5">

            {/* DECORATION */}

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#b79b66]/20" />

            <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border border-[#b79b66]/15" />

            {/* BACK BUTTON */}

            {activeMenu && (
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                className="relative z-10 mb-4 flex items-center gap-1.5 text-[10px] font-bold tracking-[0.12em] text-[#1a3e34] transition-colors hover:text-[#b79b66]"
              >
                <ChevronLeft size={15} />
                BACK
              </button>
            )}

            <div className="relative z-10 flex items-start justify-between gap-4">

              <div>
                <div className="flex items-center gap-2">
                  <span className="h-px w-6 bg-[#b79b66]" />

                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#7b6337]">
                    AYESHA TOURS
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-[25px] font-bold leading-tight text-[#16322a] sm:text-[24px]">
                  {getTitle()}
                </h3>

                <p className="mt-2 max-w-[280px] text-[12px] leading-5 text-[#686f6c]">
                  {getSubtitle()}
                </p>
              </div>

              <button
                type="button"
                onClick={closeAssistant}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#16322a]/10 bg-white text-[#686f6c] transition-all duration-300 hover:border-[#16322a]/25 hover:text-[#16322a]"
                aria-label="Close assistant"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* =====================================================
              OPTIONS - SCROLL SAFE
          ===================================================== */}

          <div className="max-h-[45vh] overflow-y-auto p-3 pb-4 sm:max-h-[calc(100vh-430px)] sm:p-4">

            <div className="space-y-2">
              {currentItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (!activeMenu) {
                      setActiveMenu(item.id);
                    } else {
                      handleAction(item.id);
                    }
                  }}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-left transition-all duration-300 hover:border-[#16322a]/10 hover:bg-white hover:shadow-[0_8px_25px_rgba(22,50,42,0.07)]"
                >
                  {/* ICON */}

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f2eee5] text-[#1a3e34] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1a3e34] group-hover:text-white">
                    {item.icon}
                  </div>

                  {/* TEXT */}

                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-[#16322a]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#5c6660]">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* ARROW */}

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4f2ee] text-[#1a3e34] transition-all duration-300 group-hover:bg-[#b79b66] group-hover:text-[#0e1f1b]">
                    <ChevronRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* =====================================================
              FOOTER
          ===================================================== */}

          <div className="border-t border-[#16322a]/10 bg-[#f5f3f0] px-5 py-3">
            <div className="flex items-center justify-center gap-2">
              <Sparkles
                size={12}
                className="text-[#b79b66]"
              />

              <span className="text-center text-[8px] font-bold tracking-[0.22em] text-[#16322a]/80">
                YOUR PILGRIMAGE STARTS HERE
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}