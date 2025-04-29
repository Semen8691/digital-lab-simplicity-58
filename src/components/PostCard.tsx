
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { MessageSquare, ThumbsUp } from "lucide-react";

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

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

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
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={handleLike}
          >
            <ThumbsUp 
              className={`h-4 w-4 ${isLiked ? 'fill-brand-blue text-brand-blue' : 'text-muted-foreground'}`} 
            />
          </Button>
          <span className="text-xs text-muted-foreground pr-1">{likeCount}</span>
          
          <Link to={`/post/${id}#comments`}>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </Button>
          </Link>
          <span className="text-xs text-muted-foreground pr-1">{comments}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
