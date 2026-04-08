import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#dae1ff]">
        <MessageCircleIcon className="h-8 w-8 text-[#0050cb]" />
      </div>
      <h3 className="mb-3 text-lg font-medium text-[#191c1e]">Start your conversation with {name}</h3>
      <div className="mb-5 flex max-w-md flex-col space-y-3">
        <p className="text-sm text-[#5f687b]">
          This is the beginning of your conversation. Send a message to start chatting.
        </p>
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#b9c4d8] to-transparent" />
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        <button className="rounded-full bg-[#dae1ff] px-4 py-2 text-xs font-medium text-[#0050cb] transition-colors hover:bg-[#cad6f8]">
          Say hello
        </button>
        <button className="rounded-full bg-[#dae1ff] px-4 py-2 text-xs font-medium text-[#0050cb] transition-colors hover:bg-[#cad6f8]">
          How are you?
        </button>
        <button className="rounded-full bg-[#dae1ff] px-4 py-2 text-xs font-medium text-[#0050cb] transition-colors hover:bg-[#cad6f8]">
          Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
