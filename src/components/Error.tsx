import { useUIStore } from "../stores/ui.store";

export default function Error() {
  const { error, clearError } = useUIStore();

  if (!error) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-red-50 text-red-700 p-3 rounded-md text-sm">
      {error}
      <button
        onClick={clearError}
        className="ml-2 underline"
      >
        Dismiss
      </button>
    </div>
  );
}
