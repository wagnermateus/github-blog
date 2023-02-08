import { useContext } from "react";
import { MarkdownText, PostContainer, PostContent, PostHeader } from "./styles";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { IssueContexts } from "../../../../contexts/IssuesContexts";

export function PostCard() {
  const { issues } = useContext(IssueContexts);

  return (
    <PostContainer>
      {issues.map((issue) => {
        return (
          <PostContent key={issue.number}>
            <PostHeader>
              <strong>{issue.title}</strong>
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
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
