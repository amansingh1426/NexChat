import { useChatStore } from "../store/useChatStore";
import { MessageCircleIcon, UsersIcon } from "lucide-react";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="mb-5 mt-1 flex rounded-xl border border-[#d3ddea] bg-[#e8eef6] p-1.5">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex w-1/2 items-center justify-center gap-2.5 rounded-[0.7rem] px-3 py-2.5 text-base font-medium transition-all ${
          activeTab === "chats"
            ? "bg-[#0b5dd6] text-[#f5f8ff] shadow-[0_8px_16px_rgba(11,93,214,0.22)]"
            : "text-[#57657a] hover:bg-[#dbe4f1]"
        }`}
        type="button"
      >
        <MessageCircleIcon className="h-[18px] w-[18px]" />
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex w-1/2 items-center justify-center gap-2.5 rounded-[0.7rem] px-3 py-2.5 text-base font-medium transition-all ${
          activeTab === "contacts"
            ? "bg-[#0b5dd6] text-[#f5f8ff] shadow-[0_8px_16px_rgba(11,93,214,0.22)]"
            : "text-[#57657a] hover:bg-[#dbe4f1]"
        }`}
        type="button"
      >
        <UsersIcon className="h-[18px] w-[18px]" />
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
