import Image from "next/image";
import * as Styles from "./Avatar.styles";

type AvatarProps = {
  alt: string;
  src: string;
};

const Avatar = ({ alt, src }: AvatarProps) => {
  return (
    <Styles.Avatar>
      <Image alt={alt} height="32" src={src} width="32" />
    </Styles.Avatar>
  );
};

export default Avatar;
