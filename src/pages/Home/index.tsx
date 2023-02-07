import { PostCard } from "./components/PostCard";
import { ProfileCard } from "./components/ProfileCard";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />
      <form>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
      <PostCard />
    </HomeContainer>
  );
}
