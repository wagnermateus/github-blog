import { PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { HomeContainer } from "./styles";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IssueContexts } from "../../contexts/IssuesContexts";
import { SyncLoader } from "react-spinners";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = zod.object({
  content: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function Home() {
  const { handleSubmit, register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const fecthIssues = useContextSelector(IssueContexts, (context) => {
    return context.fecthIssues;
  });
  const homepageDataIsLoading = useContextSelector(IssueContexts, (context) => {
    return context.homepageDataIsLoading;
  });
  const totalPosts = useContextSelector(IssueContexts, (context) => {
    return context.totalPosts;
  });

  function handleSearchIssue(data: SearchFormInputs) {
    fecthIssues(data.content);
  }
  if (homepageDataIsLoading) {
    return (
      <SyncLoader
        color="#fff"
        size={15}
        cssOverride={{ justifyContent: "center", alignItems: "center" }}
      />
    );
  } else {
    return (
      <HomeContainer>
        <ProfileCard />
        <form onSubmit={handleSubmit(handleSearchIssue)}>
          <div>
            <strong>Publicações</strong>
            <span>
              {totalPosts == 1
                ? `${totalPosts} publicação`
                : `${totalPosts} publicações`}
            </span>
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
}
