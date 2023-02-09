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
import { Link } from "react-router-dom";
interface PostInfoProps {
  title: string;
  comments: number;
  html_url: string;
  created_at: string;
  user: string;
}

export function PostInfo({
  title,
  comments,
  html_url,
  created_at,
  user,
}: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <a href={html_url} target="_blank">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostInfoHeader>
      <strong>{title}</strong>
      <PostInfoFooter>
        <PostInfoFooterContent>
          <FontAwesomeIcon icon={faGithub} />
          <span>{user}</span>
        </PostInfoFooterContent>
        <PostInfoFooterContent>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{created_at}</span>
        </PostInfoFooterContent>
        <PostInfoFooterContent>
          <FontAwesomeIcon icon={faComment} />
          <span>
            {comments == 1
              ? `${comments} comentário`
              : `${comments} comentários`}
          </span>
        </PostInfoFooterContent>
      </PostInfoFooter>
    </PostInfoContainer>
  );
}
