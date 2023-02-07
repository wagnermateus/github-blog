import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  PostInfoContainer,
  PostInfoFooter,
  PostInfoFooterContent,
  PostInfoHeader,
} from "./styles";

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <a href="">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </a>
        <a href="">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostInfoHeader>
      <strong>JavaScript data types and data structures</strong>
      <PostInfoFooter>
        <PostInfoFooterContent>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </PostInfoFooterContent>
        <PostInfoFooterContent>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </PostInfoFooterContent>
        <PostInfoFooterContent>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </PostInfoFooterContent>
      </PostInfoFooter>
    </PostInfoContainer>
  );
}
