"use client";

export default function Date() {
  return (
    <div>
      <h1 className="font-serif text-xl font-bold text-gray-800">
        Where do you want to explore?
      </h1>

      <p className="mt-3 text-[16px] leading-7 text-gray-600">
        Selecting your dates helps us tailor seasonal experiences and secure
        the finest accommodations for your journey.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
        {/* TABS */}
        <div className="flex border-b border-gray-200">
          <button
            type="button"
            className="rounded-t-xl bg-[#16392f] px-6 py-4 text-sm text-white"
          >
            FIXED DATES
          </button>

          <button
            type="button"
            className="px-6 py-4 text-sm text-gray-700"
          >
            FLEXIBLE DATES
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
          {/* CALENDAR */}
          <div>
            <div className="flex items-center justify-between">
              <button type="button" className="text-2xl text-[#112d25]">
                ‹
              </button>

              <h2 className="text-xl font-semibold text-[#112d25]">
                June 2024
              </h2>

              <button type="button" className="text-2xl text-[#112d25]">
                ›
              </button>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-y-4 text-center text-sm">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="text-gray-500">
                  {day}
                </div>
              ))}

              {Array.from({ length: 30 }, (_, index) => {
                const day = index + 1;
                const selected = day >= 11 && day <= 16;

                return (
                  <button
                    key={day}
                    type="button"
                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${
                      selected
                        ? day === 11 || day === 16
                          ? "bg-[#112d25] text-white"
                          : "bg-[#f1eadc] text-[#112d25]"
                        : "text-gray-700"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DATE INPUT */}
          <div className="border-l-0 md:border-l md:pl-6">
            <label className="text-sm text-gray-600">CHECK-IN</label>

            <input
              type="date"
              defaultValue="2024-06-11"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-[#faf9f6] px-4 py-4 outline-none"
            />

            <label className="mt-7 block text-sm text-gray-600">
              CHECK-OUT
            </label>

            <input
              type="date"
              defaultValue="2024-06-16"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-[#faf9f6] px-4 py-4 outline-none"
            />

            <div className="mt-6 border-t pt-5">
              <p className="text-lg font-semibold">🕘 5 Nights</p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Perfect duration for an immersive introductory experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}