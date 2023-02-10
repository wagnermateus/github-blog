import { MarkdownText, PostContainer, PostContent, PostHeader } from "./styles";
import ReactMarkdown from "react-markdown";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { IssueContexts } from "../../../../contexts/IssuesContexts";
import { Link } from "react-router-dom";
import { useContextSelector } from "use-context-selector";

export function PostCard() {
  const issues = useContextSelector(IssueContexts, (context) => {
    return context.issues;
  });

  return (
    <PostContainer>
      {issues.map((issue) => {
        return (
          <Link to={`/post/${issue.number}`} key={issue.number}>
            <PostContent>
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
                <ReactMarkdown
                  components={{
                    a: "span",
                  }}
                >
                  {issue.body}
                </ReactMarkdown>
              </MarkdownText>
            </PostContent>
          </Link>
        );
      })}
    </PostContainer>
  );
}
