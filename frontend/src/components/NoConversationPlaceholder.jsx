import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="chat-thread-pattern flex h-full flex-col items-center justify-center p-8 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#dbe5f2] shadow-[0_8px_24px_rgba(29,44,67,0.08)]">
        <MessageCircleIcon className="h-10 w-10 text-[#0b5dd6]" />
      </div>
      <h3 className="mb-2 font-['Plus Jakarta Sans',sans-serif] text-2xl font-semibold text-[#1f2a37]">
        Select a conversation
      </h3>
      <p className="max-w-md text-[#5f6d80]">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;
