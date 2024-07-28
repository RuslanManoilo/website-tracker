import { UIButton } from "@/shared/ui";
import { useToggleWatching } from "../model/use-toggle-watching";

export function ToggleWatchingButton() {
  const { toggleWatching, isWatchingEnabled, isPending, isSuccess } =
    useToggleWatching();

  if (!isSuccess) return null;

  return (
    <UIButton
      disabled={isPending}
      variant={!isWatchingEnabled ? "primary" : "secondary"}
      onClick={toggleWatching}
    >
      {isWatchingEnabled ? "Stop Watching" : "Start Watching"}
    </UIButton>
  );
}
