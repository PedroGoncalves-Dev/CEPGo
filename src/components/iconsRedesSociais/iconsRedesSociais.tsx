import { Github, Linkedin } from "lucide-react";

interface IiconsRedesSociaisProps {
  sizeLinkedin: number;
  sizeGitHub: number;
  classNameLinkedin: string;
  classNameGithub: string;
}
const IconsRedesSociais = ({
  sizeLinkedin,
  sizeGitHub,
  classNameLinkedin,
  classNameGithub,
}: IiconsRedesSociaisProps) => {
  const handleLink = (link: string) => {
    window.open(`${link}`, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Linkedin
        size={sizeLinkedin}
        className={`${classNameLinkedin}`}
        onClick={() =>
          handleLink("https://www.linkedin.com/in/pedrodev-goncalves/")
        }
      />
      <Github
        size={sizeGitHub}
        className={`${classNameGithub}`}
        onClick={() => handleLink("https://github.com/PedroGoncalves-Dev")}
      />
    </>
  );
};

export default IconsRedesSociais;
