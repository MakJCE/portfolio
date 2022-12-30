import '../styles/globals.css';
//components
import SideBar from '../components/sideBar/SideBar';

export default function RootLayout({ children }) {
  return (
    <html className="bg-stone-900 text-slate-50">
      <head />
      <body>
        <div className="flex w-screen pt-20">
          <div className="w-1/6"><SideBar /></div>
          <div className="w-5/6 pl-7">{children}</div>
        </div>
      </body>
    </html>
  );
}
