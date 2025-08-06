import { f as createAstro, c as createComponent, g as renderComponent, h as renderHead, i as renderSlot, r as renderTemplate, m as maybeRenderHead, l as addAttribute } from '../chunks/astro/server_CiYCKlPB.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_DDMwtWs9.mjs';
import $$Banner from '../chunks/Banner_BxwFj7YD.mjs';
/* empty css                                 */
import 'clsx';
import { g as getCollection } from '../chunks/consts_D_uW4Mz9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$6 = createAstro("https://jorgerosbel.vercel.app");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`<html lang="en" class="dark"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "JorgeRosbel | Portfolio", "description": "Frontend Specialist crafting sleek, scalable web experiences with React, TypeScript, Tailwind\u202FCSS and Astro \u2014 user\u2011centered design and performant architectures." })}${renderHead()}</head> <body class="dark:bg-dark-bg w-full bg-light-bg flex flex-col items-center"> ${renderComponent($$result, "Header", $$Header, {})} <main class="w-full max-w-[900px] flex flex-col items-center px-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/rosbeldev/portfolio/src/layouts/MainLayout.astro", void 0);

const $$Astro$5 = createAstro("https://jorgerosbel.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="py-3 dark:text-dark-text text-light-text min-h-[40vh] flex flex-col items-center justify-center md:w-full mb-10 mt-30 fade-up"> <p class="dark:text-dark-text text-light-text tracking-[3px] font-bold text-4xl w-full text-start my-8 uppercase">
Jorge Rosbel
</p> <h1 class="text-[1.2rem] dark:text-dark-text/80 text-light-text text-center md:text-start">
I’m a Frontend Specialist crafting sleek, interactive web experiences with <strong class="opacity-100">React</strong>,<strong class="opacity-100">TypeScript</strong>, <strong class="opacity-100">Tailwind CSS</strong>, and <strong class="opacity-100">Astro</strong>. I blend user‑centered design with scalable,
    maintainable architectures, contribute to open‑source, and continuously explore new tools to
    keep workflows and applications performant.
</h1> <div class="w-full mt-10"> <a href="mailto:jorgerosbel@proton.me" class="h-6 bg-dark-text/3 py-2 px-3 rounded border
  dark:border-dark-text/20 border-light-text/20">Contact me</a> </div> ${renderComponent($$result, "Banner", $$Banner, { "server:defer": true, "server:component-directive": "defer", "server:component-path": "/home/rosbeldev/portfolio/src/components/Banner.astro", "server:component-export": "default" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, {})} `, "fallback": ($$result2) => renderTemplate`<div class="w-full grid grid-cols-1 md:grid-cols-3 mt-12 border-y py-10 dark:border-dark-text/10 border-light-text/10 gap-6 fade-up"> <div class="flex flex-col gap-3 items-center animate-pulse"> <span class="text-5xl font-bold dark:text-dark-text text-light-text">???</span> <span class="font-semibold dark:text-dark-text/80 text-light-text/80">Years of Experience</span> </div> <div class="flex flex-col gap-3 items-center animate-pulse"> <span class="text-5xl font-bold dark:text-dark-text text-light-text">???</span> <span class="font-semibold dark:text-dark-text/80 text-light-text/80">Projects Completed</span> </div> <div class="flex flex-col gap-3 items-center animate-pulse"> <span class="text-5xl font-bold dark:text-dark-text text-light-text">???</span> <span class="font-semibold dark:text-dark-text/80 text-light-text/80">Github Stars</span> </div> </div>` })} </section>`;
}, "/home/rosbeldev/portfolio/src/components/Hero.astro", "self");

const $$Astro$4 = createAstro("https://jorgerosbel.vercel.app");
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Title;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="dark:text-dark-text text-light-text fade-up tracking-[3px] font-bold text-2xl relative
before:w-1/2 w-max before:h-[2px] before:bg-light-text dark:before:bg-dark-text before:absolute before:bottom-[-8px] before:left-0"> ${text} </h2>`;
}, "/home/rosbeldev/portfolio/src/components/Title.astro", void 0);

