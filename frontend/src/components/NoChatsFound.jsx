import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="space-y-4 py-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#dfe3e7]">
        <MessageCircleIcon className="h-8 w-8 text-[#0253cd]" />
      </div>
      <div>
        <h4 className="mb-1 font-medium text-[#2c2f32]">No conversations yet</h4>
        <p className="px-6 text-sm text-[#595c5e]">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>
      <button
        onClick={() => setActiveTab("contacts")}
        className="rounded-lg bg-[#dce3f0] px-4 py-2 text-sm text-[#0253cd] transition-colors hover:bg-[#ced5e1]"
        type="button"
      >
        Find contacts
      </button>
    </div>
  );
}
export default NoChatsFound;
