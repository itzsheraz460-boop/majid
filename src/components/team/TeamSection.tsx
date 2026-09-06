"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export function TeamSection() {
  return (
    <section className="py-16 bg-[#0d0f1a] text-gray-100" id="team">
      <h2 className="text-3xl font-black text-center mb-12 text-white">
        Meet the Team
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {teamMembers.map((member) => (
          <div
            key={`${member.name}-${member.role}`}
            className="bg-[#08090d] rounded-2xl overflow-hidden flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl hover:shadow-[#25f4ee]/20 transition-all duration-300 border border-gray-800"
          >
            {/* Photo */}
            <div className="relative w-full h-64">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#08090d] to-transparent" />
            </div>

            {/* Info */}
            <div className="px-4 pb-5 pt-2 w-full">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-[#25f4ee] font-medium mb-1">{member.role}</p>
              {member.phone && (
                <p className="text-xs text-gray-400">📞 {member.phone}</p>
              )}
              {member.bio && (
                <p className="text-xs text-gray-400 mt-1">{member.bio}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
