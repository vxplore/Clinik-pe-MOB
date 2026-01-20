import { Pencil } from "lucide-react";
interface ProfileAvatarProps {
  profileImage: string | null;
}

export const ProfileAvatar = ({ profileImage }: ProfileAvatarProps) => {
  return (
    <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
      <div className="relative">
        <img
          src={profileImage ?? "https://multilangbridge.in/uploads/website-images/frontend-avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
        />

        <button className="absolute bottom-0 right-0  rounded-full flex items-center justify-center ">
          <Pencil size={18} />
        </button>
      </div>
    </div>
  );
};
