import profileImg from "../../../../assets/profileImg.svg";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  ProfileBioContainer,
  ProfileCardContainer,
  ProfileContent,
  ProfileFooter,
  ProfileFooterContent,
  ProfileHeader,
  ProfileImage,
} from "./styles";

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfileImage>
        <img src={profileImg} alt="" />
      </ProfileImage>
      <ProfileContent>
        <ProfileHeader>
          <strong>Cameron Williamson</strong>
          <a href="">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <ProfileBioContainer>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </ProfileBioContainer>
        <ProfileFooter>
          <ProfileFooterContent>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </ProfileFooterContent>
          <ProfileFooterContent>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </ProfileFooterContent>
          <ProfileFooterContent>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </ProfileFooterContent>
        </ProfileFooter>
      </ProfileContent>
    </ProfileCardContainer>
  );
}
