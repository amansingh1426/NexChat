function MessagesLoadingSkeleton() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`animate-pulse ${index % 2 === 0 ? "mr-auto max-w-[70%]" : "ml-auto max-w-[70%]"}`}
        >
          <div
            className={`h-14 rounded-2xl ${
              index % 2 === 0 ? "rounded-bl-md bg-[#dbe0e8]" : "rounded-br-md bg-[#bfd3fb]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
export default MessagesLoadingSkeleton;
