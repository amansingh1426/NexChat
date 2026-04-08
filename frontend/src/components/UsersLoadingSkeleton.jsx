function UsersLoadingSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map((item) => (
        <div key={item} className="animate-pulse rounded-xl bg-[#e7ebf1] p-4">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-[#d0d7e2]" />
            <div className="flex-1">
              <div className="mb-2 h-4 w-3/4 rounded bg-[#d0d7e2]" />
              <div className="h-3 w-1/2 rounded bg-[#d7dde8]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default UsersLoadingSkeleton;
