import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileForm } from "./components/ProfileForm";
import { useProfile } from "./hooks/useProfile";

 const Profile = () => {
  const { profile, isLoading, error } = useProfile();
  return (
    <div className="min-h-auto rounded-2xl bg-gray-100">
      <ProfileHeader profile={profile} />
      <ProfileForm profile={profile} isLoading={isLoading} error={error}  />
    </div>
  );
};

export default Profile;