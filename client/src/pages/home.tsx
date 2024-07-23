import { UIHeader } from "@/shared/ui/ui-header";
import { ToggleWatchingButton } from "@/features/toggle-watching/ui/toggle-watching-button";
import { Profile } from "@/widgets/profile";

export function HomePage() {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UIHeader right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleWatchingButton />
        </aside>
        <main className="px-5 pt-10">Watching List will be here</main>
      </div>
    </div>
  );
}
