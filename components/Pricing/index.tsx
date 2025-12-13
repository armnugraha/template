"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  const price_wedding = [
    {
        name: "Paket Wedding C",
        price: "Rp 4.250.000",
        description: "",
        time_included: "8 jam",
        crew: "2 orang (1 fotografer, 1 videografer)",
        studio: '-',
        popular: false,
        output: [
            {
                album: "1 Album (20 halaman, ukuran 20x30 cm) + box kulit",
                prints: ["1 cetakan pembesaran 40x60 cm (16RP) Frame minimalis"],
                clip_cinematik: "1 clip (1 menit)",
                video_liputan: "1 video (15-20 menit)",
                digital: "Soft file foto original & 250 foto edit (flashdisk 32GB)",
                video: "Video file edit saja",
                same_day_edit: "-"
            }
        ]
    },
    {
        name: "Paket Wedding B",
        price: "Rp 5.500.000",
        description: "",
        time_included: "8 jam",
        crew: "3 orang (2 fotografer, 1 videografer)",
        studio: '-',
        popular: false,
        output: [
            {
                album: "2 Album (20 halaman, ukuran 20x30 cm) + box kulit",
                prints: ["1 cetakan pembesaran 40x60 cm (16RP) Frame minimalis", "2 cetakan pembesaran 20x30 cm Frame minimalis"],
                clip_cinematik: "1 clip (2 menit)",
                video_liputan: "1 video (25-30 menit)",
                digital: "Soft file foto original & 350 foto edit (flashdisk 32GB)",
                video: "Video file edit saja",
                same_day_edit: "-"
            }
        ]
    },
    {
        name: "Paket Wedding A",
        price: "Rp 9.500.000",
        description: "",
        time_included: "8 jam",
        crew: "5 orang (2 fotografer, 2 videografer, 1 asisten)",
        studio: '-',
        popular: true,
        output: [
            {
                album: "2 Album (20 halaman, ukuran 20x30 cm) + box kayu jati",
                prints: ["1 cetakan canvas 50x70 cm (20RP) Frame classic (ukir)", "2 cetakan pembesaran 40x60 cm (16RP) Frame minimalis", "2 cetakan pembesaran 20x30 cm Frame minimalis"],
                clip_cinematik: "1 clip (2-4 menit)",
                video_liputan: "1 video (25-40 menit)",
                digital: "Soft file foto original & 500 foto edit (flashdisk 64GB)",
                video: "Video file edit saja",
                same_day_edit: "-"
            }
        ]
    },
    {
        name: "Paket Wedding 1",
        price: "Rp 15.000.000",
        description: "",
        time_included: "12 jam",
        crew: "5 orang (2 fotografer, 2 videografer, 1 asisten)",
        studio: "1 set mini studio (lighting & abstract background)",
        popular: false,
        output: [
            {
                album: "2 Album (20 halaman, ukuran 20x30 cm) + box kayu jati",
                prints: ["1 cetakan canvas 50x70 cm (20RP) Frame classic (ukir)", "2 cetakan pembesaran 40x60 cm (16RP) Frame minimalis", "2 cetakan pembesaran 20x30 cm Frame minimalis"],
                clip_cinematik: "1 clip (2-4 menit)",
                video_liputan: "1 video (25-40 menit)",
                digital: "Soft file foto original & 500 foto edit (flashdisk 64GB)",
                video: "Video file edit saja",
                same_day_edit: "Cinematik video akad / pemberkatan",
            }
        ]
    }
  ];

  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>

          <div className="animate_top">
            <table className="block overflow-auto min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border p-4 bg-gray-100 text-left">Detail</th>
                  {price_wedding.map((pkg, i) => (
                    <th key={i} className="border p-4 bg-gray-50 text-center">
                      { pkg.popular && (
                        <div className="-rotate-90 rounded-bl-full rounded-tl-full bg-primary px-2 py-1 text-xs font-medium uppercase text-white">
                          popular
                        </div>
                      )}
                      <div className="font-bold">
                        {pkg.name}
                      </div>
                      <div className="text-blue-600 font-semibold">{pkg.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Durasi</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      {pkg.time_included}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-3">Crew</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      {pkg.crew}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-3">Album</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      {pkg.output[0].album}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-3">Cetakan</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      <ul className="list-disc list-inside text-left">
                        {pkg.output[0].prints.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-3">Clip Cinematik</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      {pkg.output[0].clip_cinematik}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-3">Video Liputan</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      {pkg.output[0].video_liputan}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-3">Digital File</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      {pkg.output[0].digital}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border p-3">Sameday Edit</td>
                  {price_wedding.map((pkg, i) => (
                    <td key={i} className="border p-3 align-top">
                      {pkg.output[0].same_day_edit}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $10{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Small Pack
              </h4>
              <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB Storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited Photos and Videos
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Exclusive Support
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Custom Branding Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $59{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Medium Pack
              </h4>
              <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB Storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited Photos and Videos
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive Support
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    Custom Branding Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                $189{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Large Pack
              </h4>
              <p>Lorem ipsum dolor sit amet, consec adipisicing elit.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB Storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited Photos and Videos
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive Support
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom Branding Strategy
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
