'use client';

import React, { useState } from 'react';
import { PortfolioItem } from '@/types';
import { useTheme } from '@/hooks';
import Image from 'next/image';

interface ProjectCardProps {
  project: PortfolioItem;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { currentTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl touch-manipulation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="w-full h-48 sm:h-56 md:h-64 relative">
        <Image
          src="/bg2.png"
          alt="Project Background"
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.primary}40, ${currentTheme.secondary}40)`,
            opacity: isHovered ? 0.8 : 0.6,
          }}
        />
        {/* Project Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl animate-glow"
            style={{
              backgroundColor: `${currentTheme.primary}20`,
              borderColor: currentTheme.primary,
              boxShadow: `0 0 20px ${currentTheme.primary}40`,
            }}
          >
            <i className="pi pi-code" style={{ color: currentTheme.primary }} />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div
        className="absolute inset-0 glass-card-hover"
        style={{
          backgroundColor: `${currentTheme.surface}${isHovered ? 'CC' : '99'}`,
        }}
      >
        <div className="p-4 sm:p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold" style={{ color: currentTheme.text }}>
                {project.title}
              </h3>
              {project.featured && (
                <span
                  className="px-2 py-1 text-xs rounded-full glossy-button"
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
              className="text-sm mb-3 sm:mb-4 line-clamp-3"
              style={{ color: currentTheme.textSecondary }}
            >
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {project.technologies.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full glossy-border"
                style={{
                  backgroundColor: `${currentTheme.primary}20`,
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
          <div className="flex flex-col sm:flex-row gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-sm rounded-lg text-center glossy-button touch-manipulation"
                style={{
                  backgroundColor: currentTheme.primary,
                  color: currentTheme.background,
                }}
                onClick={e => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-2 text-sm rounded-lg text-center glossy-button touch-manipulation"
                style={{
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                }}
                onClick={e => e.stopPropagation()}
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
