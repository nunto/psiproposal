import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check, autoslip, lcinfeeder, printfeeder } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="products">
      <div className="container">
        <Heading
          title="Automated Pack Stations"
          text="  PSI are the experts in order fulfillment automation. We manufacturer and integrate print on demand, friction feeding, and sortation systems for the last 100 feet of the order fulfillment line."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right max-w-[730px]"
                width={800}
                alt="AutoSlip"
                height={730}
                src={autoslip}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">AUTOSLIP</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              One step print, fold, insert and application system for label and shipping documents
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-bl-3/40 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={printfeeder}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Print Feeder"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">PRINT FEEDERS</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                In-Line Document Printing, Folding and Inserting Systems.
                </p>
              </div>

           
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] border border-bl-5/10">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Friction Feeder</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                PSI’s large capacity friction feeder offers packaging solutions for high volumes of media, such as catalogs, to be fed from the inline dispensing system into boxes or totes along the conveyor line. <br /> <br/> The feeder adds versatility and improves the handling capacity of the automated order fulfillment system.
                </p>

                
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={lcinfeeder}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="LC Feeder"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
