export default {
  site: {
    siteMetadata: {
      title: "a forest of links",
      description: "don't get lost",
      author: "@yantonsoup",
      siteSocials: [
        {
          name: "github",
          linkTo: "https://github.com/yantonsoup",
        },
        {
          name: "linkedin",
          linkTo: "https://linkedin.com/in/ygoldobin",
        },
        {
          name: "medium",
          linkTo: "https://medium.com/@yaniv_g",
        },
        {
          name: "twitter",
          linkTo: "https://twitter.com/yan_iiv",
        },
      ],
    },
  },
  prismic: {
    about: {
      image_of_me:
        "https://images.prismic.io/dot-online/591242e8-1e66-4d6e-b404-ee4d071ff28a_me.png?auto=compress,format&rect=0,0,2452,2452&w=100&h=100",
      text: "Hello! I'm Yaniv. I write code sometimes. This website is a collection of my more fully-formed side projects. I try and make all my code open source on github whenever possible.",
      github: "https://github.com/yantonsoup",
      url: "https://www.linkedin.com/in/ygoldobin/",
      education_rich_field: [
        {
          title:
            "California Polytechnic State UniversitFy at San Luis Obispo, 2011 - 2015",
          text: "Bachelor of  Science, Electrical Engineering",
        },
        {
          title: "School of Machines, Making & Make-Believe, 2019",
          text: "Art & Technology Studies in Berlin ",
        },
      ],
    },
    projects: [
      {
        slug: "dispersion",
        project_title: "Dispersion.js ",
        project_text:
          "This was a project I worked on with a team of 3 other engineers. We built DispersionJS, essentially an electron application and library that serves as a GUI for publishing website to the awesome distributed storage system called the Interplanetary File System (IPFS for short). See my writeup on medium.",
        blog_url:
          "https://medium.com/@yaniv_g/hosting-websites-on-ipfs-with-ipns-b94659c42b52",
        project_subtitle: "An Electron App and Library to Interface with IPFS",
        project_website: "https://github.com/dispersionjs/dispersion",
        project_image:
          "https://images.prismic.io/dot-online/2db5f64f-a9d4-44b2-a614-50dc9fba5165_dispersion_min.jpg?auto=compress,format",
        project_video: null,
      },
      {
        slug: "ussr",
        project_title: "After The USSR",
        project_text:
          "This is a project that took me a while to get right. The original impetus behind it was to learn d3.js by picking a topic that had a small enough dataset to learn with and try to animate some map interactions and graphs. Utilizes Scrollama.js, d3.js, and Chroma.js for the visuals. I wrote the story myself by digging around the internet.",
        project_subtitle:
          "A data-driven essay that explores post-soviet migration patterns",
        project_website: "https://aftertheussr.com",
        project_video:
          "https://prismic-io.s3.amazonaws.com/dot-online/1ac523fa-eba2-4cb7-a4e5-829d7a74fd65_after_1366_5.4s_10fps.mp4",
      },
      {
        slug: "sperry",
        project_title: "Scotts Portfolio",
        project_text:
          "Scott Perry was looking for a new website to showcase his work as a Director.  Offloads dealing with all video buffering and loading to Vimeo which is neat for a very video-heavy site, it keeps it nice and snappy in both mobile and desktop. ",
        project_subtitle:
          "Director Scott Perry was looking for a new portfolio website",
        project_website: "https://sperry.work",
        project_video:
          "https://prismic-io.s3.amazonaws.com/dot-online/4208d5c7-3e57-4aaf-ba5d-c411c35b29f3_sperry_1366_3.9s_10fps.mp4",
      },
      {
        slug: "terminal",
        project_title: "Yaniv Online",
        project_text: "The oldest, nerdiest iteration of my portfolio.",
        project_subtitle: "An old portfolio in the shape of a terminal",
        project_website: "https://www.yaniv.online",
        project_image: null,
        project_video:
          "https://prismic-io.s3.amazonaws.com/dot-online/843db246-a716-474d-9378-4faf96fba1ea_terminal_1366_5.0s_10fps.mp4",
      },
//       {
//         node: {
//           slug: "twinay",
//           project_title: "This Website Is Not About You",
//           project_text:
//             "What does it feel like when a website asks you to contribute, without offering anything in return? ",
//           project_subtitle: "Selfless Contributions",
//           project_website: "http://www.thiswebsiteisnotaboutyou.com/",
//           project_image: null,
//           project_video: null,
//         },
//       },
    ],
  },
}
