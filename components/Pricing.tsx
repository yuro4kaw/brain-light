import React from "react";
import Section from "./Section";
import Image from "next/image";
import { smallSphere, stars } from "@/assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine,  } from "@/components/design/Pricing";
import Link from "next/link";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Start"
            />
          </div>
        </div>
        <Heading
          tag="Get started with BrainLight"
          title="Pay once, use forever"
        />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
            <Link href="/pricing" className="text-xs font-code font-semibold tracking-wider uppercase border-b">See the full details</Link>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
