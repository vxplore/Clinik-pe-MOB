import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileForm } from "./components/ProfileForm";

 const Profile = () => {
  return (
    <div className="min-h-auto rounded-2xl bg-gray-100">
      <ProfileHeader />
      <ProfileForm />
    </div>
  );
};

export default Profile;