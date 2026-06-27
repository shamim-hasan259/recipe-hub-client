import { getAllReports } from "@/lib/api/report";
import React from "react";
import { AlertTriangle, Clock, CheckSquare, Layers } from "lucide-react";
import ReportActions from "@/components/ReportActions";
const ReportPage = async () => {
  const { data: reports } = await getAllReports();

  return (
    <section className="bg-gray-50 dark:bg-slate-900 min-h-screen text-black dark:text-white transition-colors duration-300 py-10">
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-8 h-8 text-orange-500 animate-pulse" />
              Recipe Reports
            </h1>
            <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
              {reports?.length || 0} pending reports
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl border border-gray-200/50 dark:border-slate-700/50 text-xs font-semibold">
            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-orange-500 text-white shadow-sm font-bold">
              <Clock className="w-3.5 h-3.5" />
              Pending
            </button>
            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition">
              <CheckSquare className="w-3.5 h-3.5" />
              Dismissed
            </button>
            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition">
              <Layers className="w-3.5 h-3.5" />
              All
            </button>
          </div>
        </div>
        {!reports || reports.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-gray-100 dark:border-slate-700/50 shadow-sm">
            <CheckSquare className="w-12 h-12 mx-auto text-green-500 mb-3" />
            <p className="text-gray-500 dark:text-slate-400 text-base font-medium">
              Safe and clean! No pending reports found.
            </p>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700/60 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 dark:border-slate-700/50 bg-gray-50/50 dark:bg-slate-800/50">
                    <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400 pl-6">
                      Recipe ID
                    </th>
                    <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400">
                      Reporter
                    </th>
                    <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400">
                      Reason
                    </th>
                    <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400">
                      Description
                    </th>
                    <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-slate-400 text-right pr-6">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 dark:divide-slate-700/40">
                  {reports.map((report) => {
                    const reportId = report._id?.$oid || report._id;

                    return (
                      <tr
                        key={reportId}
                        className="hover:bg-gray-50/60 dark:hover:bg-slate-700/20 transition-colors duration-200"
                      >
                        <td className="p-4 pl-6 text-sm font-mono text-gray-600 dark:text-slate-300">
                          {report.recipeId
                            ? `${report.recipeId.substring(0, 8)}...`
                            : "N/A"}
                        </td>

                        <td className="p-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                          {report.reportarEmail}
                        </td>

                        <td className="p-4 text-sm">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-950/50">
                            {report.reason || "Spam"}
                          </span>
                        </td>

                        <td className="p-4 text-sm text-gray-500 dark:text-slate-400 max-w-[220px] truncate">
                          {report.reportMessage || "—"}
                        </td>

                        <td className="p-4 text-right pr-6">
                          <ReportActions
                            reportId={reportId}
                            recipeId={report.recipeId}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReportPage;
