"use client";

import React, { useState } from "react";
import { PortfolioItem } from "@/types";
import { useTheme } from "@/hooks";

interface ProjectCardProps {
  project: PortfolioItem;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { currentTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="w-full h-64 bg-gradient-to-br transition-transform duration-500"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.primary}20, ${currentTheme.secondary}20)`,
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
            style={{ backgroundColor: currentTheme.primary }}
          >
            <i
              className="pi pi-code"
              style={{ color: currentTheme.background }}
            />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-lg border transition-all duration-300"
        style={{
          backgroundColor: `${currentTheme.surface}${isHovered ? "CC" : "99"}`,
          borderColor: `${currentTheme.primary}${isHovered ? "40" : "20"}`,
        }}
      >
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-xl font-bold"
                style={{ color: currentTheme.text }}
              >
                {project.title}
              </h3>
              {project.featured && (
                <span
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: currentTheme.accent,
                    color: currentTheme.background,
                  }}
                >
                  Featured
                </span>
              )}
            </div>

            <p
              className="text-sm mb-4 line-clamp-3"
              style={{ color: currentTheme.textSecondary }}
            >
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full border"
                style={{
                  backgroundColor: `${currentTheme.primary}20`,
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span
                className="px-2 py-1 text-xs rounded-full"
                style={{ color: currentTheme.textSecondary }}
              >
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-sm rounded-lg text-center transition-colors"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: currentTheme.background,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-sm rounded-lg text-center border transition-colors"
                style={{
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
