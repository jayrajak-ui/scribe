import { Marquee } from "@/components/magicui/marquee"; // Import from the new file

const logos = [
  "Fulton County Health Center",
  "Great Lakes",
  "PRIMA CARE",
  "PRIVIA",
  "SOLARISHEALTH",
  "THE UROLOGY GROUP",
  "Allergy Partners",
  "American Family Care",
];

export const LogoMarquee = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo, idx) => (
          <div key={idx} className="h-16 w-48 border rounded-lg flex items-center justify-center mx-4 text-gray-500 font-semibold">
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
  );
};