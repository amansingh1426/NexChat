import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import {
  PlusIcon,
  HelpCircleIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  Volume2Icon,
  VolumeOffIcon,
} from "lucide-react";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
  const { activeTab, selectedUser, isSoundEnabled, toggleSound, setActiveTab, setSelectedUser } =
    useChatStore();
  const { authUser, logout } = useAuthStore();

  return (
    <div className="flex h-screen flex-col bg-[#e9eef5] font-['Inter',sans-serif] text-[#1f2a37]">
      <header className="flex h-18 items-center justify-between border-b border-[#d6dee8] bg-[#f8fbff] px-6 sm:px-7">
        <div className="flex items-center gap-6">
          <h1 className="font-['Plus Jakarta Sans',sans-serif] text-[2rem] font-bold tracking-[-0.03em] text-[#1f2a37]">
            NexChat
          </h1>
          <span className="hidden font-['Plus Jakarta Sans',sans-serif] text-base font-semibold text-[#0b5dd6] md:inline">
            Messages
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            className="rounded-full p-2.5 text-[#667187] transition-colors hover:bg-[#e9eef5] hover:text-[#1f2a37]"
            onClick={toggleSound}
            title={isSoundEnabled ? "Mute sounds" : "Unmute sounds"}
            type="button"
          >
            {isSoundEnabled ? <Volume2Icon className="h-5 w-5" /> : <VolumeOffIcon className="h-5 w-5" />}
          </button>
          <button
            className="rounded-full p-2.5 text-[#667187] transition-colors hover:bg-[#e9eef5] hover:text-[#1f2a37]"
            onClick={logout}
            title="Logout"
            type="button"
          >
            <LogOutIcon className="h-5 w-5" />
          </button>
          <div className="h-11 w-11 rounded-full border-2 border-[#8cb0eb] p-0.5">
            <img
              src={authUser?.profilePic || "/avatar.png"}
              alt={authUser?.fullName || "User avatar"}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 overflow-hidden">
        <aside
          className={`${
            selectedUser ? "hidden md:flex" : "flex"
          } w-full flex-col border-r border-[#d6dee8] bg-[#f5f8fc] px-4 pb-4 pt-5 md:w-[360px]`}
        >
          <ProfileHeader />
          <ActiveTabSwitch />

          <button
            className="mb-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5dd6] px-4 py-3.5 font-['Plus Jakarta Sans',sans-serif] text-base font-semibold text-[#f5f8ff] transition-all hover:bg-[#0750bc]"
            onClick={() => {
              setSelectedUser(null);
              setActiveTab("contacts");
            }}
            type="button"
          >
            <PlusIcon className="h-5 w-5" />
            New Chat
          </button>

          <div className="mt-1 flex-1 space-y-1.5 overflow-y-auto pr-1">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>

          <div className="mt-2 space-y-1 pt-2 md:hidden">
            <button
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#5e687d] transition-colors hover:bg-[#e4e8ee]"
              type="button"
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </button>
            <button
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#5e687d] transition-colors hover:bg-[#e4e8ee]"
              type="button"
            >
              <HelpCircleIcon className="h-4 w-4" />
              Help
            </button>
          </div>
        </aside>

        <section
          className={`${
            selectedUser ? "flex" : "hidden md:flex"
          } min-w-0 flex-1 flex-col bg-[#eef3f9]`}
        >
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </section>
      </main>

      {!selectedUser && (
        <button
          className="fixed bottom-5 right-5 z-20 rounded-full bg-gradient-to-br from-[#0050cb] to-[#0066ff] p-4 text-white shadow-[0_12px_32px_rgba(25,28,30,0.14)] md:hidden"
          type="button"
        >
          <MessageCircleIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
export default ChatPage;
