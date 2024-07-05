import { Comment } from "../types/Comment";
import { getComments, addComment } from "../utils/dbSocket";
import { useState, useEffect } from "react";
const useComments = (id: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const uptadeComments = async () => {
    await setComments(await getComments(id));
  };

  useEffect(() => {
    uptadeComments();
  }, []);
  const addComent = async (comment: Partial<Comment>) => {
    if (comment.author?.trim() !== "" && comment.text?.trim() !== "") {
      setComments([
        { ...comment, id: Math.max(...comments.map((x) => x.id)) + 1 } as Comment,
        ...comments,
      ]);
    }
    await addComment(comment as Comment);
  };
  return { comments, addComent };
};

export default useComments;
