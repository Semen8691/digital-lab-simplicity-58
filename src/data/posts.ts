
import { PostCardProps } from "@/components/PostCard";
import { Comment } from "@/components/CommentSection";

// Sample comments data
export const sampleComments: Comment[] = [
  {
    id: "comment1",
    author: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    content: "This is a really insightful article. I particularly appreciated the analysis of how this technology could impact everyday users.",
    date: "2 hours ago",
    likes: 12,
    replies: [
      {
        id: "reply1",
        author: {
          name: "Maya Rodriguez",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
        content: "I agree! The implications for privacy are especially interesting.",
        date: "1 hour ago",
        likes: 4,
      },
    ],
  },
  {
    id: "comment2",
    author: {
      name: "Sam Wilson",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    content: "I wonder how this will affect the industry in the long term. Has anyone seen similar technology being implemented elsewhere?",
    date: "5 hours ago",
    likes: 7,
  },
  {
    id: "comment3",
    author: {
      name: "Taylor Kim",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    content: "Great article, but I think there are some potential downsides that weren't fully addressed. Especially concerning the environmental impact.",
    date: "1 day ago",
    likes: 15,
    replies: [
      {
        id: "reply2",
        author: {
          name: "Jordan Chen",
          avatar: "https://i.pravatar.cc/150?img=12",
        },
        content: "Excellent point about the environmental concerns. I've been researching this area and found similar issues.",
        date: "18 hours ago",
        likes: 8,
      },
    ],
  },
];

// Sample posts data
export const posts: PostCardProps[] = [
  {
    id: "post1",
    title: "The Future of Artificial Intelligence in Everyday Life",
    excerpt: "How machine learning algorithms are quietly transforming our daily routines and what it means for society.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1677442135701-1451e36f4178?q=80&w=1932&auto=format&fit=crop",
    author: {
      name: "Emma Clarke",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    date: "Jun 15, 2023",
    readTime: "6 min read",
    likes: 243,
    comments: 28,
  },
  {
    id: "post2",
    title: "Sustainable Computing: Green Technologies Reshaping Data Centers",
    excerpt: "Exploring how sustainable practices are being implemented in data centers around the world to reduce carbon footprints.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    author: {
      name: "Daniel Park",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    date: "Jun 12, 2023",
    readTime: "8 min read",
    likes: 189,
    comments: 16,
  },
  {
    id: "post3",
    title: "The Evolution of User Interface Design: From Command Line to Voice",
    excerpt: "A journey through the history of UI design and how it continues to evolve with new technologies and user expectations.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=1974&auto=format&fit=crop",
    author: {
      name: "Sophia Martinez",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    date: "Jun 10, 2023",
    readTime: "5 min read",
    likes: 165,
    comments: 12,
  },
  {
    id: "post4",
    title: "Quantum Computing: Breaking Down Complex Problems",
    excerpt: "How quantum computing is solving previously impossible computational challenges and its implications for various industries.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Michael Johnson",
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    date: "Jun 8, 2023",
    readTime: "7 min read",
    likes: 210,
    comments: 22,
  },
  {
    id: "post5",
    title: "Digital Privacy in the Age of Social Media",
    excerpt: "Understanding the complex balance between connectivity and privacy in our increasingly digital world.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1968&auto=format&fit=crop",
    author: {
      name: "Olivia Williams",
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    date: "Jun 6, 2023",
    readTime: "5 min read",
    likes: 178,
    comments: 19,
  },
  {
    id: "post6",
    title: "The Rise of Blockchain Technology Beyond Cryptocurrency",
    excerpt: "Exploring how blockchain is being applied to solve problems in supply chain, healthcare, and other industries.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop",
    author: {
      name: "William Chen",
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    date: "Jun 4, 2023",
    readTime: "6 min read",
    likes: 154,
    comments: 14,
  },
];

// Full post content for individual post pages
export const getPostById = (id: string) => {
  const post = posts.find(post => post.id === id);
  if (!post) return null;
  
  // Extended content for full post view
  return {
    ...post,
    content: `
      <p class="mb-4">Technology continues to evolve at an unprecedented pace, transforming how we live, work, and interact with the world around us. From artificial intelligence and blockchain to quantum computing and beyond, the digital landscape is constantly shifting, bringing both opportunities and challenges.</p>
      
      <p class="mb-4">In recent years, we've witnessed remarkable advancements in machine learning algorithms, natural language processing, and computer vision. These technologies are no longer confined to research labs or specialized applications; they're becoming increasingly integrated into our everyday lives, often in ways that are subtle yet profoundly impactful.</p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">The Quiet Revolution</h2>
      
      <p class="mb-4">Consider the devices and applications you interact with daily. Your smartphone suggests routes based on current traffic conditions, streaming services recommend content tailored to your preferences, and voice assistants respond to increasingly complex commands. Behind these conveniences are sophisticated algorithms constantly learning and adapting to provide more personalized experiences.</p>
      
      <p class="mb-4">This quiet revolution extends beyond consumer applications. In healthcare, AI systems are helping diagnose diseases from medical images with remarkable accuracy. In agriculture, data-driven approaches are optimizing crop yields while minimizing environmental impact. In manufacturing, predictive maintenance is reducing downtime and extending equipment lifespan.</p>
      
      <figure class="my-8">
        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop" alt="Futuristic technology concept" class="rounded-lg w-full" />
        <figcaption class="text-sm text-muted-foreground mt-2 text-center">The boundaries between digital and physical worlds continue to blur as technology advances.</figcaption>
      </figure>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Ethical Considerations</h2>
      
      <p class="mb-4">As these technologies become more pervasive, important ethical questions arise. Who owns the data collected about us? How can we ensure algorithms don't perpetuate or amplify existing biases? What happens to privacy in a world of ubiquitous sensors and always-on devices?</p>
      
      <p class="mb-4">These questions don't have easy answers, but they're essential to address as we navigate the rapidly evolving technological landscape. The decisions we make today about how we develop, deploy, and regulate these technologies will shape society for generations to come.</p>
      
      <blockquote class="border-l-4 border-brand-blue pl-4 italic my-6">
        "The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it." — Mark Weiser
      </blockquote>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">Looking Ahead</h2>
      
      <p class="mb-4">The pace of technological change shows no signs of slowing. Emerging fields like quantum computing promise to solve complex problems beyond the capabilities of classical computers. Advances in biotechnology are blurring the lines between the digital and biological worlds. Extended reality technologies are creating new ways to experience and interact with information.</p>
      
      <p class="mb-4">As we look to the future, one thing is clear: adaptability will be essential. The ability to learn continuously, think critically, and engage thoughtfully with new technologies will be crucial skills for navigating the world of tomorrow.</p>
      
      <p class="mb-4">By fostering digital literacy and maintaining a focus on human needs and values, we can ensure that technology serves as a force for positive change in our lives and communities.</p>
    `,
  };
};
