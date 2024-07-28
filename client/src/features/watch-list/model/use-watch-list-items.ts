import { useWatchListQuery } from "@/entities/watch-list";
import { useDebauncedValue } from "@/shared/lib/debaunce";
import { useState } from "react";

export function useWatchListItems() {
  const [q, setQ] = useState("");

  const watchListQuery = useWatchListQuery({ q: useDebauncedValue(q, 500) });
  const items = watchListQuery.data?.items ?? [];

  return {
    q,
    setQ,
    items,
    isPending: watchListQuery.isPending,
  };
}
