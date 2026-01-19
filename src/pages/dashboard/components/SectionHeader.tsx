interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

export default function SectionHeader({
  title,
  actionLabel,
  onActionClick,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-900">
        {title}
      </h2>

      {actionLabel && onActionClick && (
        <button
          onClick={onActionClick}
          className="text-xs text-primary"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}