"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { Phone, Users, Video, Clapperboard, Star } from "lucide-react";

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="py-20 bg-[#0a0c16] text-gray-100 relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#25f4ee]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#fe2c55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25f4ee]/10 border border-[#25f4ee]/30 text-xs font-bold text-[#25f4ee] uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Official Cast & Crew
          </div>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Meet the Stars & Creative Minds
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed">
            The passionate actors, director, and technical experts dedicated to bringing hilarious comedy, relatable daily sketches, and nonstop entertainment to you.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <motion.article
              key={`${member.name}-${member.role}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-[#0e111d] rounded-2xl overflow-hidden border border-white/10 hover:border-[#25f4ee]/50 shadow-xl hover:shadow-2xl hover:shadow-[#25f4ee]/15 flex flex-col justify-between transition-all"
            >
              {/* Image & Overlay */}
              <div className="relative w-full aspect-[4/5] sm:h-72 overflow-hidden bg-black/40">
                <Image
                  src={member.img}
                  alt={`${member.name} - ${member.role} at Majid Funny Video`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Role Badge on Image */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#25f4ee] border border-[#25f4ee]/40 flex items-center gap-1 shadow-md">
                    {member.role.includes("Director") ? (
                      <Clapperboard className="w-3 h-3 text-[#ffd600]" />
                    ) : member.role.includes("Camera") ? (
                      <Video className="w-3 h-3 text-[#25f4ee]" />
                    ) : (
                      <Star className="w-3 h-3 text-[#fe2c55]" />
                    )}
                    {member.role}
                  </span>
                </div>

                {/* Bottom Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e111d] via-transparent to-transparent opacity-90" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-[#25f4ee] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#25f4ee] mt-0.5">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                      {member.bio}
                    </p>
                  )}
                </div>

                {/* Contact Action */}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#25f4ee]/20 border border-white/10 hover:border-[#25f4ee]/40 text-xs font-bold text-gray-300 hover:text-white transition-all"
                    aria-label={`Call ${member.name} at ${member.phone}`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#25f4ee]" />
                    <span>{member.phone}</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

