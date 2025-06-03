
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  likes: number;
  comments: number;
}

const PostCard = ({
  id,
  title,
  excerpt,
  category,
  image,
  author,
  date,
  readTime,
  likes,
  comments,
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const isMobile = useIsMobile();

  const handleLike = (e: React.MouseEvent) => {
    // Stop propagation to prevent navigation
    e.preventDefault();
    e.stopPropagation();
    
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  if (isMobile) {
    return (
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden animate-fadeIn">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-brand-blue/90 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <Link to={`/post/${id}`} className="group">
              <h3 className="text-white font-semibold leading-tight group-hover:text-white/80 transition-colors text-left text-lg">
                {title}
              </h3>
            </Link>
          </div>
        </div>
        
        <CardFooter className="border-t border-border/30 pt-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-medium">{author.name}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="flex items-center h-6 w-6 justify-center">
              <ThumbsUp 
                className={`h-3 w-3 ${isLiked ? 'fill-brand-blue text-brand-blue' : 'text-muted-foreground'} cursor-pointer`}
                onClick={handleLike}
              />
            </div>
            <span className="text-xs text-muted-foreground pr-1">{likeCount}</span>
            
            <div className="flex items-center h-6 w-6 justify-center">
              <MessageSquare className="h-3 w-3 text-muted-foreground" />
            </div>
            <span className="text-xs text-muted-foreground pr-1">{comments}</span>
          </div>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden animate-fadeIn">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-blue/90 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      <CardHeader className="pb-2 pt-4">
        <Link to={`/post/${id}`} className="group">
          <h3 className="text-xl font-semibold leading-tight group-hover:text-brand-blue transition-colors">
            {title}
          </h3>
        </Link>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="border-t border-border/30 pt-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-muted-foreground">{date} · {readTime}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <div className="flex items-center h-8 w-8 justify-center">
            <ThumbsUp 
              className={`h-4 w-4 ${isLiked ? 'fill-brand-blue text-brand-blue' : 'text-muted-foreground'} cursor-pointer`}
              onClick={handleLike}
            />
          </div>
          <span className="text-xs text-muted-foreground pr-1">{likeCount}</span>
          
          <div className="flex items-center h-8 w-8 justify-center">
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </div>
          <span className="text-xs text-muted-foreground pr-1">{comments}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
