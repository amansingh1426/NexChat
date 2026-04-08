import { ArrowLeftIcon, MoreVerticalIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);
  const initials = selectedUser.fullName
    ?.split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <header className="border-b border-[#d6dee8] bg-[#f8fbff] px-6 py-4 lg:px-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="rounded-full p-2 text-[#5f697f] transition-colors hover:bg-[#e9edf3] md:hidden"
            onClick={() => setSelectedUser(null)}
            type="button"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>

          {selectedUser.profilePic ? (
            <img
              src={selectedUser.profilePic}
              alt={selectedUser.fullName}
              className="h-11 w-11 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#99b8ef] text-base font-bold text-[#113a7d]">
              {initials || "U"}
            </div>
          )}

          <div className="min-w-0">
            <h3 className="truncate font-['Plus Jakarta Sans',sans-serif] text-[1.16rem] font-bold text-[#253245]">
              {selectedUser.fullName}
            </h3>
            <p className={`text-sm font-medium ${isOnline ? "text-emerald-600" : "text-[#7f8899]"}`}>
              {isOnline ? "Active now" : "Offline"}
            </p>
          </div>
        </div>

        <button
          className="rounded-full p-2.5 text-[#6a7384] transition-colors hover:bg-[#e5ebf4] hover:text-[#283445]"
          type="button"
        >
          <MoreVerticalIcon className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
export default ChatHeader;
