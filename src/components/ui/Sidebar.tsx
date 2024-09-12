import SidebarRoutes, { SidebarRoute } from "@/types/sidebar";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    // <aside className="bg-red-500 h-screen w-64 shadow-lg fixed top-0 left-0">
    <aside className="sidebar">
      <section className="sidebar__logo">
        <Image src="/nrg_logo.svg" alt="" width={150} height={150}/>
      </section>
      <nav>
        <ul>
          {SidebarRoutes.map((route, index) => {
            return <SidebarItem key={index} route={route} />;
            }
          )}
        </ul>
      </nav>
    </aside>
  );
}

const SidebarItem = ({ route, isSubItem }: { route: SidebarRoute, isSubItem?: boolean }) => {
  return (
    <>
      <SidebarRouterItem route={route}>
        <li key={route.name} className={`sidebar__item sidebar--hover ${isSubItem && "sidebar__subitem"}`}>
        {route.icon && <p>{route.icon}</p>}
          <span>{route.name}</span>
        </li>
      </SidebarRouterItem>
      {route.items && (
        <ul>
          {route.items.map((route, index) => {
            return <SidebarItem key={index} route={route} isSubItem={true} />;
          })}
        </ul>
      )}
    </>
  );
}

const SidebarRouterItem = ({ route, children }: { route: SidebarRoute, children: React.ReactNode }) => {
  return (
    <>
      {route.path ? (
        <Link href={route.path}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </>
  )
}


export default Sidebar;
