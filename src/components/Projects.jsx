import { FolderGit2, Download } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data/portfolioData.js';

/**
 * PROJECTS — file-driven, not visitor-driven
 * ----------------------------------------------------------------
 * There is no upload UI here, for anyone, on purpose. Adding a
 * project means editing `projects` in portfolioData.js and pushing
 * to Git — nothing runs on the client that could add, remove, or
 * tamper with content. This keeps the site 100% static: no backend,
 * no auth, no attack surface, and it's still "automatically
 * available to visitors" the moment your push finishes deploying.
 */
export default function Projects() {
  const hasProjects = projects.length > 0;

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        title="Projects"
        label={hasProjects ? undefined : 'In progress'}
      />

      {hasProjects ? (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="
                rounded-lg border border-light-line dark:border-dark-line
                bg-light-surface dark:bg-dark-surface overflow-hidden
              "
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-44 object-cover border-b border-light-line dark:border-dark-line"
                  loading="lazy"
                />
              )}
              <div className="p-5">
                <h3 className="font-medium text-[15px] mb-1.5">{project.name}</h3>
                <p className="text-sm text-light-inkSoft dark:text-dark-inkSoft mb-3">
                  {project.description}
                </p>
                <div className="flex gap-4 text-sm">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-accent hover:underline"
                    >
                      <FolderGit2 size={14} />
                      View project
                    </a>
                  )}
                  {project.file && (
                    <a
                      href={project.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-accent hover:underline"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[15px] text-light-inkSoft dark:text-dark-inkSoft border-l-2 border-light-line dark:border-dark-line pl-4">
          Nothing published yet — projects show up here as soon as they're
          added to the repo.
        </p>
      )}
    </section>
  );
}
