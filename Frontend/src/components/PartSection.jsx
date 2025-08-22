import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Acronis from "../assets/Logo/Acronis.jpg";
import Adobe from "../assets/Logo/Adobe.jpg";
import AnyDesk from "../assets/Logo/AnyDesk.jpg";
import Aruba from "../assets/Logo/Aruba.jpg";
import Aws from "../assets/Logo/Aws.jpg";
import Barracuda from "../assets/Logo/Barracuda.jpg";
import Bitdefender from "../assets/Logo/Bitdefender.jpg";
import Dell from "../assets/Logo/Dell.jpg";
import Dropbox from "../assets/Logo/Dropbox.jpg";
import Fortinet from "../assets/Logo/Fortinet.jpg";
import GoogleCloud from "../assets/Logo/GoogleCloud.jpg";
import Jio from "../assets/Logo/Jio.jpg";
import Kaspersky from "../assets/Logo/Kaspersky.jpg";
import Microsoft from "../assets/Logo/Microsoft.jpg";
import Safetica from "../assets/Logo/Safetic.jpg";
import Seqrite from "../assets/Logo/Seqrite.jpg";
import SonicWall from "../assets/Logo/SonicWall.jpg";
import Sophos from "../assets/Logo/Sophos.jpg";
import Symantec from "../assets/Logo/Symantec.jpg";
import Synology from "../assets/Logo/Synology.jpg";
import TrendMicro from "../assets/Logo/TrendMicro.jpg";
import Veeam from "../assets/Logo/Veeam.jpg";
import Veritas from "../assets/Logo/Veritas.jpg";
import Azure from "../assets/Logo/Azure.jpg";
import Esds from "../assets/Logo/ESDS.jpg";
import Checkpoint from "../assets/Logo/Checkpoint.jpg";
import ServerWala from "../assets/Logo/ServerWala.jpg";
import KrispCallLogo from "../assets/Logo/Krisp Call.png";
import TataTeleLogo from "../assets/Logo/Tata tele.jpeg";
import GTBLogo from "../assets/Logo/GTB logo.jpg";
import NetwrixLogo from "../assets/Logo/Netwritx.png"; // ❌ not used
import WatchGuardLogo from "../assets/Logo/WatchGuard.png";
import OpenTextLogo from "../assets/Logo/Opentext.png";
import NinjaOneLogo from "../assets/Logo/Nnjaone.logo.png";
import PaloAltoLogo from "../assets/Logo/Palo-Alto-Logo.jpg";
import eScanLogo from "../assets/Logo/eScanLogo.jpg";
import EsetLogo from "../assets/Logo/Eset.jpg";
import StringeeLogo from "../assets/Logo/Stringee.png";
import HPLogo from "../assets/Logo/Hp.jpg";

// ✅ only keep the ones used in the array below
const allLogos = [
  { name: "Aws", logo: Aws },
  { name: "Azure", logo: Azure },
  { name: "GoogleCloud", logo: GoogleCloud },
  { name: "Esds", logo: Esds },
  { name: "ServerWala", logo: ServerWala },
  { name: "Microsoft", logo: Microsoft },
  { name: "eScan", logo: eScanLogo },
  { name: "Eset", logo: EsetLogo },
  { name: "Bitdefender", logo: Bitdefender },
  { name: "Seqrite", logo: Seqrite },  
  { name: "Kaspersky", logo: Kaspersky },
  { name: "NinjaOne", logo: NinjaOneLogo },
  { name: "OpenText", logo: OpenTextLogo },
  { name: "Acronis", logo: Acronis },
  { name: "TrendMicro", logo: TrendMicro },
  { name: "Symantec", logo: Symantec },
  { name: "Safetica", logo: Safetica },
  { name: "GTB", logo: GTBLogo },
  { name: "Fortinet", logo: Fortinet },
  { name: "Sophos", logo: Sophos },
  { name: "SonicWall", logo: SonicWall },
  { name: "Checkpoint", logo: Checkpoint },
  { name: "Barracuda", logo: Barracuda },
  { name: "Palo Alto", logo: PaloAltoLogo },
  { name: "WatchGuard", logo: WatchGuardLogo },
  { name: "AnyDesk", logo: AnyDesk },
  { name: "Adobe", logo: Adobe },
  { name: "Veeam", logo: Veeam },
  { name: "Veritas", logo: Veritas },
  { name: "Dropbox", logo: Dropbox },
  { name: "Tata Tele", logo: TataTeleLogo },
  { name: "Jio", logo: Jio },
  { name: "KrispCall", logo: KrispCallLogo },
  { name: "Stringee", logo: StringeeLogo },
  { name: "Dell", logo: Dell },
  { name: "Aruba", logo: Aruba },
  { name: "Synology", logo: Synology },
];

const PartSection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Our Technology Partners
          </h2>
          <div className="w-20 h-1 bg-gray-200 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
            We collaborate with industry-leading technology providers to deliver
            comprehensive solutions tailored to your business needs.
          </p>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={32}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 16 },
            480: { slidesPerView: 3, spaceBetween: 24 },
            768: { slidesPerView: 5, spaceBetween: 32 },
            1024: { slidesPerView: 7, spaceBetween: 40 }
          }}
          className="py-8"
        >
          {allLogos.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div
                  className="rounded-full bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out p-5 mb-4 border border-gray-100 hover:scale-105"
                  style={{
                    width: 88,
                    height: 88,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.name + " logo"}
                    className="object-contain"
                    style={{ maxWidth: 56, maxHeight: 56 }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 text-center mt-1 tracking-wide" style={{ letterSpacing: "0.02em" }}>
                  {item.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartSection;
