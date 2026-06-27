"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Crown, Check, User, Save, Sparkles, Settings } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const [userName, setUserName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { data } = useSession();
  const user = data?.user;
  console.log(user);
  const isPremiumUser = user?.plan === "premium";
  const handleEditProfile = async (e) => {
    e.preventDefault();
    const { data } = await authClient.updateUser({
      name: userName,
      image: imageUrl,
    });
    console.log(data);
    if (data) {
      toast.success("update profile successfully");
    }
  };
  return (
    <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0c1017] p-6 md:p-12 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-5xl w-full flex flex-col gap-8">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
              <Settings className="w-7 h-7 text-cyan-500" />
              Account{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Settings
              </span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage your profile information, view your subscription status,
              and update settings.
            </p>
          </div>

          <div className="self-start sm:self-center">
            {isPremiumUser ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Crown className="w-3.5 h-3.5" /> PRO MEMBER
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                STANDARD PLAN
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white dark:bg-[#111c2a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 font-serif">
              Edit Profile
            </h2>

            {/* User Profile Header */}
            <div className="flex items-center gap-4 mb-6">
              {/* Profile Image Wrapper */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 shadow-md">
                  {user?.image ? (
                    <img
                      src={user?.image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>

                {isPremiumUser && (
                  <div
                    className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-500 p-1 rounded-full shadow-md border-2 border-white dark:border-[#111c2a] animate-bounce"
                    title="Premium Member"
                  >
                    <Crown className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                  {user?.name}
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-500 leading-none">
                  {user?.email}
                </p>

                <div className="pt-1">
                  {isPremiumUser ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2.5 py-0.5 rounded-full shadow-sm shadow-cyan-500/20">
                      <Sparkles className="w-3 h-3" /> Premium
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-2.5 py-0.5 rounded-full">
                      Free Plan
                    </span>
                  )}
                </div>
              </div>
            </div>
            <form onSubmit={handleEditProfile} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  name="fullName"
                  defaultValue={user?.name}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#162235] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Profile Image URL
                </label>
                <input
                  onChange={(e) => setImageUrl(e.target.value)}
                  type="text"
                  name="imageUrl"
                  defaultValue={user?.image}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#162235] border border-gray-200 dark:border-gray-700 rounded-xl text-gray-800 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </form>
          </div>

          <div className="w-full md:w-[360px] bg-white dark:bg-[#111c2a] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col items-center justify-between text-center transition-colors duration-300">
            <div>
              <div className="bg-amber-500/10 p-3 rounded-full inline-block mb-4">
                <Crown className="w-8 h-8 text-amber-500 dark:text-amber-400" />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 font-serif">
                Go Premium
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 px-2">
                Unlock unlimited recipe uploads and exclusive features
              </p>

              {/* Features List */}
              <ul className="text-left space-y-3 max-w-[240px] mx-auto text-sm text-gray-600 dark:text-gray-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-green-500 dark:text-green-400 stroke-[3]" />
                  Unlimited recipe uploads
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-green-500 dark:text-green-400 stroke-[3]" />
                  Premium profile badge
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-green-500 dark:text-green-400 stroke-[3]" />
                  Priority visibility
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-green-500 dark:text-green-400 stroke-[3]" />
                  Exclusive features
                </li>
              </ul>
            </div>

            {/* Pricing & Premium Form Button */}
            <form
              action="/api/checkout_sessions"
              method="POST"
              className="w-full"
            >
              <div className="text-3xl font-black text-orange-500 dark:text-orange-400 mb-5">
                $9.99{" "}
                <span className="text-sm font-normal text-gray-400 dark:text-gray-500">
                  / lifetime
                </span>
              </div>

              <button
                type="submit"
                role="link"
                disabled={isPremiumUser}
                className={`w-full py-3 rounded-xl font-medium shadow-lg transition-all flex items-center justify-center gap-2 ${
                  isPremiumUser
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed shadow-none"
                    : "bg-[#18181b] dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 hover:bg-black dark:hover:from-cyan-600 dark:hover:to-blue-700 text-white"
                }`}
              >
                <Crown className="w-4 h-4" />{" "}
                {isPremiumUser ? "Already Premium" : "Upgrade to Premium"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
