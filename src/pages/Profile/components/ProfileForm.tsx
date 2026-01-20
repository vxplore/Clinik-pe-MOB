import type { ApiError } from "../../../apis/client/ApiError";
import { ProfileField } from "./ProfileField";
import { ProfileSkeleton } from "./ProfileSkeleton";
import { type ProfileResponse } from "../../../apis/modules/profile/profile.types";
interface ProfileFormProps {
  profile: ProfileResponse["profile"] | null;
  isLoading: boolean;
  error: ApiError | null;
}

export const ProfileForm = ({
  profile,
  isLoading,
  error,
}: ProfileFormProps) => {
  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return <div className="px-4 pt-8 text-red-600">{error.message}</div>;
  }

  if (!profile) {
    return null; // or fallback UI
  }
  console.log("Profile data:", profile);

  return (
    <div className="px-4 pt-8 pb-6 space-y-4">
      <ProfileField label="Name" value={profile.name} />

      <ProfileField label="Mobile" value={profile.mobile} action="CHANGE" />

      <ProfileField label="Email" value={profile.email} action="CHANGE" />

      <button
        disabled={isLoading}
        className="w-full mt-6 py-4 rounded-2xl bg-primary text-white font-medium disabled:opacity-50"
      >
        Update profile
      </button>
    </div>
  );
};
