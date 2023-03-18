import { useState } from "react";
import { Button } from "@/src/components/elements/Button";
import { Spinner } from "@/src/components/elements/Spinner";
import { useUserController } from "@/src/hooks/useUser";
import { BaseProps } from "@/src/types/BaseProps";
import clsx from "clsx";

export type LoginButtonProps = BaseProps;

/**
 * ログインボタン
 * @feature
 * @author keit
 * @param className 親要素から渡されたスタイル
 */
export const LoginButton = ({ className }: LoginButtonProps) => {
  const [loading, setLoading] = useState(false);
  const userController = useUserController();

  /**
   * ログインボタンを押したときに実行される関数
   */
  const handleClick = async () => {
    setLoading(true);
    try {
      await userController.login();
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
        setLoading(false);
        return;
      }
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <Button
      disable={loading}
      className={clsx(
        "w-[130px]",
        "h-[40px]",
        "rounded-full",
        "my-center",
        className,
      )}
      onClick={handleClick}
    >
      {loading ? (
        <Spinner className={clsx("w-[20px]", "h-[20px]", "border-[3px]")} />
      ) : (
        "LOGIN"
      )}
    </Button>
  );
};
