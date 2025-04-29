"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
import Service from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Services() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28 w-[80%] mx-auto"
    >
      <SectionHeading>Our services</SectionHeading>
      <motion.div
        className="relative  bottom-4  mx-auto h-1 bg-[#caf0f8] w-24"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-fit mx-auto gap-6 justify-items-center">
        {servicesData.map((service, index) => (
          <Service key={index} index={index + 1} {...service} />
        ))}
      </div>
    </section>
  );
}
