interface Props {
  label: string;
  value?: string;
  action?: string;
  placeholder?: boolean;
  dropdown?: boolean;
}

export const ProfileField = ({
  label,
  value,
  action,
  placeholder,
  dropdown,
}: Props) => {
  return (
    <div className="space-y-0">
      <label className="text-sm text-gray-400">{label}</label>

      <div className="flex items-center justify-between bg-white rounded-xl px-4 py-4">
        {dropdown ? (
          <select className="w-full bg-transparent outline-none text-gray-700">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        ) : (
          <input
            readOnly
            placeholder={placeholder ? label : ""}
            value={value}
            className="w-full bg-transparent outline-none text-gray-700"
          />
        )}

        {action && (
          <span className="ml-3 text-sm font-semibold text-green-600">
            {action}
          </span>
        )}
      </div>
    </div>
  );
};
