"use client";
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${index}-${i}`}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "hsl(var(--card-dark))",
                  border: "1px solid hsl(var(--border-green))",
                }}
              >
                <p className="font-dm text-[15px] text-white/80 leading-relaxed italic">
                  "{text}"
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-dm font-semibold text-sm text-white">{name}</p>
                    <p className="font-dm text-[13px] text-muted-foreground">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
