"use client";

import { useEffect, useState } from "react";
import { Plane, MapPin, Sparkles } from "lucide-react";

const LOADER_DURATION = 10000; // 10 seconds

export default function PremiumLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;

      const calculatedProgress = Math.min(
        (elapsedTime / LOADER_DURATION) * 100,
        100
      );

      setProgress(Math.floor(calculatedProgress));

      if (elapsedTime >= LOADER_DURATION) {
        clearInterval(interval);

        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#2a0838] transition-opacity duration-700 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0">

        {/* Main Gradient */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(78,19,103,0.45),transparent_55%)]" />

        {/* Gold Glow */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e40e83]/[0.06] blur-[120px]" />

        {/* Decorative Lines */}

        <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e40e83]/20 to-transparent" />

        <div className="absolute right-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e40e83]/20 to-transparent" />

        {/* Large Circles */}

        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-white/[0.03]" />

        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#e40e83]/10" />

        {/* Stars */}

        <div className="loader-star loader-star-1" />
        <div className="loader-star loader-star-2" />
        <div className="loader-star loader-star-3" />
        <div className="loader-star loader-star-4" />
        <div className="loader-star loader-star-5" />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 flex w-full max-w-[500px] flex-col items-center px-6 text-center">

        {/* =====================================================
            COMPASS
        ====================================================== */}

        <div className="relative mb-10 flex h-[180px] w-[180px] items-center justify-center sm:h-[210px] sm:w-[210px]">

          {/* Outer Rotating Ring */}

          <div className="absolute inset-0 rounded-full border border-[#e40e83]/20 loader-spin-slow" />

          {/* Dashed Ring */}

          <div className="absolute inset-[12px] rounded-full border border-dashed border-[#e40e83]/30 loader-spin-reverse" />

          {/* Inner Ring */}

          <div className="absolute inset-[28px] rounded-full border border-white/[0.08]" />

          {/* Compass Lines */}

          <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#e40e83]/40 to-transparent" />

          <div className="absolute h-full w-[2px] bg-gradient-to-b from-transparent via-[#e40e83]/40 to-transparent" />

          {/* Compass Points */}

          <span className="absolute top-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#e40e83]">
            N
          </span>

          <span className="absolute bottom-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#e40e83]/50">
            S
          </span>

          <span className="absolute left-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#e40e83]/50">
            W
          </span>

          <span className="absolute right-[-8px] text-[9px] font-bold tracking-[0.25em] text-[#e40e83]/50">
            E
          </span>


          {/* Center Glow */}

          <div className="absolute h-[92px] w-[92px] rounded-full bg-[#4e1367]/40 blur-xl" />


          {/* Plane */}

          <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#e40e83]/40 bg-[#3e0e52] shadow-[0_0_50px_rgba(228,14,131,0.18)]">

            <div className="absolute inset-[6px] rounded-full border border-[#e40e83]/15" />

            <Plane
              size={30}
              strokeWidth={1.5}
              className="relative z-10 rotate-[-35deg] text-[#e40e83] loader-plane"
            />

          </div>


          {/* Orbiting Location */}

          <div className="absolute inset-0 loader-orbit">

            <div className="absolute left-1/2 top-[-7px] -translate-x-1/2">

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e40e83]/40 bg-[#3e0e52] text-[#e40e83] shadow-lg">

                <MapPin size={14} />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BRAND
        ====================================================== */}

        <div className="flex items-center gap-3">

          <span className="h-px w-8 bg-[#e40e83]/70" />

          <div className="flex items-center gap-2">

            <Sparkles
              size={13}
              className="animate-pulse text-[#e40e83]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#e40e83]">
              Preparing Your Pilgrimage
            </span>

          </div>

          <span className="h-px w-8 bg-[#e40e83]/70" />

        </div>


        <p className="mt-5 font-serif text-[32px] font-bold tracking-[-0.02em] text-white sm:text-[38px]">

          Ayesha Tours

        </p>


        <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.32em] text-[#b49bbf]">

          Haj &amp; Umrah Packages

        </p>


        {/* =====================================================
            JOURNEY TEXT
        ====================================================== */}

        <p className="mt-8 text-[13px] leading-6 text-[#beaac6]">

          Preparing your pilgrimage details…

        </p>


        {/* =====================================================
            ROUTE / PROGRESS
        ====================================================== */}

        <div className="relative mt-9 w-full max-w-[360px]">

          {/* Route Background */}

          <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">

            {/* Progress */}

            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#4e1367] via-[#e40e83] to-[#ff5db6] transition-all duration-100"
              style={{
                width: `${progress}%`,
              }}
            />

            {/* Moving Glow */}

            <div
              className="absolute top-1/2 h-6 w-20 -translate-y-1/2 bg-[#e40e83]/40 blur-lg transition-all duration-100"
              style={{
                left: `${Math.max(progress - 10, 0)}%`,
              }}
            />

          </div>


          {/* Starting Point */}

          <div className="absolute left-0 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#e40e83]/60 bg-[#2a0838]">

            <div className="h-1.5 w-1.5 rounded-full bg-[#e40e83]" />

          </div>


          {/* Destination Point */}

          <div className="absolute right-0 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#e40e83]/60 bg-[#2a0838]">

            <MapPin
              size={9}
              className="text-[#e40e83]"
            />

          </div>

        </div>


        {/* =====================================================
            LOADING INFO
        ====================================================== */}

        <div className="mt-4 flex w-full max-w-[360px] items-center justify-between">

          <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#90719d]">

            {progress < 30
              ? "Preparing Experience"
              : progress < 60
              ? "Mapping Your Journey"
              : progress < 85
              ? "Curating Destinations"
              : progress < 100
              ? "Almost Ready"
              : "Journey Ready"}

          </span>


          <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-[#e40e83]">

            {progress.toString().padStart(2, "0")}%

          </span>

        </div>


        {/* =====================================================
            BOTTOM SIGNATURE
        ====================================================== */}

        <div className="mt-12 flex items-center gap-3">

          <span className="h-px w-7 bg-white/10" />

          <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#7f638b]">

            Labbaik Allahumma Labbaik

          </p>

          <span className="h-px w-7 bg-white/10" />

        </div>

      </div>


      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style jsx global>{`

        @keyframes loaderSpinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loaderSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes loaderOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loaderPlane {
          0%, 100% {
            transform: rotate(-35deg) translateY(0);
          }

          50% {
            transform: rotate(-28deg) translateY(-5px);
          }
        }

        @keyframes loaderStar {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.8);
          }
        }

        .loader-spin-slow {
          animation: loaderSpinSlow 16s linear infinite;
        }

        .loader-spin-reverse {
          animation: loaderSpinReverse 10s linear infinite;
        }

        .loader-orbit {
          animation: loaderOrbit 7s linear infinite;
        }

        .loader-plane {
          animation: loaderPlane 2.5s ease-in-out infinite;
        }

        .loader-star {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: #e40e83;
          animation: loaderStar 2s ease-in-out infinite;
        }

        .loader-star-1 {
          top: 18%;
          left: 20%;
          animation-delay: 0s;
        }

        .loader-star-2 {
          top: 25%;
          right: 18%;
          animation-delay: 0.5s;
        }

        .loader-star-3 {
          bottom: 20%;
          left: 15%;
          animation-delay: 1s;
        }

        .loader-star-4 {
          bottom: 28%;
          right: 12%;
          animation-delay: 1.5s;
        }

        .loader-star-5 {
          top: 50%;
          left: 8%;
          animation-delay: 0.8s;
        }

      `}</style>

    </div>
  );
}
