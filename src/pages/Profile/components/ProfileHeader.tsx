import { ProfileAvatar } from "./ProfileAvatar";
interface ProfileHeaderProps {
  profile?: {
    profile_image: string | null;
  } | null;
}
export const ProfileHeader = ({ profile }: ProfileHeaderProps) => {
  return (
    <div className="relative  ">
      <ProfileAvatar profileImage={profile?.profile_image ?? null} />
      <div className="relative  rounded-2xl h-[100px] rounded-b-[48px] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient base */}
          <div className="absolute   inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 animate-pulse" />

          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-200/40 to-fuchsia-200/40 rounded-full blur-3xl animate-float-slower" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-float-reverse" />
        </div>
      </div>
    </div>
  );
};
