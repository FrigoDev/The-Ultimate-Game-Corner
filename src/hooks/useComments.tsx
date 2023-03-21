import { getComments, addComment } from "../utils/dbSocket";
import { useState, useEffect } from "react";
const useComments = (id:string) => {
  const [comments, setComments] = useState([]);
  const uptadeComments = async () => {
    await setComments(await getComments(id));
  };

  useEffect(() => {
    uptadeComments();
  }, []);
  const addComent = async (comment) => {
    if (comment.author.trim() !== "" && comment.text.trim() !== "") {
      setComments([
        { ...comment, id: Math.max(...comments.map((x) => x.id)) + 1 },
        ...comments
      ]);
    }
    await addComment(comment);
  };
  return { comments, addComent };
};

export default useComments;
