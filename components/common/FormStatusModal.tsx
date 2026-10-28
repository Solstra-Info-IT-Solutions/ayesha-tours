"use client";

import { useEffect } from "react";
import {
  Check,
  XCircle,
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

type FormStatusModalProps = {
  isOpen: boolean;
  type: "success" | "error";
  title?: string;
  message: string;
  onClose: () => void;
};

export default function FormStatusModal({
  isOpen,
  type,
  title,
  message,
  onClose,
}: FormStatusModalProps) {
  const isSuccess = type === "success";

  /* =====================================================
      ESC KEY + BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const defaultTitle = isSuccess
    ? "Almost Done"
    : "We Couldn't Complete That";

  const eyebrow = isSuccess
    ? "READY TO SEND IN WHATSAPP"
    : "REQUEST NEEDS ATTENTION";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="form-status-title"
    >
      {/* =====================================================
          PREMIUM BACKDROP
      ===================================================== */}

      <div
        className="absolute inset-0 bg-[#1e0628]/75 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4e1367]/20 blur-[130px]" />

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] ${
          isSuccess ? "bg-[#e40e83]/15" : "bg-[#dc5c4f]/15"
        }`}
      />

      {/* =====================================================
          MODAL
      ===================================================== */}

      <div className="premium-modal relative w-full max-w-[540px] overflow-hidden rounded-[32px] border border-white/20 bg-[#fefbfd] shadow-[0_40px_140px_rgba(0,0,0,0.45)]">
        {/* =====================================================
            TOP PREMIUM ACCENT
        ===================================================== */}

        <div className="relative h-[5px] overflow-hidden">
          <div
            className={`absolute inset-0 ${
              isSuccess
                ? "bg-gradient-to-r from-[#3f1152] via-[#e40e83] to-[#3f1152]"
                : "bg-gradient-to-r from-[#7f2525] via-[#dc5c4f] to-[#7f2525]"
            }`}
          />

          <div className="premium-light absolute inset-y-0 w-32 bg-white/40 blur-md" />
        </div>

        {/* =====================================================
            DECORATIVE BACKGROUND
        ===================================================== */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top circles */}

          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#e40e83]/20" />

          <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full border border-[#e40e83]/15" />

          {/* Bottom glow */}

          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#4e1367]/[0.05] blur-2xl" />

          {/* Fine grid */}

          <div className="absolute inset-0 opacity-[0.025] premium-grid" />
        </div>

        {/* =====================================================
            CLOSE BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={onClose}
          className="group absolute right-5 top-7 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#e1d7dc] bg-white/90 text-[#7c7181] shadow-sm transition-all duration-300 hover:rotate-90 hover:border-[#3f1152] hover:bg-[#3f1152] hover:text-white sm:right-6"
          aria-label="Close modal"
        >
          <X
            size={18}
            className="transition-transform duration-300"
          />
        </button>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative z-10 px-6 py-10 text-center sm:px-12 sm:py-12">
          {/* =====================================================
              STATUS ICON
          ===================================================== */}

          <div className="relative mx-auto flex h-[150px] w-[150px] items-center justify-center">
            {/* Outer animated rings */}

            <div
              className={`absolute inset-0 rounded-full border ${
                isSuccess
                  ? "border-[#e40e83]/20"
                  : "border-[#dc5c4f]/20"
              } premium-spin-slow`}
            />

            <div
              className={`absolute inset-[10px] rounded-full border border-dashed ${
                isSuccess
                  ? "border-[#e40e83]/25"
                  : "border-[#dc5c4f]/25"
              } premium-spin-reverse`}
            />

            {/* Glow */}

            <div
              className={`absolute inset-[25px] rounded-full blur-2xl ${
                isSuccess
                  ? "bg-[#e40e83]/25"
                  : "bg-[#dc5c4f]/20"
              }`}
            />

            {/* Main icon circle */}

            <div
              className={`relative flex h-[92px] w-[92px] items-center justify-center rounded-full border shadow-[0_20px_60px_rgba(63,17,82,0.15)] ${
                isSuccess
                  ? "border-[#e40e83]/40 bg-gradient-to-br from-[#fdf7fa] to-[#f6e1ec]"
                  : "border-[#dc5c4f]/30 bg-gradient-to-br from-[#fffafa] to-[#ffe9e7]"
              }`}
            >
              {/* Inner ring */}

              <div
                className={`absolute inset-[7px] rounded-full border ${
                  isSuccess
                    ? "border-[#e40e83]/20"
                    : "border-[#dc5c4f]/20"
                }`}
              />

              {isSuccess ? (
                <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#4e1367] text-white shadow-lg">
                  <Check size={30} strokeWidth={2.5} />
                </div>
              ) : (
                <div className="relative z-10 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#b61d50] text-white shadow-lg">
                  <XCircle size={29} strokeWidth={1.9} />
                </div>
              )}
            </div>

            {/* Orbit sparkles */}

            {isSuccess && (
              <>
                <Sparkles
                  size={16}
                  className="absolute left-1 top-8 animate-pulse text-[#e40e83]"
                />

                <Sparkles
                  size={12}
                  className="absolute bottom-7 right-1 animate-pulse text-[#e40e83]"
                />
              </>
            )}

            {!isSuccess && (
              <AlertTriangle
                size={15}
                className="absolute right-3 top-8 animate-pulse text-[#dc5c4f]"
              />
            )}
          </div>

          {/* =====================================================
              EYEBROW
          ===================================================== */}

          <div className="mt-6 flex items-center justify-center gap-3">
            <span
              className={`h-px w-9 ${
                isSuccess
                  ? "bg-gradient-to-r from-transparent to-[#e40e83]"
                  : "bg-gradient-to-r from-transparent to-[#dc5c4f]"
              }`}
            />

            <div className="flex items-center gap-2">
              {isSuccess ? (
                <Sparkles
                  size={13}
                  className="text-[#e40e83]"
                />
              ) : (
                <AlertTriangle
                  size={13}
                  className="text-[#dc5c4f]"
                />
              )}

              <span
                className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
                  isSuccess
                    ? "text-[#4e1367]"
                    : "text-[#b61d50]"
                }`}
              >
                {eyebrow}
              </span>
            </div>

            <span
              className={`h-px w-9 ${
                isSuccess
                  ? "bg-gradient-to-l from-transparent to-[#e40e83]"
                  : "bg-gradient-to-l from-transparent to-[#dc5c4f]"
              }`}
            />
          </div>

          {/* =====================================================
              TITLE
          ===================================================== */}

          <h2
            id="form-status-title"
            className="mx-auto mt-6 max-w-[440px] font-serif text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#3f1152] sm:text-[42px]"
          >
            {title || defaultTitle}
          </h2>

          {/* =====================================================
              MESSAGE
          ===================================================== */}

          <p className="mx-auto mt-5 max-w-[410px] text-[14px] leading-7 text-[#7c7181] sm:text-[15px]">
            {message}
          </p>

          {/* =====================================================
              SUCCESS INFO CARD
          ===================================================== */}

          {isSuccess && (
            <div className="mx-auto mt-7 flex max-w-[390px] items-center gap-3 rounded-[18px] border border-[#e40e83]/20 bg-[#fcf3f8] px-4 py-3.5 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e40e83]/10 text-[#e40e83]">
                <ShieldCheck size={19} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#3f1152]">
                  Your message is ready in WhatsApp
                </p>

                <p className="mt-0.5 text-[10px] leading-4 text-[#918a94]">
                  Press send in WhatsApp so our team receives it and can reply to you.
                </p>
              </div>
            </div>
          )}

          {/* =====================================================
              ERROR INFO CARD
          ===================================================== */}

          {!isSuccess && (
            <div className="mx-auto mt-7 flex max-w-[390px] items-center gap-3 rounded-[18px] border border-[#dc5c4f]/15 bg-[#fff7f6] px-4 py-3.5 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dc5c4f]/10 text-[#dc5c4f]">
                <AlertTriangle size={18} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#7f3b35]">
                  Nothing has been sent yet
                </p>

                <p className="mt-0.5 text-[10px] leading-4 text-[#96716d]">
                  Please check the details above and try again. If the issue continues, contact our team.
                </p>
              </div>
            </div>
          )}

          {/* =====================================================
              CTA
          ===================================================== */}

          <button
            type="button"
            onClick={onClose}
            className={`group relative mt-8 inline-flex min-h-[56px] min-w-[220px] items-center justify-center overflow-hidden rounded-full px-8 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_15px_35px_rgba(63,17,82,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(63,17,82,0.28)] ${
              isSuccess
                ? "bg-[#3f1152]"
                : "bg-[#b61d50]"
            }`}
          >
            {/* Shine */}

            <span className="absolute inset-y-0 -left-[120%] w-[70%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover:left-[150%]" />

            {/* Hover background */}

            <span
              className={`absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 ${
                isSuccess
                  ? "bg-[#e40e83]"
                  : "bg-[#8b2e2e]"
              }`}
            />

            <span className="relative z-10 flex items-center gap-3">
              {isSuccess ? "Continue Exploring" : "Try Again"}

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </button>

          {/* =====================================================
              FOOTER SIGNATURE
          ===================================================== */}

          <div className="mt-9 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#3f1152]/10" />

            <span className="text-[8px] font-bold uppercase tracking-[0.28em] text-[#a7a0aa]">
              Ayesha Tours
            </span>

            <span className="h-px w-8 bg-[#3f1152]/10" />
          </div>
        </div>
      </div>

      {/* =====================================================
          GLOBAL ANIMATIONS
      ===================================================== */}

      <style jsx global>{`
        @keyframes premiumModalEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.94);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes premiumSpinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes premiumSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes premiumLight {
          from {
            transform: translateX(-200%);
          }

          to {
            transform: translateX(500%);
          }
        }

        .premium-modal {
          animation: premiumModalEnter 0.45s
            cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .premium-spin-slow {
          animation: premiumSpinSlow 16s linear infinite;
        }

        .premium-spin-reverse {
          animation: premiumSpinReverse 11s linear infinite;
        }

        .premium-light {
          animation: premiumLight 3.5s ease-in-out infinite;
        }

        .premium-grid {
          background-image:
            linear-gradient(
              rgba(63,17,82,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(63,17,82,0.8) 1px,
              transparent 1px
            );

          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}