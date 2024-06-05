import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);
  const modelProps = {
    allow: "xr-spatial-tracking",
    allowFullScreen: true,
    allowvr: 'yes'
  }

  /*
  <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
  */
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Automate Where It Matters
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Revolutionize the order fulfillment process, by focusing on the last 100 feet. PSI increases efficiency by automating and optimizing the pack line.
          </p>
          <Button href="#features" white>
            Learn More
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 lg:max-w-full">
          <div className="relative z-1 ">
            <div className="relative bg-pal-2 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] bg-n-12 overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <iframe
                  {...modelProps}
                  src={`https://sketchfab.com/models/b2303a552b444e5b8637fdf5169b41cb/embed?autostart=1&internal=1&tracking=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_watermark=0`}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={`120%`}
                  allow={`autoplay; fullscreen; xr-spatial-tracking`}
                  xr-spacial-tracking="true"
                />
              </div>
            </div>
          </div>
          <Gradient />
          <BackgroundCircles />
        </div>

        
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
