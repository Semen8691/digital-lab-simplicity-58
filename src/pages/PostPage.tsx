
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommentSection from "@/components/CommentSection";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPostById, sampleComments } from "@/data/posts";
import { ArrowLeft, ThumbsUp } from "lucide-react";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = id ? getPostById(id) : null;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post ? post.likes : 0);
  
  useEffect(() => {
    if (!post) {
      navigate("/404");
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
    
    // Smooth scroll to the top after liking
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (!post) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-8 text-brand-blue hover:bg-brand-blue/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </Button>
          
          <article className="animate-fadeIn">
            <div className="mb-6">
              <span className="bg-brand-blue/90 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{post.title}</h1>
              
              <div className="flex items-center justify-between pb-6 border-b border-border/30">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover rounded-xl mb-8"
              />
              
              <div 
                className="prose max-w-none prose-img:rounded-lg prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
            
            <div className="flex items-center space-x-4 py-4 border-t border-b border-border/30 my-8">
              <div className="flex items-center mr-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="rounded-full" 
                  onClick={handleLike}
                >
                  <ThumbsUp className={`h-5 w-5 mr-2 ${isLiked ? 'fill-brand-blue text-brand-blue' : ''}`} />
                  Нравится
                </Button>
                <span className="text-sm text-muted-foreground ml-1">{likeCount}</span>
              </div>
            </div>
            
            <CommentSection postId={post.id} comments={sampleComments} />
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PostPage;
