import { getUserSession } from "../lib/session/session";
import { Button, Drawer } from "@heroui/react";
import { Bars } from "@gravity-ui/icons";
import NavItem from "./NavItem";
const DashboardSidebar = async () => {
  const user = await getUserSession();
  const daashboardItems = {
    user: [
      {
        id: "overview",
        label: "Overview",
        path: "/dashboard/user",
      },
      {
        id: "add-recipe",
        label: "Add Recipe",
        path: "/dashboard/user/add-recipe",
      },
      {
        id: "my-recipes",
        label: "My Recipes",
        path: "/dashboard/user/my-recipes",
      },
      {
        id: "favorites",
        label: "Favorites",
        path: "/dashboard/user/favorites",
      },
      {
        id: "purchased",
        label: "Purchased",
        path: "/dashboard/user/purchased",
      },
      {
        id: "profile",
        label: "Profile",
        path: "/dashboard/user/profile",
      },
    ],

    admin: [
      {
        id: "overview",
        label: "Overview",
        path: "/dashboard/admin",
      },
      {
        id: "manage-users",
        label: "Manage Users",
        path: "/dashboard/admin/manage-users",
      },
      {
        id: "manage-recipes",
        label: "Manage Recipes",
        path: "/dashboard/admin/manage-recipes",
      },
      {
        id: "reports",
        label: "Reports",
        path: "/dashboard/admin/reports",
      },
      {
        id: "transactions",
        label: "Transactions",
        path: "/dashboard/admin/transactions",
      },
    ],
  };

  const navItems = daashboardItems[user?.role || "user"];

  return (
    <Drawer>
      <aside className="hidden w-full h-full shawdow-lg shrink-0 boreder border-r border-default p-4 lg:block border-cyan-200/10 backdrop-blur-md bg-linear-to-t from-white via-sky-50 to-white dark:from-[#0b1120] dark:via-[#0a0c11] dark:to-black">
        <NavItem navItems={navItems} />
      </aside>
      <Button
        variant="outline"
        className="bg-base-300 text=4xl text-black dark:text-white px-4 py-2 rounded md:hidden"
      >
        <Bars />
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <NavItem navItems={navItems} />
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};
export default DashboardSidebar;
