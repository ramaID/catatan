export const SITE = {
  website: "https://catatan.qisthi.dev/", // replace this with your deployed domain
  author: "Qisthi Ramadhani",
  profile: "https://qisthi.dev/",
  desc: "Catatan Qisthi: Personal reflections, insights, and lessons learned on life, technology, and everything in between.",
  title: "Catatan Qisthi",
  ogImage: "qisthi-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/ramaid/catatan/edit/main/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
