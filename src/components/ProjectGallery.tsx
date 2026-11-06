import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { projects } from "@/constants/projects";

type Project = (typeof projects)[number];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <a
    className="project-card"
    href={project.url}
    target="_blank"
    rel="noreferrer"
  >
    <div className="project-card__visual">
      <img
        src={project.image}
        alt={`${project.name} website preview`}
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
  const [firstProjectIndex, setFirstProjectIndex] = useState(0);

  const orderedProjects = projects.map((_, offset) => {
    const index = (firstProjectIndex + offset) % projects.length;
    return { project: projects[index], index };
  });

  const rotateForward = (viewport: HTMLDivElement) => {
    const firstCard = viewport.querySelector<HTMLElement>(".project-card");
    const cardWidth = firstCard?.offsetWidth ?? 0;
    if (cardWidth <= 0) return false;

    flushSync(() => {
      setFirstProjectIndex((current) => (current + 1) % projects.length);
    });
    viewport.scrollLeft -= cardWidth;
    return true;
  };

  const rotateBackward = (viewport: HTMLDivElement) => {
    const firstCard = viewport.querySelector<HTMLElement>(".project-card");
    const cardWidth = firstCard?.offsetWidth ?? 0;
    if (cardWidth <= 0) return false;

    flushSync(() => {
      setFirstProjectIndex(
        (current) => (current - 1 + projects.length) % projects.length
      );
    });
    viewport.scrollLeft += cardWidth;
    return true;
  };

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

        let firstCardWidth =
          viewport.querySelector<HTMLElement>(".project-card")?.offsetWidth ?? 0;
        let rotations = 0;

        while (
          firstCardWidth > 0 &&
          viewport.scrollLeft >= firstCardWidth &&
          rotations < projects.length
        ) {
          if (!rotateForward(viewport)) break;
          firstCardWidth =
            viewport.querySelector<HTMLElement>(".project-card")?.offsetWidth ?? 0;
          rotations += 1;
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

    if (direction === -1 && viewport.scrollLeft < viewport.clientWidth * 0.4) {
      rotateBackward(viewport);
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
            {orderedProjects.map(({ project, index }) => (
              <ProjectCard project={project} index={index} key={project.name} />
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
