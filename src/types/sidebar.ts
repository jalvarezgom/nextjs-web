import { Router } from "./router.enum";
import { RoleAny, Roles } from "./entities/roles.enum";
import { Album } from "lucide-react";

export interface SidebarRoute {
  name: string;
  icon?: any;
  path?: string;
  items?: SidebarRoute[];
  roles?: Roles[];
}

const SidebarRoutes: SidebarRoute[] = [
  // TODO: Add icons
  {
    name: "Deals",
    icon: 1,
    items: [
      {
        name: "Swaps",
        path: Router.DEALS,
        roles: RoleAny,
      },
      {
        name: "Future",
        path: Router.DEALS,
        roles: RoleAny,
      },
    ],
  },
  {
    name: "Counterparties",
    icon: 2,
    path: Router.COUNTERPARTIES,
    roles: [Roles.USER],
  },
  {
    name: "Guide Styles",
    icon: 3,
    path: Router.GUIDE_STYLES,
    roles: [Roles.ADMIN],
  },
];

export default SidebarRoutes;
