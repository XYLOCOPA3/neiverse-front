import { Spinner } from "@/src/components/elements/Spinner";
import { BaseProps } from "@/src/types/BaseProps";
import clsx from "clsx";

export type CommunityListLoadingProps = BaseProps;

/**
 * クエストリストローディング
 * @feature
 * @author keit
 * @param className 親要素から指定されたスタイル
 */
export const CommunityListLoading = ({
  className,
}: CommunityListLoadingProps) => {
  return (
    <div
      className={clsx(
        "mt-[100px]",
        "w-[100%]",
        "flex",
        "justify-center",
        className,
      )}
    >
      <Spinner className={clsx("h-[50px]", "w-[50px]", "border-[4px]")} />
    </div>
  );
};
