export const mockUser = [
  {
    userId: 1,
    id: 1,
    name: "Nicolat ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
  },
  {
    userId: 2,
    id: 3,
    name: "Jackson",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyuYw3SfFrDVZ7B_s96i20Z0BwW81GNZbpg&s",
  },
];

export const mockPost = [
  {
    userId: 1,
    id: 1,
    name: "Nicolat ",
    datepost: "20-1-2024 ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbLHp7AEs987OPJuIA4P5aiUcBqhDWNYO9A&s",
    body: "welcome to HTML, CSS and JS",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
    friendstatus: false,
  },
  {
    userId: 1,
    id: 2,
    name: "Nicolat ",
    datepost: "20-1-2024 ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbHmMQpPuZM734LKDAZTg9I70JlPQPetenEQ&s",
    body: "what do you know about bootstrap?  bootstrap is a great support library ",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
    friendstatus: false,
  },
  {
    userId: 2,
    id: 3,
    name: "Jackson",
    datepost: "15-6-2024 ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyuYw3SfFrDVZ7B_s96i20Z0BwW81GNZbpg&s",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbBKB9PQ37MtbmGDCA1YYWPz8X6zJkUcFkg&s",
    body: "Hello world, welcome to React.js",
    likes: "5 lượt thích",
    handlelike: true,
    comment: "3 ",
    share: "5 ",
    friendstatus: false,
  },
];

export const mockComments = [
  {
    postId: 1,
    name: "Alexander",
    body: "HTML is the backbone of any website, providing the basic structure and content.",
    like: false,
    commentId: 1,
    id: 12,
  },
  {
    postId: 1,
    name: "Eleanor",
    body: "CSS brings a website to life, transforming simple HTML frames into vibrant and attractive pages.",
    like: false,
    commentId: 2,
    id: 3,
  },
  {
    postId: 1,
    commentId: 3,
    id: 4,
    name: "Isabella",
    body: "Responsive design with CSS ensures your website looks perfect on all devices.",
    like: false,
  },
  {
    postId: 1,
    commentId: 4,
    id: 5,
    name: "Sebastian",
    body: "HTML5 offers many new tags and features that make building websites easier and more powerful.",
    like: false,
  },
  {
    postId: 1,
    commentId: 5,
    id: 6,
    name: "Aurora",
    body: "The combination of HTML and CSS is fundamental for creating intuitive and user-friendly interfaces.",
    like: false,
  },
  {
    postId: 2,
    commentId: 6,
    id: 7,
    name: "Julian",
    body: "ReactJS simplifies UI development with its component-based approach, making it efficient and effective.",
    like: false,
  },
  {
    postId: 2,
    commentId: 7,
    id: 8,
    name: "Olivia",
    body: "ReactJS allows for the creation of complex web applications easily due to its reusable components.",
    like: false,
  },
  {
    postId: 2,
    commentId: 8,
    id: 11,
    name: "Gabriel",
    body: "With strong community support and a rich ecosystem of libraries, ReactJS is a top choice for modern frontend projects.",
    like: false,
  },
];

export const mockGroup = [
  {
    GroupId: 1,
    id: 1,
    name: "Frontend Developer  ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
    coverimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbLHp7AEs987OPJuIA4P5aiUcBqhDWNYO9A&s",
    statusJoin: false,
  },
  {
    GroupId: 2,
    id: 2,
    name: "Backend Developer ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
    coverimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbLHp7AEs987OPJuIA4P5aiUcBqhDWNYO9A&s",
    statusJoin: false,
  },
  {
    GroupId: 3,
    id: 3,
    name: "Professional Designer",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
    coverimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbLHp7AEs987OPJuIA4P5aiUcBqhDWNYO9A&s",
    statusJoin: false,
  },
  {
    GroupId: 4,
    id: 4,
    name: "Fc Online ",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
    coverimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbLHp7AEs987OPJuIA4P5aiUcBqhDWNYO9A&s",
    statusJoin: false,
  },
  {
    GroupId: 5,
    id: 5,
    name: "Clash of clans",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsewwY20Vfyic7Aufc9q9PtWIxd2tPKyT_-Q&s",
    coverimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbLHp7AEs987OPJuIA4P5aiUcBqhDWNYO9A&s",
    statusJoin: false,
  },
];

export const mock3DPrinting = [
  {
    id: 1,
    name: "John Doe",
    title: "The Future of 3D Printing",
    userid: 101,
    avatar: "https://example.com/avatar1.png",
    body: "3D printing is revolutionizing manufacturing and prototyping.",
    category: "3DPrinting",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "3D Printing in Healthcare",
    userid: 102,
    avatar: "https://example.com/avatar2.png",
    body: "3D printing is being used to create custom prosthetics and implants.",
    category: "3DPrinting",
    likes: "5 lượt thích",
    handlelike: true,
    comment: "5 ",
    share: "5 ",
  },
];
export const mockProgramming = [
  {
    id: 6,
    name: "Dave Wilson",
    title: "Top 10 Programming Languages in 2024",
    userid: 106,
    avatar: "https://example.com/avatar6.png",
    body: "Learn about the most popular programming languages and their uses.",
    category: "programming",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
  },
  {
    id: 7,
    name: "Eve Davis",
    title: "Introduction to Python",
    userid: 107,
    avatar: "https://example.com/avatar7.png",
    body: "Python is a versatile language used for web development, data analysis, and more.",
    category: "programming",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
  },
];
export const mockTechNews = [
  {
    id: 11,
    name: "Isabel Clark",
    title: "Latest Innovations in Tech",
    userid: 111,
    avatar: "https://example.com/avatar11.png",
    body: "Discover the latest innovations and trends in the tech industry.",
    category: "techNews",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
  },
  {
    id: 12,
    name: "Jack Lewis",
    title: "Tech Startups to Watch",
    userid: 112,
    avatar: "https://example.com/avatar12.png",
    body: "A look at the most promising tech startups of the year.",
    category: "techNews",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
  },
];
export const mockArtificial = [
  {
    id: 16,
    name: "Nathan King",
    title: "AI in Everyday Life",
    userid: 116,
    avatar: "https://example.com/avatar16.png",
    body: "Artificial Intelligence is becoming an integral part of our daily lives.",
    category: "Artificial Intelligence",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
  },
  {
    id: 17,
    name: "Olivia Scott",
    title: "Machine Learning Basics",
    userid: 117,
    avatar: "https://example.com/avatar17.png",
    body: "Machine learning is a subset of AI that involves training algorithms to learn from data.",
    category: "Artificial Intelligence",
    likes: "5 lượt thích",
    handlelike: false,
    comment: "5 ",
    share: "5 ",
  },
];
