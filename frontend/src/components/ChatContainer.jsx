import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { CheckCheckIcon } from "lucide-react";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser, onlineUsers } = useAuthStore();
  const messageEndRef = useRef(null);
  const isSelectedUserOnline = onlineUsers.includes(selectedUser?._id);

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const formatTime = (dateValue) =>
    new Date(dateValue).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <>
      <ChatHeader />
      <div className="chat-thread-pattern flex-1 overflow-y-auto px-6 py-6 lg:px-8">
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="w-full space-y-4">
            <div className="flex justify-center">
              <span className="rounded-full bg-[#dfe7f1] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#5e6c80]">
                Today
              </span>
            </div>

            {messages.map((msg) => {
              const isOutgoing = String(msg.senderId) === String(authUser._id);

              return (
                <div key={msg._id} className={`flex w-full ${isOutgoing ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex max-w-[94%] items-end gap-2.5 sm:max-w-[78%] ${
                      isOutgoing ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!isOutgoing && (
                      <img
                        src={selectedUser.profilePic || "/avatar.png"}
                        alt={selectedUser.fullName}
                        className="h-10 w-10 shrink-0 rounded-full object-cover shadow-sm"
                      />
                    )}

                    <div
                      className={`min-w-0 rounded-2xl px-4 py-3 text-base leading-relaxed ${
                        isOutgoing
                          ? "rounded-br-md bg-[#0b5dd6] text-[#f6f9ff] shadow-[0_8px_20px_rgba(11,93,214,0.18)]"
                          : "rounded-bl-md border border-[#cfd8e5] bg-[#ffffff] text-[#213043] shadow-[0_4px_12px_rgba(29,44,67,0.07)]"
                      }`}
                    >
                      {msg.image && (
                        <div
                          className={`overflow-hidden rounded-xl ${
                            msg.text ? "mb-2" : ""
                          } ${isOutgoing ? "border border-white/25" : "border border-[#d8e1ee]"}`}
                        >
                          <img
                            src={msg.image}
                            alt="Shared"
                            className="max-h-64 w-full min-w-[260px] object-cover"
                          />
                        </div>
                      )}
                      {msg.text && <p className="whitespace-pre-wrap break-words">{msg.text}</p>}

                      <div
                        className={`mt-2 flex items-center gap-1 text-xs ${
                          isOutgoing ? "justify-end text-[#d7e7ff]" : "justify-end text-[#6a7485]"
                        }`}
                      >
                        <span>{formatTime(msg.createdAt)}</span>
                        {isOutgoing && <CheckCheckIcon className="h-3.5 w-3.5" />}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {isSelectedUserOnline && (
              <div className="flex items-center gap-2 pt-2 text-sm text-[#647286]">
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#9aa9c0]" />
                  <span className="h-2 w-2 rounded-full bg-[#9aa9c0]" />
                  <span className="h-2 w-2 rounded-full bg-[#9aa9c0]" />
                </div>
                <span>{selectedUser.fullName.split(" ")[0]} is online</span>
              </div>
            )}

            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </>
  );
}

export default ChatContainer;