const $$Astro$3 = createAstro("https://jorgerosbel.vercel.app");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      name: "http-sentinel",
      description: "\u{1F4A5}A TypeScript library that provides a comprehensive set of HTTP error classes and utilities for handling HTTP errors in your applications.",
      url: "https://github.com/JorgeRosbel/http-sentinel",
      tags: ["fetch", "error-handling", "npm"],
      lang: "TypeScript"
    },
    {
      name: "gitzen",
      description: "\u{1F9E0}AI-powered CLI tool for automatic git commit message generation",
      url: "https://github.com/JorgeRosbel/gitzen",
      tags: ["git", "ai-powered", "agentic-ai"],
      lang: "TypeScript"
    },
    {
      name: "NovaBoost",
      description: "\u{1F31F}NovaBoost: Free Astro\u202F5\u202F&\u202FTailwindCSS blog template\u2014SEO\u2011optimized, with JSON\u2011LD and optional AI post generation.",
      url: "https://github.com/JorgeRosbel/NovaBoost",
      tags: ["astro", "seo-optimization", "ai-powered"],
      lang: "TypeScript"
    },
    {
      name: "easy-consent",
      description: "\u{1F9EA}A lightweight consent management solution for Google Analytics and related services. This is a beta version and should be used with caution.",
      url: "https://github.com/JorgeRosbel/easy-consent",
      tags: ["analytics", "cookie-consent"],
      lang: "TypeScript"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full max-w-[900px] dark:text-dark-text text-light-text flex flex-col gap-7"> ${renderComponent($$result, "Title", $$Title, { "text": "Projects" })} <div class="grid grid-cols-1 md:grid-cols-2 w-full gap-5"> ${projects.map((project) => renderTemplate`<article class="rounded border dark:border-dark-text/20 border-light-text/20 p-4 flex flex-col justify-between gap-6 fade-up transition-all
        hover:translate-y-[-10px] duration-300 cursor-pointer hover:dark:bg-dark-text/3 hover:bg-light-text/3"> <div class="flex justify-between items-center"> <p class="font-semibold">${project.name}</p> <a${addAttribute(project.url, "href")} target="_blank"${addAttribute(project.name, "aria-label")}> <svg viewBox="0 0 16 16" aria-hidden="true" width="26" height="26" class="dark:text-dark-text text-light-text opacity-70 transition-all duration-200 hover:opacity-100"> <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg> </a> </div> <div class="flex flex-col gap-3 w-full"> <p class="dark:text-dark-text/80 text-light-text/80">${project.description}</p> <div class="flex items-center justify-start gap-3 my-3"> ${project.tags.map((tag) => renderTemplate`<span class="dark:bg-light-bg/8 bg-dark-bg/8 px-3 py-1 rounded-2xl text-[0.8rem]"> ${tag} </span>`)} </div> </div> </article>`)} </div> </section>`;
}, "/home/rosbeldev/portfolio/src/components/Projects.astro", void 0);

