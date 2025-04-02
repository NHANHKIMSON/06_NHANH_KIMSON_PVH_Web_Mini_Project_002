const AppHeader = () => {
  return (
    <>
      <header className="sticky top-0 flex justify-between items-center p-5 bg-white shadow">
        <h2 className="text-xl font-semibold">Workspace</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Monster</span>
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
    </>
  );
};

export default AppHeader;
