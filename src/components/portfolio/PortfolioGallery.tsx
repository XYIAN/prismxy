"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants";
import { PortfolioItem } from "@/types";
import { useTheme } from "@/hooks";
import ProjectCard from "./ProjectCard";
import Image from "next/image";

const PortfolioGallery: React.FC = () => {
  const { currentTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  const handleProjectClick = (project: PortfolioItem) => {
    setSelectedProject(project);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: currentTheme.text }}
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="absolute inset-0 backdrop-blur-lg"
              style={{ backgroundColor: `${currentTheme.background}CC` }}
            />

            <div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl backdrop-blur-lg border"
              style={{
                backgroundColor: currentTheme.surface,
                borderColor: `${currentTheme.primary}30`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-3xl font-bold"
                    style={{ color: currentTheme.text }}
                  >
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    style={{ color: currentTheme.text }}
                  >
                    <i className="pi pi-times text-2xl" />
                  </button>
                </div>

                <div className="w-full h-64 rounded-lg mb-6 relative overflow-hidden">
                  <Image
                    src="/icon-lg.png"
                    alt="Project Preview"
                    fill
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${currentTheme.primary}20, ${currentTheme.secondary}20)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-4xl backdrop-blur-lg border"
                      style={{
                        backgroundColor: `${currentTheme.primary}20`,
                        borderColor: currentTheme.primary,
                      }}
                    >
                      <i
                        className="pi pi-code"
                        style={{ color: currentTheme.primary }}
                      />
                    </div>
                  </div>
                </div>

                <p
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: currentTheme.textSecondary }}
                >
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4
                    className="text-xl font-semibold mb-3"
                    style={{ color: currentTheme.text }}
                  >
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border"
                        style={{
                          backgroundColor: `${currentTheme.primary}20`,
                          borderColor: currentTheme.primary,
                          color: currentTheme.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg text-center transition-colors"
                      style={{
                        backgroundColor: currentTheme.primary,
                        color: currentTheme.background,
                      }}
                    >
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg text-center border transition-colors"
                      style={{
                        borderColor: currentTheme.primary,
                        color: currentTheme.primary,
                      }}
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
