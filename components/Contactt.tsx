"use client";

export default function Contact() {
  return (
    <div className="w-full">
      {/* FINAL STEP */}
      <div className="mb-6 inline-flex rounded-full border border-[#f3b7cb] bg-[#ffeff4] px-4 py-2">
        <span className="text-xs font-medium tracking-[1px] text-[#bc1a50]">
          FINAL STEP
        </span>
      </div>

      {/* HEADING */}
      <h1 className="max-w-[650px] font-serif text-4xl font-bold leading-[1.15] text-[#202020] md:text-5xl">
        Almost there!
        <br />
        How can we reach you?
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-5 max-w-[720px] text-[17px] leading-7 text-gray-600">
        Please provide your details so our concierge team can curate your
        personalized itinerary and get in touch.
      </p>

      {/* FORM */}
      <div className="mt-8">
        {/* FULL NAME */}
        <div>
          <label className="text-sm font-medium tracking-[0.5px] text-[#222]">
            FULL NAME
          </label>

          <input
            type="text"
            placeholder="Jane Doe"
            className="mt-3 w-full border-0 border-b border-[#c0b8c3] bg-transparent px-0 pb-4 text-[17px] text-gray-700 outline-none placeholder:text-[#b8b8b8] focus:border-[#3d0057]"
          />
        </div>

        {/* EMAIL + WHATSAPP */}
        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium tracking-[0.5px] text-[#222]">
              EMAIL ADDRESS
            </label>

            <input
              type="email"
              placeholder="jane@example.com"
              className="mt-3 w-full border-0 border-b border-[#c0b8c3] bg-transparent px-0 pb-4 text-[17px] text-gray-700 outline-none placeholder:text-[#b8b8b8] focus:border-[#3d0057]"
            />
          </div>

          {/* WHATSAPP */}
          <div>
            <label className="text-sm font-medium tracking-[0.5px] text-[#222]">
              MOBILE / WHATSAPP
            </label>

            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="mt-3 w-full border-0 border-b border-[#c0b8c3] bg-transparent px-0 pb-4 text-[17px] text-gray-700 outline-none placeholder:text-[#b8b8b8] focus:border-[#3d0057]"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="mt-5">
          <label className="text-sm font-medium tracking-[0.5px] text-[#222]">
            ANYTHING ELSE WE SHOULD KNOW? (OPTIONAL)
          </label>

          <textarea
            rows={2}
            placeholder="Special occasions, dietary requirements..."
            className="mt-3 w-full resize-none border-0 border-b border-[#c0b8c3] bg-transparent px-0 pb-4 text-[17px] text-gray-700 outline-none placeholder:text-[#b8b8b8] focus:border-[#3d0057]"
          />
        </div>

        {/* HUMAN TOUCH BOX */}
        <div className="mt-7 flex overflow-hidden rounded-lg bg-[#f1eef0]">
          {/* LEFT BORDER */}
          <div className="w-1 shrink-0 bg-[#3d0057]" />

          <div className="flex gap-4 px-5 py-5">
            {/* ICON */}
            <div className="mt-1 shrink-0 text-[#3d0057]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-lg font-semibold text-[#222]">
                Human Touch Guaranteed
              </h2>

              <p className="mt-1 text-[16px] leading-6 text-gray-600">
                No automated booking. Our team will carefully review your
                requirements and contact you manually within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}