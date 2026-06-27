// "use client";

// import { useState } from "react";
// import { Heart, Star, CreditCard, AlertTriangle, X } from "lucide-react";
// import { incrementLikCout } from "@/lib/actions/recipe";
// import toast from "react-hot-toast";
// import { addFavourite } from "@/lib/actions/favourite";
// import { postReprtRecipe } from "@/lib/actions/report";

// export default function RecipeActions({
//   recipePrice,
//   recipeName,
//   user,
//   recipe,
// }) {
//   const [isReportModalOpen, setIsReportModalOpen] = useState(false);
//   const [reportMessage, setReportMessage] = useState("");
//   const [isFavorited, setIsFavorited] = useState(false);
//   const [isLiked, setIsLiked] = useState(false);

//   const recipeInfo = {
//     userId: user?.id,
//     userEmail: user?.email,
//     recipeName: recipe.recipeName,
//     recipeImage: recipe.recipeImage,
//     category: recipe.category,
//     cuisineType: recipe.cuisineType,
//     difficultyLevel: recipe.difficultyLevel,
//     preparationTime: recipe.preparationTime,
//     ingredients: recipe.ingredients,
//     instructions: recipe.instructions,
//     likesCount: recipe.likesCount,
//     isFeatured: recipe.isFavorited,
//     status: recipe.status,
//   };
//   const handleIncrementLike = async () => {
//     const res = await incrementLikCout(recipe._id);
//     if (res.status) {
//       toast.success(`${res.message}`);
//     }
//   };

//   const handleAddToFavorite = async () => {
//     const res = await addFavourite({ ...recipeInfo });
//     if (res.status) {
//       toast.success(`${res.message}`);
//     }
//   };
//   // 3. Report Submit
//   const handleReportSubmit = async (e) => {
//     e.preventDefault();
//     const res = await postReprtRecipe({ reportMessage });
//     console.log(res);
//     if (res.status) {
//       toast.success(`${res.message}`);
//       setIsReportModalOpen(false);
//       setReportMessage("");
//     }
//   };

//   return (
//     <div className="pt-6 border-t border-gray-100 dark:border-slate-700/50 space-y-4">
//       <div className="flex justify-between items-center mb-2">
//         <span className="text-sm text-gray-500 dark:text-slate-400 font-medium">
//           Price:
//         </span>
//         <span className="text-2xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
//           ${recipePrice}
//         </span>
//       </div>

//       {/* Grid Layout for Buttons */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
//         {/* Like Button */}
//         <button
//           onClick={() => {
//             setIsLiked(!isLiked);
//             handleIncrementLike();
//           }}
//           className={`w-full py-3 px-2 rounded-xl border font-semibold text-xs transition flex items-center justify-center gap-2
//             ${
//               isLiked
//                 ? "bg-red-500 text-white border-red-500 shadow-md shadow-red-500/20"
//                 : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
//             }`}
//         >
//           <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
//           {isLiked ? "Liked" : "Like"}
//         </button>

//         {/* Favorite Button */}
//         <button
//           onClick={handleAddToFavorite}
//           className={`w-full py-3 px-2 rounded-xl border font-semibold text-xs transition flex items-center justify-center gap-2
//             ${
//               isFavorited
//                 ? "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20"
//                 : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
//             }`}
//         >
//           <Star className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
//           {isFavorited ? "Favorited" : "Favorite"}
//         </button>

//         {/* Purchase Button */}

//         <form action={"/api/payment"} method="POST">
//           <input type="hidden" name="price" value={recipePrice} />
//           <input type="hidden" name="title" value={recipe.recipeName} />
//           <input type="hidden" name="price" value={recipe._id} />
//           <input type="hidden" name="image" value={recipe.recipeImage} />
//           <button className="w-full py-3 px-2 font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-cyan-500/30 transition rounded-xl flex items-center justify-center gap-2">
//             <CreditCard className="w-4 h-4" />
//             Purchase
//           </button>
//         </form>

//         {/* Report Button */}
//         <button
//           onClick={() => setIsReportModalOpen(true)}
//           className="w-full py-3 px-2 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 font-semibold text-xs text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/40 transition flex items-center justify-center gap-2"
//         >
//           <AlertTriangle className="w-4 h-4" />
//           Report
//         </button>
//       </div>

//       {/* Report Modal Popup */}
//       {isReportModalOpen && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
//           <div className="bg-white dark:bg-slate-800 w-full max-w-md p-6 rounded-3xl border border-gray-100 dark:border-slate-700 relative">
//             {/* Top Close Icon Cross Button */}
//             <button
//               onClick={() => setIsReportModalOpen(false)}
//               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
//               <AlertTriangle className="w-5 h-5 text-red-500" />
//               Report this Recipe
//             </h3>

//             <form onSubmit={handleReportSubmit} className="mt-4">
//               <textarea
//                 value={reportMessage}
//                 onChange={(e) => setReportMessage(e.target.value)}
//                 placeholder="Write your issue here..."
//                 rows="4"
//                 className="w-full border border-gray-200 dark:border-slate-600 rounded-xl p-3 text-sm bg-gray-50 dark:bg-slate-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//                 required
//               ></textarea>

