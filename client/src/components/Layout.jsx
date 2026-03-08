// Page layout

export default function Layout({ navbar, left, right }) {
  return (
    <div className="h-screen flex flex-col">
      {navbar}

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left */}
        <div className="w-full md:w-1/5 border-r p-4 overflow-auto">{left}</div>

        {/* Right */}
        <div className="w-full md:w-4/5 p-4 overflow-auto bg-gray-100">
          {right}
        </div>
      </div>
    </div>
  );
}
