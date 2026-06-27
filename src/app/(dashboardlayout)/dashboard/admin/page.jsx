import { allrecipeFetchedAdmin } from "@/lib/api/admin";
import { getAllReports } from "@/lib/api/report";
import { getAllUsers, getPremiumUsers } from "@/lib/api/user";
import {
  Users,
  FileText,
  Crown,
  AlertTriangle,
  Settings,
  PlusCircle,
} from "lucide-react";

export default async function AdminHomePage() {
  const { data: recipes } = await allrecipeFetchedAdmin();
  const { data: allUsers } = await getAllUsers();
  const { data: premiumUsers } = await getPremiumUsers();
  const { data: reports } = await getAllReports();
  return (
    <div className="p-6 space-y-8 min-h-screen bg-gray-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2 tracking-tight">
          Admin{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Overview
          </span>
        </h2>
        <p className="text-sm text-gray-500 dark:text-slate-400 font-medium">
          Platform statistics and management
        </p>
      </div>

      {/* 4 Static Boxes Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Box 1: Total Users */}
        <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center space-y-3">
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-500">
            <Users className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-blue-500 tracking-tight">
            {allUsers.length}
          </span>
          <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
            Total Users
          </span>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center space-y-3">
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-500">
            <FileText className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-amber-500 tracking-tight">
            {recipes?.length || "11"}
          </span>
          <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
            Total Recipes
          </span>
        </div>

        {/* Box 3: Premium Members */}
        <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center space-y-3">
          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 text-purple-500">
            <Crown className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-purple-500 tracking-tight">
            {premiumUsers.length}
          </span>
          <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
            Premium Members
          </span>
        </div>

        {/* Box 4: Pending Reports */}
        <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center text-center space-y-3">
          <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-500">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <span className="text-3xl font-black text-red-500 tracking-tight">
            {reports.length}
          </span>
          <span className="text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
            Pending Reports
          </span>
        </div>
      </div>

      {/* Quick Actions Container */}
      <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/60 p-6 rounded-2xl shadow-sm space-y-4">
        <h3 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
          Quick Actions
        </h3>

        {/* Buttons Flex Row */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-600 transition shadow-sm">
            <Users className="w-4 h-4 text-blue-500" />
            Manage Users
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-600 transition shadow-sm">
            <FileText className="w-4 h-4 text-amber-500" />
            Manage Recipes
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-600 transition shadow-sm">
            <Settings className="w-4 h-4 text-purple-500" />
            Platform Settings
          </button>

          <button className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold border border-transparent bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition shadow-sm shadow-cyan-500/10">
            <PlusCircle className="w-4 h-4" />
            New Admin/Role
          </button>
        </div>
      </div>
    </div>
  );
}
