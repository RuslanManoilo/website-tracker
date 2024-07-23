import { useAccountQuery, useUpdateAccount } from "@/entities/account";

export function useToggleWatching() {
  const accountQuery = useAccountQuery();
  const updateAccountQuery = useUpdateAccount();

  const toggleWatching = () => {
    if (accountQuery.data) {
      updateAccountQuery.mutate({
        isMonitoringEnabled: !accountQuery.data?.isMonitoringEnabled,
      });
    }
  };

  return {
    toggleWatching,
    isWatchingEnabled: accountQuery.data?.isMonitoringEnabled ?? false,
    isPending: updateAccountQuery.isPending,
    isSuccess: accountQuery.isSuccess,
  };
}