//               <div className="flex gap-3 justify-end">
//                 <button
//                   type="button"
//                   onClick={() => setIsReportModalOpen(false)}
//                   className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-slate-400"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-5 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Heart, Star, CreditCard, AlertTriangle, X } from "lucide-react";
import { incrementLikCout } from "@/lib/actions/recipe";
import toast from "react-hot-toast";
import { addFavourite } from "@/lib/actions/favourite";
import { postReprtRecipe } from "@/lib/actions/report";

export default function RecipeActions({
  recipePrice,
  recipeName,
  user,
  recipe,
}) {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportReason, setReportReason] = useState(""); // ৩টি অপশনের জন্য স্টেট
  const [reportMessage, setReportMessage] = useState("");
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const recipeInfo = {
    userId: user?.id,
    userEmail: user?.email,
    recipeName: recipe.recipeName,
    recipeImage: recipe.recipeImage,
    category: recipe.category,
    cuisineType: recipe.cuisineType,
    difficultyLevel: recipe.difficultyLevel,
    preparationTime: recipe.preparationTime,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    likesCount: recipe.likesCount,
    isFeatured: recipe.isFavorited,
    status: recipe.status,
  };

  const handleIncrementLike = async () => {
    const res = await incrementLikCout(recipe._id);
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  const handleAddToFavorite = async () => {
    const res = await addFavourite({ ...recipeInfo });
    if (res.status) {
      toast.success(`${res.message}`);
    }
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();

    const res = await postReprtRecipe({
      recipeId: recipe._id,
      reportarEmail: user?.email,
      reason: reportReason,
      reportMessage,
    });

    // console.log(res);
    if (res.status) {
      toast.success(`${res.message}`);
      setIsReportModalOpen(false);
      setReportReason("");
      setReportMessage("");
    }
  };
  return (
    <div className="pt-6 border-t border-gray-100 dark:border-slate-700/50 space-y-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500 dark:text-slate-400 font-medium">
          Price:
        </span>
        <span className="text-2xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          ${recipePrice}
        </span>
      </div>

      {/* Grid Layout for Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {/* Like Button */}
        <button
          onClick={() => {
            setIsLiked(!isLiked);
            handleIncrementLike();
          }}
          className={`w-full py-3 px-2 rounded-xl border font-semibold text-xs transition flex items-center justify-center gap-2
            ${
              isLiked
                ? "bg-red-500 text-white border-red-500 shadow-md shadow-red-500/20"
                : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
            }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
          {isLiked ? "Liked" : "Like"}
        </button>

        {/* Favorite Button */}
        <button
          onClick={handleAddToFavorite}
          className={`w-full py-3 px-2 rounded-xl border font-semibold text-xs transition flex items-center justify-center gap-2
            ${
              isFavorited
                ? "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20"
                : "border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
            }`}
        >
          <Star className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
          {isFavorited ? "Favorited" : "Favorite"}
        </button>

        {/* Purchase Button */}
        <form action={"/api/payment"} method="POST">
          <input type="hidden" name="price" value={recipePrice} />
          <input type="hidden" name="title" value={recipe.recipeName} />
          <input type="hidden" name="price" value={recipe._id} />
          <input type="hidden" name="image" value={recipe.recipeImage} />
          <button className="w-full py-3 px-2 font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-md hover:shadow-cyan-500/30 transition rounded-xl flex items-center justify-center gap-2">
            <CreditCard className="w-4 h-4" />
            Purchase
          </button>
        </form>

        {/* Report Button */}
        <button
          onClick={() => setIsReportModalOpen(true)}
          className="w-full py-3 px-2 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/20 font-semibold text-xs text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-950/40 transition flex items-center justify-center gap-2"
        >
          <AlertTriangle className="w-4 h-4" />
          Report
        </button>
      </div>

      {/* Report Modal Popup */}
      {isReportModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="bg-white dark:bg-slate-800 w-full max-w-md p-6 rounded-3xl border border-gray-100 dark:border-slate-700 relative">
            {/* Top Close Icon Cross Button */}
            <button
              onClick={() => setIsReportModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Report this Recipe
            </h3>

            <form onSubmit={handleReportSubmit} className="mt-4 space-y-4">
              {/* ৩টি নির্দিষ্ট রিজনের ড্রপডাউন */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                  Select Reason <span className="text-red-500">*</span>
                </label>
                <select
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full border border-gray-200 dark:border-slate-600 rounded-xl p-3 text-sm bg-gray-50 dark:bg-slate-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  required
                >
                  <option value="" disabled hidden>
                    Choose a reason...
                  </option>
                  <option value="Spam">Spam</option>
                  <option value="Offensive Content">Offensive Content</option>
                  <option value="Copyright Issue">Copyright Issue</option>
                </select>
              </div>

              {/* ডিটেইলস মেসেজ ফিল্ড */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                  Details / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={reportMessage}
                  onChange={(e) => setReportMessage(e.target.value)}
                  placeholder="Tell us more about the issue..."
                  rows="4"
                  className="w-full border border-gray-200 dark:border-slate-600 rounded-xl p-3 text-sm bg-gray-50 dark:bg-slate-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
