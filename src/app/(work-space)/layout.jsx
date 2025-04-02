import Logo from "@/components/logo";
import AppSideBar from "./_components/AppSideBar";

export default function Layout({ children }) {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="container my-12 flex justify-center">
            <Logo />
          </div>

          <ul className="space-y-2 font-medium mt-6">

            <div className="w-full h-60 bg-red-300">
                
            </div>
            
            <div className="w-full h-60 bg-red-300">

            </div>



            {/* {data.map((items) => (
              <li key={items.id}>
                <Link
                  href={items.link}
                  className="flex items-center p-2 rounded-lg group transition-all bg-gray-200"
                >
                  {items.icon}
                  <span className="ms-3">{items.title}</span>
                </Link>
              </li>
            ))} */}

            {/* nav items */}
            <li className="mt-8">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:ml-80 flex flex-col items-center dark:bg-black dark:text-white overflow-y-hidden bg-slate-100">
        <div className="p-4 border-dashed rounded-lg dark:border-gray-700 w-full max-w-6xl bg-slate-100">
          {/* Search Component */}
          <div className="w-full mb-4 h-screen overflow-y-hidden">
            {/* <Search /> */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
