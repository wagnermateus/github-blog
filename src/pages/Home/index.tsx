import { PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { HomeContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { IssueContexts } from "../../contexts/IssuesContexts";
const searchFormSchema = zod.object({
  content: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function Home() {
  const { handleSubmit, register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const { fecthIssues, totalPosts } = useContext(IssueContexts);

  function handleSearchIssue(data: SearchFormInputs) {
    fecthIssues(data.content);
  }
  return (
    <HomeContainer>
      <ProfileCard />
      <form onSubmit={handleSubmit(handleSearchIssue)}>
        <div>
          <strong>Publicações</strong>
          {totalPosts == 1 ? (
            <span>{totalPosts} publicação</span>
          ) : (
            <span>{totalPosts} publicações</span>
          )}
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("content")}
        />
      </form>
      <PostCard />
    </HomeContainer>
  );
}
