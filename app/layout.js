import '../styles/globals.css';
//components
import SideBar from '../components/sideBar/SideBar';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="dark:bg-stone-900 bg-stone-100 text-zinc-900 dark:text-slate-50">
        <div className="flex w-screen pt-20 flex-wrap">
          <div className="w-1/6">
            <SideBar />
          </div>
          <div className="w-5/6 pl-7">
            <div className="bg-circle right-12 top-0 animate-circles-10"></div>
            <div className="bg-circle left-0 top-[-30px] animate-circles-40"></div>
            <div className="bg-circle left-[35vw] bottom-[50px] animate-circles-25"></div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
