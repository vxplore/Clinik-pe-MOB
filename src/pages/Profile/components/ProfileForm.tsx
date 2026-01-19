import { ProfileField } from "./ProfileField";

export const ProfileForm = () => {
  return (
    <div className="px-4 pt-8 pb-6 space-y-4 ">
      <ProfileField label="Name" value="Mohan das" />

      <ProfileField
        label="Mobile"
        value="6295631554"
        action="CHANGE"
      />

      <ProfileField
        label="Email"
        value="gamermohan39@gmail.com"
        action="CHANGE"
      />

      {/* <ProfileField label="Date of birth" value="21/05/2004" />

      <ProfileField label="Anniversary" placeholder />

      <ProfileField label="Gender" dropdown /> */}

      <button
        disabled
        className="w-full mt-6 py-4 rounded-2xl bg-primary text-white font-medium"
      >
        Update profile
      </button>
    </div>
  );
};
