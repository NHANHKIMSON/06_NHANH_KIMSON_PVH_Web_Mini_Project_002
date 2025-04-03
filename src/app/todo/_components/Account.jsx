import { Notification } from "iconsax-react";

export default function Account({ username, email, profile }) {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <Notification size="24" color="black" />
        <div>
          <img
            src={profile}
            alt="Profile"
            className="object-cover rounded-full w-8 h-8"
          />
        </div>
        <div>
          <h4>{username}</h4>
          <p className="text-cyan-500">{email}</p>
        </div>
      </div>
    </>
  );
}
