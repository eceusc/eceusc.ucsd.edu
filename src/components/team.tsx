"use client";
import * as React from 'react';
import { Briefcase, User, Mail, GraduationCap, BookOpen, Target } from "lucide-react";
import { Member } from "@/app/types";


// --- MUI Card Component ---

export default function MemberCard ({ member }: { member: Member }) {
  return (
    <div 
      className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border"
      style={{ 
        backgroundColor: '#182B49',
        borderColor: '#00629B',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 198, 215, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.pic}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: 'linear-gradient(to top, #182B49, transparent)' }}
        ></div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <User size={18} style={{ color: '#FFCD00' }} />
          <h2 className="text-xl font-bold" style={{ color: '#FFCD00' }}>
            {member.name}
          </h2>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <Briefcase size={16} style={{ color: '#00C6D7' }} />
          <p className="font-semibold" style={{ color: '#00C6D7' }}>
            {member.position}
          </p>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Mail size={16} style={{ color: '#B6B1A9' }} />
          <p className="text-sm" style={{ color: '#B6B1A9' }}>
            {member.email}
          </p>
        </div>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} style={{ color: '#FFCD00' }} />
            <p className="text-sm font-semibold text-white">{member.major}</p>
          </div>
          
          {member.minor && (
            <div className="flex items-center gap-2 ml-6">
              <BookOpen size={14} style={{ color: '#B6B1A9' }} />
              <p className="text-sm" style={{ color: '#B6B1A9' }}>
                Minor: {member.minor}
              </p>
            </div>
          )}
          
          {member.depth && (
            <div className="flex items-center gap-2 ml-6">
              <Target size={14} style={{ color: '#B6B1A9' }} />
              <p className="text-sm" style={{ color: '#B6B1A9' }}>
                Focus: {member.depth}
              </p>
            </div>
          )}
          
          <div className="flex items-center gap-2 ml-6">
            <p className="text-sm" style={{ color: '#B6B1A9' }}>
              {member.year}
            </p>
          </div>
        </div>

        {member.lines.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {member.lines.map((line, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{ 
                  color: '#FFCD00',
                  backgroundColor: '#00629B',
                  border: '1px solid #00C6D7'
                }}
              >
                {line}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};