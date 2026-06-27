import { getPayment } from "@/lib/api/payments";
import React from "react";
import Link from "next/link";
import { Eye, Receipt } from "lucide-react";
import { getUserSession } from "@/lib/session/session";

const PurchasedPage = async () => {
  const user = getUserSession();
  // console.log(user);
  const { data: payments } = await getPayment(user?.id);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  return (
    <section className="bg-gray-50 dark:bg-slate-900 min-h-screen text-black dark:text-white transition-colors duration-300 py-10">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="mb-8 pl-1">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Purchased{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Recipes
            </span>{" "}
          </h1>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
            Recipes you've unlocked
          </p>
        </div>

        {!payments || payments.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-sm">
            <Receipt className="w-12 h-12 mx-auto text-gray-300 dark:text-slate-600 mb-3" />
            <p className="text-gray-500 dark:text-slate-400 text-base font-medium">
              You haven't purchased any recipes yet.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs rounded-xl shadow-md"
            >
              Explore Premium Recipes
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700/60 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-slate-700/50 bg-gray-50/50 dark:bg-slate-800/50">
                    <th className="p-4.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400 pl-6">
                      Recipe
                    </th>
                    <th className="p-4.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400">
                      Author
                    </th>
                    <th className="p-4.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400">
                      Amount Paid
                    </th>
                    <th className="p-4.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400">
                      Date
                    </th>
                    <th className="p-4.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400 text-right pr-6">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 dark:divide-slate-700/40">
                  {payments.map((payment) => (
                    <tr
                      key={payment._id}
                      className="hover:bg-gray-50/60 dark:hover:bg-slate-700/20 transition-colors duration-200"
                    >
                      <td className="p-4 pl-6 vertical-middle">
                        <div className="flex items-center gap-3">
                          <img
                            src={payment.image}
                            alt={payment.title}
                            className="w-10 h-10 rounded-xl object-cover border border-gray-100 dark:border-slate-700"
                          />
                          <span className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                            {payment.title || "Untitled Recipe"}
                          </span>
                        </div>
                      </td>

                      <td className="p-4 text-sm text-gray-500 dark:text-slate-400 vertical-middle">
                        {payment.userEmail || "Chef Fahim"}{" "}
                      </td>

                      <td className="p-4 text-sm font-bold text-gray-900 dark:text-white vertical-middle">
                        ${payment.amountPaid || payment.price || "4.99"}
                      </td>

                      <td className="p-4 text-sm text-gray-500 dark:text-slate-400 vertical-middle">
                        {formatDate(payment.createdAt || payment.date)}
                      </td>

                      <td className="p-4 text-right pr-6 vertical-middle">
                        <Link
                          href={`/browse-recipes/recipes/${payment.recipeId}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs font-bold text-gray-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 shadow-sm transition duration-200"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          View Recipe
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PurchasedPage;
