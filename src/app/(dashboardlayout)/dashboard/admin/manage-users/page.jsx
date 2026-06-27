import { getAllUsers } from "@/lib/api/user";
import React from "react";
import { Users } from "lucide-react";
import UserTable from "@/components/UserTable";

const AminMenegUsersPage = async () => {
  const { data: users } = await getAllUsers();
  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Header Section */}
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2 tracking-tight">
          Manage{" "}
          <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Users
          </span>{" "}
          <Users className="w-6 h-6 text-cyan-500" />
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">
          Block/unblock users and manage roles
        </p>
      </div>

      {/* Table Component with Props Data */}
      <UserTable users={users} />
    </div>
  );
};

export default AminMenegUsersPage;
