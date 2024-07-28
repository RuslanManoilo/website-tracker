import { useWatchListQuery } from "@/entities/watch-list";
import { ToggleWatchingButton } from "@/features/toggle-watching/ui/toggle-watching-button";
import { AddWatchListItemForm, WatchList } from "@/features/watch-list";
import { UIHeader } from "@/shared/ui";
import { Profile } from "@/widgets/profile";

export function HomePage() {
  const { data } = useWatchListQuery({});

  return (
    <div className={`min-h-screen flex flex-col`}>
      <UIHeader right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleWatchingButton />
        </aside>
        <main className="px-5 pt-10">
          <h1 className="text-2xl mb-8">Watch List</h1>
          <AddWatchListItemForm />
          <WatchList className="mt-3" />
        </main>
      </div>
    </div>
  );
}
