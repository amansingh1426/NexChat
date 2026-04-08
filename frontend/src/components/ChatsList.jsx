import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser, selectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  const formatMetaTime = (dateValue) => {
    if (!dateValue) return "";

    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return "";

    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
      return date
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        .replace(/\s/g, "")
        .toUpperCase();
    }

    return date.toLocaleDateString([], { weekday: "short" }).toUpperCase();
  };

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <button
          key={chat._id}
          className={`relative w-full rounded-xl px-3.5 py-3.5 text-left transition-all ${
            selectedUser?._id === chat._id
              ? "bg-[#e2e9f4]"
              : "hover:bg-[#e8eef7]"
          }`}
          onClick={() => setSelectedUser(chat)}
          type="button"
        >
          {selectedUser?._id === chat._id && (
            <span className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-[#0b5dd6]" />
          )}

          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src={chat.profilePic || "/avatar.png"}
                alt={chat.fullName}
                className="h-14 w-14 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 ${
                  selectedUser?._id === chat._id ? "border-[#e2e9f4]" : "border-[#f5f8fc]"
                } ${onlineUsers.includes(chat._id) ? "bg-emerald-500" : "bg-[#b3bdcd]"}`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate font-['Plus Jakarta Sans',sans-serif] text-base font-semibold text-[#1f2a37]">
                  {chat.fullName}
                </p>
                <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#6d7787]">
                  {formatMetaTime(chat.updatedAt)}
                </span>
              </div>
              <p
                className={`truncate text-sm ${
                  onlineUsers.includes(chat._id) ? "font-medium text-[#0b5dd6]" : "text-[#5f6d80]"
                }`}
              >
                {onlineUsers.includes(chat._id) ? "Active now" : "Open conversation"}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
export default ChatsList;
