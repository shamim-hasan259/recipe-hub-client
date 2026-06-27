"use client";

import React from "react";
import { Shield, User, Crown, CheckCircle2, XCircle } from "lucide-react";
import { updateUserBlockAndUnBlock } from "@/lib/actions/user";
import toast from "react-hot-toast";

export default function UserTable({ users }) {
  const handleToggleBlock = async (id, isBlocked) => {
    const newBlockStatus = !isBlocked;

    const res = await updateUserBlockAndUnBlock(id, { newBlockStatus });
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/60 rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-100 dark:border-slate-700/80 text-gray-400 dark:text-slate-400 font-semibold text-xs tracking-wider">
              <th className="p-4 font-medium">User</th>
              <th className="p-4 font-medium">Role</th>
              <th className="p-4 font-medium">Premium</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Joined</th>
              <th className="p-4 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-slate-700/50">
            {users?.map((item) => {
              const isAdmin = item.role === "admin";
              let formattedDate = "N/A";
              if (item.createdAt) {
                if (item.createdAt.$date) {
                  formattedDate = new Date(
                    item.createdAt.$date,
                  ).toLocaleDateString("en-GB");
                } else {
                  formattedDate = new Date(item.createdAt).toLocaleDateString(
                    "en-GB",
                  );
                }
              }
              return (
                <tr
                  key={item._id?.$oid || item._id}
                  className="hover:bg-gray-50/50 dark:hover:bg-slate-700/20 transition"
                >
                  {/* User Info */}
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={
                        item.image ||
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      }
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-100 dark:border-slate-700"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900 dark:text-white">
                        {item.name}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-slate-400">
                        {item.email}
                      </span>
                    </div>
                  </td>

                  {/* Role Badge */}
                  <td className="p-4">
                    {isAdmin ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30">
                        <Shield className="w-3 h-3 fill-current" /> Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-100 dark:border-amber-900/30">
                        <User className="w-3 h-3" /> User
                      </span>
                    )}
                  </td>

                  {/* Premium / Plan Badge */}
                  <td className="p-4">
                    {item.plan === "premium" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                        <Crown className="w-3 h-3 fill-current" /> Premium
                      </span>
                    ) : (
                      <span className="text-gray-400 dark:text-slate-400 font-medium text-xs pl-2">
                        Free
                      </span>
                    )}
                  </td>

                  {/* Status Box */}
                  <td className="p-4">
                    {!item.isBlocked ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
                        <XCircle className="w-3 h-3" /> Blocked
                      </span>
                    )}
                  </td>

                  {/* Joined Date (এখন সুন্দরভাবে শো করবে) */}
                  <td className="p-4 text-xs font-semibold text-gray-600 dark:text-slate-300">
                    {formattedDate}
                  </td>

                  {/* Action Buttons */}
                  <td className="p-4 text-center">
                    {isAdmin ? (
                      <button
                        disabled
                        className="px-4 py-1.5 text-xs font-bold rounded-lg text-gray-400 bg-gray-100 dark:bg-slate-700 dark:text-slate-500 cursor-not-allowed opacity-50 border border-transparent"
                      >
                        Block
                      </button>
                    ) : !item.isBlocked ? (
                      <button
                        onClick={() =>
                          handleToggleBlock(item._id, item.isBlocked)
                        }
                        className="px-4 py-1.5 text-xs font-bold rounded-lg text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/60 transition shadow-sm border border-red-100/50 dark:border-transparent"
                      >
                        Block
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          handleToggleBlock(item._id, item.isBlocked)
                        }
                        className="px-4 py-1.5 text-xs font-bold rounded-lg text-emerald-600 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:hover:bg-emerald-950/60 transition shadow-sm border border-emerald-100/50 dark:border-transparent"
                      >
                        Unblock
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
