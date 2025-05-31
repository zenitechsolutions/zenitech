import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";

const Prenav = () => {
  return (
    <div className="relative z-50">
      {/* Apple-style Slim Prenav Bar with blue-950 and original thickness */}
      <div className="bg-blue-950 text-white py-3 w-full border-b border-slate-800 apple-prenav">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
          {/* Email */}
          <a
            href="mailto:info@zenitech.in?subject=Hello%20from%20your%20website&body=Hi%20from%20your%20website"
            className="flex items-center gap-1 text-white/80 hover:text-amber-400 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={15} className="text-amber-400" />
            info@zenitech.in
          </a>
          {/* Phone 1 */}
          <a
            href="tel:+918820066999"
            className="flex items-center gap-1 text-white/80 hover:text-amber-400 transition-colors duration-200"
            aria-label="Call"
          >
            <Phone size={15} className="text-amber-400" />
            +91 88200 66999
          </a>
          {/* Phone 2 */}
          <a
            href="tel:+917439004545"
            className="flex items-center gap-1 text-white/80 hover:text-amber-400 transition-colors duration-200"
            aria-label="Call"
          >
            +91 74390 04545
          </a>
          {/* LinkedIn Only */}
          <a
            href="https://www.linkedin.com/company/zenitech-solutions/posts/?feedView=all"
            aria-label="LinkedIn"
            className="flex items-center gap-1 text-white/80 hover:text-amber-400 transition-colors duration-200"
            target="_blank" rel="noopener noreferrer"
          >
            <Linkedin size={15} className="text-amber-400" />
            LinkedIn
          </a>
        </div>
      </div>
      <style jsx="true" global="true">{`
        .apple-prenav {
          font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
          font-size: 0.92rem;
          letter-spacing: 0.01em;
          font-weight: 500;
          box-shadow: none;
        }
        @media (max-width: 640px) {
          .apple-prenav {
            font-size: 0.82rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Prenav;
