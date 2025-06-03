
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import CommentSection from "@/components/CommentSection";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getPostById, sampleComments } from "@/data/posts";
import { ArrowLeft, ThumbsUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
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
  
  const handleLike = (e: React.MouseEvent) => {
    // Prevent any default behavior
    e.preventDefault();
    
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
  
  if (!post) return null;

  return (
    <div className={`min-h-screen flex flex-col ${isMobile ? 'pb-20' : ''}`}>
      <Header />
      
      <main className={`flex-grow ${isMobile ? 'pt-16' : 'pt-24'}`}>
        <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? 'pb-4' : ''}`}>
          <div className={`flex items-start gap-4 mb-8 ${isMobile ? 'flex-col' : ''}`}>
            <Button
              variant="secondary"
              size={isMobile ? "sm" : "default"}
              className="text-white bg-brand-blue hover:bg-brand-blue/80 font-medium px-6 py-2 text-base"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Назад
            </Button>
            
            <Button 
              variant="outline" 
              size={isMobile ? "sm" : "default"}
              className={`flex items-center space-x-2 ${isLiked ? 'border-brand-blue text-brand-blue' : ''}`}
              onClick={handleLike}
            >
              <ThumbsUp className={`h-5 w-5 ${isLiked ? 'fill-brand-blue' : ''}`} />
              <span>{likeCount}</span>
            </Button>
          </div>
          
          <article className="animate-fadeIn">
            <div className="mb-6">
              <span className="bg-brand-blue/90 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                {post.category}
              </span>
              <h1 className={`font-bold mt-4 mb-6 ${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>{post.title}</h1>
              
              <div className="flex items-center justify-between pb-6 border-b border-border/30">
                <div className="flex items-center space-x-4">
                  <Avatar size={isMobile ? "sm" : "default"}>
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <p className={`font-medium ${isMobile ? 'text-sm' : ''}`}>{post.author.name}</p>
                    <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>
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
                className={`prose max-w-none prose-img:rounded-lg prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed ${isMobile ? 'prose-sm' : ''}`}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
            
            <div className="flex items-center space-x-4 py-4 border-t border-b border-border/30 my-8">
              <div className="flex items-center mr-6">
                <Button 
                  variant="ghost" 
                  size={isMobile ? "sm" : "default"}
                  className="rounded-full" 
                  onClick={handleLike}
                >
                  <ThumbsUp className={`h-5 w-5 mr-2 ${isLiked ? 'fill-brand-blue text-brand-blue' : ''}`} />
                  Нравится
                </Button>
                <span className={`text-muted-foreground ml-1 ${isMobile ? 'text-xs' : 'text-sm'}`}>{likeCount}</span>
              </div>
            </div>
            
            <CommentSection postId={post.id} comments={sampleComments} />
          </article>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
