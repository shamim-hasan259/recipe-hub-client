"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Plus,
  BookOpen,
  Heart,
  ShoppingBag,
  User,
  Users,
  BarChart3,
  CreditCard,
} from "lucide-react";

const DashboardNavItems = ({ navItems }) => {
  const pathname = usePathname();

  const getIcon = (label) => {
    switch (label) {
      // User
      case "Overview":
        return <LayoutDashboard size={20} />;

      case "Add Recipe":
        return <Plus size={20} />;

      case "My Recipes":
        return <BookOpen size={20} />;

      case "Favorites":
        return <Heart size={20} />;

      case "Purchased":
        return <ShoppingBag size={20} />;

      case "Profile":
        return <User size={20} />;

      // Admin
      case "Manage Users":
        return <Users size={20} />;

      case "Manage Recipes":
        return <BookOpen size={20} />;

      case "Reports":
        return <BarChart3 size={20} />;

      case "Transactions":
        return <CreditCard size={20} />;

      default:
        return <LayoutDashboard size={20} />;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {navItems?.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.id}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                : "text-gray-700 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-500"
            }`}
          >
            <span className="shrink-0">{getIcon(item.label)}</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default DashboardNavItems;
