import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_CiYCKlPB.mjs';
import 'kleur/colors';
import 'clsx';

const $$Banner = createComponent(async ($$result, $$props, $$slots) => {
  const fetchGithubStars = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/JorgeRosbel/repos?per_page=100&page=1"
      );
      const data = await response.json();
      if (response.status !== 200) {
        if (response.status === 403 || response.status === 429) {
          return { value: null, error: "Too many requests" };
        }
        if (response.status === 500) {
          return { value: null, error: "Unable to retrieve data" };
        } else {
          return { value: null, error: "An unexpected error occurred. Please try again later" };
        }
      }
      const stars = data.reduce((acc, curr) => {
        return acc + curr.stargazers_count;
      }, 0);
      return { value: stars, error: null };
    } catch (error2) {
      throw error2;
    }
  };
  const { value, error } = await fetchGithubStars();
  const elements = [
    { data: "2+", label: "Years of Experience" },
    { data: "10+", label: "Projects Completed" },
    { data: `${value ? value : "???"}+`, label: value ? "Github Stars" : error }
  ];
  return renderTemplate`${maybeRenderHead()}<article class="w-full grid grid-cols-1 md:grid-cols-3 mt-12 border-y py-10 dark:border-dark-text/10 border-light-text/10 gap-6 fade-up"> ${elements.map((element) => renderTemplate`<div class="flex flex-col gap-3 items-center"> <span class="text-5xl font-bold dark:text-dark-text text-light-text">${element.data}</span> <span class="font-semibold dark:text-dark-text/80 text-light-text/80">${element.label}</span> </div>`)} </article>`;
}, "/home/rosbeldev/portfolio/src/components/Banner.astro", void 0);

const $$file = "/home/rosbeldev/portfolio/src/components/Banner.astro";
const $$url = undefined;

export { $$Banner as default, $$file as file, $$url as url };
