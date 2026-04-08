import { useRef, useState } from "react";
import useKeyboardSound from "../hooks/useKeyboardSound";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";
import { ImageIcon, PaperclipIcon, SendHorizontalIcon, SmileIcon, XIcon } from "lucide-react";

function MessageInput() {
  const { playRandomKeyStrokeSound } = useKeyboardSound();
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    if (isSoundEnabled) playRandomKeyStrokeSound();

    sendMessage({
      text: text.trim(),
      image: imagePreview,
    });
    setText("");
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="border-t border-[#d6dee8] bg-[#f8fbff] px-6 py-4 lg:px-8">
      {imagePreview && (
        <div className="mb-3 flex w-full items-center">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="h-24 w-24 rounded-xl border border-[#cfd8e5] object-cover"
            />
            <button
              onClick={removeImage}
              className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#596276] shadow-sm transition-colors hover:text-[#1f2a37]"
              type="button"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSendMessage}
        className="mx-auto flex w-full max-w-[1220px] items-center gap-2 rounded-full border border-[#ced8e5] bg-[#ffffff] px-3.5 py-2 shadow-[0_12px_32px_rgba(29,44,67,0.1)]"
      >
        <div className="flex gap-0.5">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`rounded-full p-2.5 text-[#5e6775] transition-colors hover:bg-[#eaf0f8] hover:text-[#0b5dd6] ${
              imagePreview ? "text-[#0b5dd6]" : ""
            }`}
          >
            <ImageIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="rounded-full p-2.5 text-[#5e6775] transition-colors hover:bg-[#eaf0f8] hover:text-[#0b5dd6]"
          >
            <SmileIcon className="h-5 w-5" />
          </button>
        </div>

        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            isSoundEnabled && playRandomKeyStrokeSound();
          }}
          className="w-full bg-transparent px-2 py-2 text-[1.05rem] text-[#223247] outline-none placeholder:text-[#8f9db0]"
          placeholder="Type your message..."
        />

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        <button
          type="button"
          className="rounded-full p-2.5 text-[#5e6775] transition-colors hover:bg-[#eaf0f8] hover:text-[#0b5dd6]"
        >
          <PaperclipIcon className="h-5 w-5" />
        </button>

        <button
          type="submit"
          disabled={!text.trim() && !imagePreview}
          className="h-12 w-12 rounded-full bg-[#0b5dd6] text-white shadow-[0_10px_18px_rgba(11,93,214,0.34)] transition-all hover:bg-[#0750bc] disabled:cursor-not-allowed disabled:opacity-45"
        >
          <SendHorizontalIcon className="mx-auto h-6 w-6" />
        </button>
      </form>
    </div>
  );
}
export default MessageInput;
