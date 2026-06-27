import React from "react";
import { Users, UtensilsCrossed, Award, Heart } from "lucide-react";

const StateSection = () => {
  const stats = [
    {
      id: 1,
      label: "Premium Recipes",
      value: "12,000+",
      icon: UtensilsCrossed,
    },
    { id: 2, label: "Expert Chefs", value: "350+", icon: Award },
    { id: 3, label: "Active Foodies", value: "45k+", icon: Users },
    { id: 4, label: "Happy Hearts", value: "150k+", icon: Heart },
  ];

  return (
    <section className="relative border-none outline-none ring-0 bg-[#f3f4f6] dark:bg-gradient-to-b dark:from-[#0c1017] dark:via-[#0e141f] dark:to-[#0c1017] py-20 px-6 md:px-12 transition-colors duration-300 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/[0.02] dark:bg-cyan-500/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto space-y-12 z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Our Journey In Numbers
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl">
            We Cook, We Share,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              We Grow Together
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Join the fastest-growing community of food enthusiasts, home cooks,
            and world-class chefs worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white dark:bg-[#111c2a] p-6 rounded-2xl border border-gray-200 dark:border-gray-800/80 shadow-sm flex flex-col items-center text-center space-y-3 group hover:border-cyan-500/30 dark:hover:border-cyan-500/20 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-500/[0.02]"
              >
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#162235] text-cyan-500 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-gray-950 dark:text-gray-50 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StateSection;
