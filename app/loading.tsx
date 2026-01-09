export default function Loading() {
  return (
    <div className="min-h-screen bg-[#08152F] flex flex-col items-center justify-center gap-6">
      {/* Spinner */}
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-white/15" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin" />
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="font-poppins font-semibold text-white text-lg">
          Loading...
        </p>
        <p className="text-white/70 text-sm">Please wait a moment</p>
      </div>

    </div>
  );
}
