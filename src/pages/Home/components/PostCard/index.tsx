import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { MarkdownText, PostContainer, PostContent, PostHeader } from "./styles";
import ReactMarkdown from "react-markdown";
import { dateFormatter } from "../../../../utilis/formatter";

interface Issues {
  number: number;
  title: string;
  created_at: Date;
  body: string;
}

export function PostCard() {
  const [issues, setIssues] = useState<Issues[]>([]);

  async function feecthIssues() {
    const response = await api.get(
      "/search/issues?q=repo:wagnermateus/github-blog"
    );

    const data = response.data.items;

    setIssues(data);
  }

  useEffect(() => {
    feecthIssues();
  }, []);

  return (
    <PostContainer>
      {issues.map((issue) => {
        return (
          <PostContent key={issue.number}>
            <PostHeader>
              <strong>{issue.title}</strong>
              <span>{dateFormatter.format(new Date(issue.created_at))}</span>
            </PostHeader>
            <MarkdownText>
              <ReactMarkdown>{issue.body}</ReactMarkdown>
            </MarkdownText>
          </PostContent>
        );
      })}
    </PostContainer>
  );
}