const $$Astro$2 = createAstro("https://jorgerosbel.vercel.app");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/home/rosbeldev/portfolio/src/components/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro("https://jorgerosbel.vercel.app");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${content.id}`, "href")} class="w-full"> <article class="rounded border dark:border-dark-text/20 border-light-text/20 p-4 flex flex-col justify-between gap-6 fade-up transition-all
         duration-300 cursor-pointer w-full hover:dark:bg-dark-text/3 hover:bg-light-text/3"> <h2 class="font-bold text-xl">${content.data.title}</h2> <p class="opacity-80 text-[1rem]">${content.data.description}</p> <div class="flex w-full items-center justify-between"> <div class="flex items-center justify-start gap-3 flex-wrap"> ${content.data.tags.map((tag) => renderTemplate`<span class="dark:bg-light-bg/8 bg-dark-bg/8 px-3 py-1 rounded-2xl text-[0.8rem]"> ${tag} </span>`)} </div> <div class="flex items-center justify-between gap-10 max-w-[300px]"> <!-- <Likes slug={content.id} server:defer>
          <LikeLoader slot="fallback" />
        </Likes> --> ${renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": content.data.pubDate })}`} </div> </div> </article> </a>`;
}, "/home/rosbeldev/portfolio/src/components/ArticleCard.astro", void 0);

const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${maybeRenderHead()}<section class="w-full max-w-[900px] dark:text-dark-text text-light-text flex flex-col gap-7 my-10"> ${renderComponent($$result, "Title", $$Title, { "text": "Articles" })} <div class="flex flex-col gap-10 items-center justify-center w-full"> ${posts.length === 0 ? renderTemplate`<p class="text-center dark:text-dark-text/50 text-light-text/50 text-xl fade-up py-10">
Nothing to show yet :(
</p>` : posts.map((post) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "content": post })}`)} </div> </section>`;
}, "/home/rosbeldev/portfolio/src/components/Articles.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      name: "NeusGen",
      url: "https://mvp.neusgen.com/",
      description: "Led the end\u2011to\u2011end development of an AI\u2011powered educational platform for high\u2011school students, enhancing personalized learning through adaptive content delivery and real\u2011time feedback."
    },
    {
      name: "Geofisik Tool",
      url: "https://tool.geofisik.com/",
      description: "Built a geophysical web application to monitor and analyze vertical displacements in structures over time, integrating interactive maps, time\u2011series charts, and automated anomaly detection."
    },
    {
      name: "EmoteShowcase",
      url: "https://emoteshowcase.com/",
      description: "Designed and developed a web app for visualizing and dynamically resizing emotes and badges, with support for live previews, batch processing, and export optimization for streaming platforms."
    },
    {
      name: "NeusWebs Developer",
      url: null,
      description: "Architected and implemented a comprehensive grade\u2011management system for school subjects, featuring role\u2011based access, customizable grading scales, and automated report generation."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full max-w-[900px] dark:text-dark-text text-light-text flex flex-col gap-7 my-10"> ${renderComponent($$result, "Title", $$Title, { "text": "Experience" })} <ul class="dark:text-dark-text/90 text-light-text/90 text-[1.2rem] fade-up py-10 flex flex-col items-center gap-10"> ${experiences.map(({ name, url, description }) => renderTemplate`<li class="border-l-[3px] dark:border-l-dark-text/30 border-l-light-text/30 pl-3"> ${url ? renderTemplate`<a${addAttribute(url, "href")} rel="nofollow noopener noreferrer" class="transition-all duration-200 hover:underline" target="_blank"> <strong>${name}</strong> <span aria-hidden="true">:</span> </a>` : renderTemplate`<strong>${name}:</strong>`}${" "} ${description} </li>`)} </ul> </section>`;
}, "/home/rosbeldev/portfolio/src/components/Experience.astro", void 0);

const $$Astro = createAstro("https://jorgerosbel.vercel.app");
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const techs = ["React", "Nextjs", "Astro", "Python", "TypeScript", "TailwindCSS", "Git", "GitHub"];
  return renderTemplate`${maybeRenderHead()}<section class="w-full max-w-[900px] dark:text-dark-text text-light-text flex flex-col gap-7 mb-20"> ${renderComponent($$result, "Title", $$Title, { "text": "Skills" })} <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7"> ${techs.map((skill) => renderTemplate`<div class="border border-light-text/30 dark:border-dark-text/30 h-10 fade-up flex items-center justify-center rounded bg-light-text/2 dark:bg-dark-text/2"> <p class="text-center dark:text-dark-text/80 text-light-text/80 text-[1.1rem] "> ${skill} </p> </div>`)} </div> </section>`;
}, "/home/rosbeldev/portfolio/src/components/Skills.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Articles", $$Articles, {})} ` })}`;
}, "/home/rosbeldev/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/rosbeldev/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
