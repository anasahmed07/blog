import { SiExpress, SiFacebook, SiGithub, SiInstagram, SiJavascript, SiLinkedin, SiMedium, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiTailwindcss, SiX, SiTypescript, SiPostman,} from '@icons-pack/react-simple-icons';

const skills = [
  { icon: SiJavascript },
  { icon: SiTypescript },
  { icon: SiNodedotjs },
  { icon: SiMysql },
  { icon: SiExpress },
  { icon: SiNextdotjs },
  { icon: SiTailwindcss },
  { icon: SiPython },
  { icon: SiPostman },
  { icon: SiNodedotjs }
];

const socials = [
  { icon: SiGithub, link: 'https://github.com/' },
  { icon: SiInstagram, link: 'https://www.instagram.com/' },
  { icon: SiLinkedin, link: 'https://www.linkedin.com/' },
  { icon: SiFacebook, link: 'https://www.facebook.com/' },
  { icon: SiX, link: 'https://twitter.com/' },
  { icon: SiMedium, link: 'https://medium.com/' }
];

import Link from 'next/link';

export default function AboutPage() {

  return (
    <div className="px-6 flex flex-col justify-center items-start max-w-3xl mx-auto my-10 w-full">

      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        About Me
      </h1>

      <div className="flex flex-col gap-4 mb-8 prose dark:prose-dark leading-6">
        <h6>Hey there! I&apos;m <strong>Anas Ahmed Shaikh</strong>. I&apos;m a software engineer currently living in <strong>Karachi, Pakistan.</strong></h6>
        <p>I grew up surrounded by technology and always had a passion for building things on the web. I studied programming and quickly fell in love with frontend development, especially using Next.js and Sanity CMS to create modern, dynamic websites and applications ✨. I&apos;m a big fan of TypeScript because it helps me build scalable and maintainable codebases.</p>
        <p>Before diving into web development, I wanted to create designs and visuals, but I found that I enjoyed building interactive and functional websites even more. That&apos;s why I now focus on building portfolio websites and e-commerce stores that combine great design with seamless performance 👨‍💻.</p>
        <p>In my free time, I love being outdoors, reading comics and books, and watching movies.</p>
        <p>If you want to learn more about me, check out my resume, timeline and please don&apos;t hesitate to contact me!</p>

        <Link href={"#"} target='blank'>
          <button className="flex items-center justify-center right-1 top-1 px-4 font-medium h-8 bg-primary dark:bg-secondary text-gray-100 rounded w-28" type="submit">
            Resume{' '}
            {
              <svg xmlns="http://www.w3.org/2000/svg" className="h-auto w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            }
          </button>
        </Link>

        <h4 className="text-3xl">Skills</h4>

        <div className="flex flex-wrap w-full flex-row gap-y-3">
          {skills.map((item, key) => {
            return (
              <div className="basis-10" key={key}>
                <item.icon className=" w-8 h-auto" />
              </div>
            );
          })}
        </div>

        <h4 className="text-3xl mb-0">Socials</h4>
        <p className="mb-2 mt-0">You can also follow my work, projects and occassional insights into my life on my social networks:</p>
        <div className="flex flex-wrap w-full flex-row gap-y-3">
              {socials.map((item, key) => {
                return (
                  <div className="basis-10" key={key}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon className="mx-2 w-8 h-auto" />
                    </Link>
                  </div>
                );
              })}
        </div>

        <h4 className="text-3xl">Work Experiences</h4>
        <p className="mb-2 mt-0">Here&apos;s a brief rundown of my most recent work experiences.</p>
        <div className="timeline mt-4 mb-6">
          <div className="relative pl-8 border-l border-gray-300 dark:border-gray-600">
            <div className="mb-6">
              <span className="absolute -left-3 top-1.5 w-6 h-6 bg-blue-300 rounded-full"></span>
              <h5 className="text-lg font-semibold">Frontend Developer at XYZ Corp</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">2022 - Present</p>
              <p>Developed and maintained web applications using React, Next.js, and TypeScript.</p>
            </div>
            <div className="mb-6 relative">
              <span className="absolute -left-11 top-1.5 w-6 h-6 bg-blue-300 rounded-full"></span>
              <h5 className="text-lg font-semibold">Web Developer at ABC Solutions</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">2020 - 2022</p>
              <p>Designed and implemented responsive e-commerce stores and portfolio websites.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}