import { useEffect, useRef } from "react";
import { projects } from "@/constants/projects";

type Project = (typeof projects)[number];

const ProjectCard = ({
  project,
  index,
  duplicate = false,
}: {
  project: Project;
  index: number;
  duplicate?: boolean;
}) => (
  <a
    className="project-card"
    href={project.url}
    target="_blank"
    rel="noreferrer"
    tabIndex={duplicate ? -1 : undefined}
  >
    <div className="project-card__visual">
      <img
        src={project.image}
        alt={duplicate ? "" : `${project.name} website preview`}
        draggable="false"
      />
      <span className="project-card__open">
        Open project <span aria-hidden="true">↗</span>
      </span>
      <span className="project-card__number">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
    <div className="project-card__body">
      <div>
        <p>{project.date}</p>
        <h3>{project.name}</h3>
      </div>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </a>
);

const ProjectGallery = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  };

  const resume = (delay = 0) => {
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);

    if (delay === 0) {
      pausedRef.current = false;
      return;
    }

    resumeTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
      resumeTimerRef.current = null;
    }, delay);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;
    let previousTime = performance.now();

    const move = (time: number) => {
      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;

      if (!pausedRef.current) {
        viewport.scrollLeft += elapsed * 0.026;
        const loopWidth = viewport.scrollWidth / 2;

        if (loopWidth > 0 && viewport.scrollLeft >= loopWidth) {
          viewport.scrollLeft -= loopWidth;
        }
      }

      animationFrame = window.requestAnimationFrame(move);
    };

    animationFrame = window.requestAnimationFrame(move);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const moveByPage = (direction: -1 | 1) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    pause();
    const loopWidth = viewport.scrollWidth / 2;

    if (direction === -1 && viewport.scrollLeft < viewport.clientWidth * 0.4) {
      viewport.scrollLeft += loopWidth;
    }

    viewport.scrollBy({
      left: viewport.clientWidth * 0.72 * direction,
      behavior: "smooth",
    });
    resume(1800);
  };

  return (
    <div className="project-gallery">
      <div className="project-gallery__toolbar">
        <p>
          <span className="status-light" />
          Auto sequence / drag or scroll to explore
        </p>
        <div className="project-gallery__controls">
          <button type="button" onClick={() => moveByPage(-1)} aria-label="Previous projects">
            ←
          </button>
          <span>{String(projects.length).padStart(2, "0")} projects</span>
          <button type="button" onClick={() => moveByPage(1)} aria-label="Next projects">
            →
          </button>
        </div>
      </div>

      <div
        className="project-gallery__viewport"
        ref={viewportRef}
        onFocus={pause}
        onBlur={() => resume(700)}
        onMouseEnter={pause}
        onMouseLeave={() => resume(500)}
        onPointerDown={pause}
        onPointerUp={() => resume(1200)}
        onPointerCancel={() => resume(1200)}
        onTouchStart={pause}
        onTouchEnd={() => resume(1400)}
        onWheel={() => {
          pause();
          resume(1400);
        }}
        aria-label="Scrollable project gallery"
      >
        <div className="project-gallery__track">
          <div className="project-gallery__set">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>
          <div className="project-gallery__set" aria-hidden="true">
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                index={index}
                duplicate
                key={`duplicate-${project.name}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="project-gallery__footer" aria-hidden="true">
        <span>← SCROLL</span>
        <i />
        <span>LOOP / ACTIVE →</span>
      </div>
    </div>
  );
};

export default ProjectGallery;
