import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <div className="flex h-full w-full justify-between gap-4 bg-[#f2f7f9] px-24 py-[10vh]">
        <div className="flex min-h-[80vh] w-full rounded-[28px] bg-[#04b4e0]">
          <Header />
          <main className="flex w-full items-center justify-center">
            <Outlet />
          </main>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Root;
