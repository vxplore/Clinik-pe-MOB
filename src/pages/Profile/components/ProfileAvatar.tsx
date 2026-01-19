import { Pencil } from "lucide-react";

export const ProfileAvatar = () => {
  return (
    <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
      <div className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
        />

        <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
          <Pencil size={18} />
        </button>
      </div>
    </div>
  );
};
