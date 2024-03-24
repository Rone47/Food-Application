import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"

const UserProfilePage = () => {

  const { currentUser, isLoading: isGetLoading } = useGetMyUser(); 

    const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

    if (isGetLoading) {
      return <span className="font-bold text-slate-500">Loading...</span>
      
    }

    if(!currentUser) {
      return <span className="font-bold text-red-700">Unable to load user profile</span>
    }
    return (
        <UserProfileForm
          currentUser={currentUser}
          onSave={updateUser}
          isLoading={isUpdateLoading}
        />
    )
}

export default UserProfilePage;