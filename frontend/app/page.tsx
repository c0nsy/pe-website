import Image from "next/image"

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/platinum-logo.jpg"
              alt="Platinum Enterprise Group"
              fill
              className="object-contain rounded-full shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">
            Under Maintenance
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            We&apos;re working hard to improve your experience
          </p>

          {/* Description */}
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Our website is currently undergoing scheduled maintenance. We&apos;ll be back shortly with an even better experience for you.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-gray-300 font-medium">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="tel:+15197911234"
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call Us</span>
              </a>
              <a
                href="mailto:info@platinumenterprise.ca"
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Platinum Enterprise Group. All rights reserved.
        </p>

        {/* Tagline */}
        <p className="mt-2 text-amber-500/80 text-sm font-medium tracking-wide">
          A Step Above The Rest
        </p>
      </div>
    </main>
  )
}
