import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, selectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => (
        <button
          key={contact._id}
          className={`relative w-full rounded-xl px-3.5 py-3.5 text-left transition-all ${
            selectedUser?._id === contact._id
              ? "bg-[#e2e9f4]"
              : "hover:bg-[#e8eef7]"
          }`}
          onClick={() => setSelectedUser(contact)}
          type="button"
        >
          {selectedUser?._id === contact._id && (
            <span className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-[#0b5dd6]" />
          )}

          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src={contact.profilePic || "/avatar.png"}
                alt={contact.fullName}
                className="h-14 w-14 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 ${
                  selectedUser?._id === contact._id ? "border-[#e2e9f4]" : "border-[#f5f8fc]"
                } ${onlineUsers.includes(contact._id) ? "bg-emerald-500" : "bg-[#b3bdcd]"}`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-['Plus Jakarta Sans',sans-serif] text-base font-semibold text-[#1f2a37]">
                {contact.fullName}
              </p>
              <p className="truncate text-sm text-[#5f6d80]">
                {onlineUsers.includes(contact._id) ? "Online now" : "Tap to start chat"}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
export default ContactList;
