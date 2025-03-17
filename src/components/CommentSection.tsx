
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, Reply, Flag } from "lucide-react";

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  postId: string;
  comments: Comment[];
}

const CommentItem = ({ comment }: { comment: Comment }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(comment.likes);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="pb-6 animate-fadeIn">
      <div className="flex space-x-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
          <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-sm">{comment.author.name}</h4>
                <p className="text-xs text-muted-foreground">{comment.date}</p>
              </div>
            </div>
            
            <p className="mt-2 text-sm">{comment.content}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-2 ml-1">
            <button 
              className="flex items-center text-xs text-muted-foreground hover:text-brand-blue transition-colors"
              onClick={handleLike}
            >
              <ThumbsUp 
                className={`h-3.5 w-3.5 mr-1.5 ${isLiked ? 'fill-brand-blue text-brand-blue' : ''}`} 
              />
              {likeCount}
            </button>
            
            <button 
              className="flex items-center text-xs text-muted-foreground hover:text-brand-blue transition-colors"
              onClick={() => setIsReplying(!isReplying)}
            >
              <Reply className="h-3.5 w-3.5 mr-1.5" />
              Reply
            </button>
            
            <button className="flex items-center text-xs text-muted-foreground hover:text-brand-blue transition-colors">
              <Flag className="h-3.5 w-3.5 mr-1.5" />
              Report
            </button>
          </div>
          
          {isReplying && (
            <div className="mt-3">
              <Textarea
                placeholder="Write a reply..."
                className="resize-none text-sm"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              />
              <div className="flex justify-end space-x-2 mt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsReplying(false)}
                >
                  Cancel
                </Button>
                <Button 
                  size="sm" 
                  className="bg-brand-blue hover:bg-brand-darkblue"
                >
                  Reply
                </Button>
              </div>
            </div>
          )}
          
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 pl-6 border-l-2 border-muted">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommentSection = ({ postId, comments }: CommentSectionProps) => {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="py-6" id="comments">
      <h3 className="text-xl font-semibold mb-6">Comments ({comments.length})</h3>
      
      <div className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          className="resize-none"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <div className="flex justify-end mt-2">
          <Button 
            className="bg-brand-blue hover:bg-brand-darkblue"
            disabled={!commentText.trim()}
          >
            Post Comment
          </Button>
        </div>
      </div>
      
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
