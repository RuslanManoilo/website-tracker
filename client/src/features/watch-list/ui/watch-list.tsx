import { UISpinner, UITextField } from "@/shared/ui";
import { useWatchListItems } from "../model/use-watch-list-items";
import { WatchListItem } from "./watch-list-item";

export function WatchList({ className }: { className?: string }) {
  const { q, setQ, items, isPending } = useWatchListItems();

  const isLoader = isPending;
  const isEmptyText = !isPending && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={className}>
      <UITextField
        className="mb-2"
        label="Search..."
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />
      <div className="rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3">
        {isLoader && <UISpinner className="text-teal-600 w-10 h-10 mx-auto" />}
        {isEmptyText && (
          <div className="text-xl py-1 text-center">List is empty...</div>
        )}
        {isItems &&
          items.map((item) => <WatchListItem key={item.id} {...item} />)}
      </div>
    </div>
  );
}
