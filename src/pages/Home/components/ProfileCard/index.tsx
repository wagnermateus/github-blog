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
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface UserData {
  name: string;
  followers: number;
  bio: string;
  company: string;
  login: string;
  avatar_url: string;
  html_url: string;
}

export function ProfileCard() {
  const [userData, setUserData] = useState<UserData>({} as UserData);

  async function fetchUserData() {
    const response = await api.get("users/wagnermateus");

    const data = response.data;

    setUserData(data);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <ProfileCardContainer>
      <ProfileImage>
        <img src={userData.avatar_url} alt="" />
      </ProfileImage>
      <ProfileContent>
        <ProfileHeader>
          <strong>{userData.name}</strong>
          <a href={userData.html_url} target="_blank">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <ProfileBioContainer>
          <p>{userData.bio}</p>
        </ProfileBioContainer>
        <ProfileFooter>
          <ProfileFooterContent>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData.login}</span>
          </ProfileFooterContent>
          <ProfileFooterContent>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{userData.company}</span>
          </ProfileFooterContent>
          <ProfileFooterContent>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {userData.followers === 1
                ? `${userData.followers} seguidor`
                : `${userData.followers} seguidores`}{" "}
            </span>
          </ProfileFooterContent>
        </ProfileFooter>
      </ProfileContent>
    </ProfileCardContainer>
  );
}
