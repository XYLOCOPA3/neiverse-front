import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export type LogoProps = {
  className?: string;
};

/**
 * ロゴ
 * @component
 * @author keit
 * @param className 親要素から渡されたスタイル
 */
export const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href="/"
      className={clsx("flex", "items-center", "justify-center", className)}
    >
      <Image
        className={clsx("md:hidden")}
        src="/img/neiverse-name-white.png"
        alt="logoicon"
        width={120}
        height={50}
      />
      <Image
        className={clsx("hidden", "md:ml-[20px]", "md:inline")}
        src="/img/neiverse-logo-white.png"
        alt="logotext"
        width={200}
        height={50}
      />
    </Link>
  );
};
