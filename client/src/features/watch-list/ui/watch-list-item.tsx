import { useDeleteWatchListItem } from "@/entities/watch-list";

export function WatchListItem({
  data,
  id,
  type,
}: {
  id: number;
  type: string;
  data: string;
}) {
  const deleteWatchListItemMutation = useDeleteWatchListItem();
  const handleRemove = () => {
    deleteWatchListItemMutation.mutate(id);
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="text-lg">{data}</div>
        <div className="text-slate-500">{type}</div>
      </div>
//
      <div className="flex-1 mx-auto max-w-96">
        <ProgressIndicator value={10800000} /> 
      </div>

      <button
        className="ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50 p-1"
        disabled={deleteWatchListItemMutation.isPending}
        onClick={handleRemove}
      >
        <Trash className="w-5 h-5" />
      </button>
    </div>
  );
}

const Trash = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
    />
  </svg>
);

const ProgressIndicator = ({ value }: { value: number }) => {
  const maxTime = 14400000;
  const percentage = Math.min((value / maxTime) * 100, 100);
  const progressBarColor = percentage > 75 ? "bg-red-500" : "bg-teal-500";

  return (
    <div className="w-full h-2 bg-gray-200 rounded">
      <div
        className={`h-2 rounded ${progressBarColor}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
