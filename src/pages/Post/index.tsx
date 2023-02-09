import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { api } from "../../lib/axios";
import { PostInfo } from "./components/PostInfoCard";
import { PostContainer, PostContent } from "./styles";

interface PostProps {
  title: string;
  body: string;
  comments: number;
  html_url: string;
}

export function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<PostProps>({} as PostProps);
  const [userName, setUserName] = useState("");
  const [postDate, setPostDate] = useState("");

  const { issueNumber } = useParams();

  async function GetPost() {
    const response = await api.get(
      `repos/wagnermateus/github-blog/issues/${issueNumber}}`
    );
    const data = response.data;

    setPost(data);

    setUserName(data.user.login);

    setPostDate(
      formatDistanceToNow(new Date(data.created_at), {
        addSuffix: true,
        locale: ptBR,
      })
    );

    setIsLoading(false);
  }
  useEffect(() => {
    GetPost();
  }, []);

  if (isLoading) {
    return (
      <SyncLoader
        color="#fff"
        size={15}
        cssOverride={{ justifyContent: "center", alignItems: "center" }}
      />
    );
  } else {
    return (
      <PostContainer>
        <PostInfo
          user={userName}
          comments={post.comments}
          title={post.title}
          html_url={post.html_url}
          created_at={postDate}
        />
        <PostContent>
          <article>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </article>
        </PostContent>
      </PostContainer>
    );
  }
}
