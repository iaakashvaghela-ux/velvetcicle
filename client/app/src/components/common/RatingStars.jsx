"use client";

import { Star, StarHalf } from "lucide-react";

export default function RatingStars({ rating, reviews, size = 14 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((s) => {
          if (rating >= s) return <Star key={s} size={size} className="fill-current" />;
          if (rating >= s - 0.5) return <StarHalf key={s} size={size} className="fill-current" />;
          return <Star key={s} size={size} />;
        })}
      </div>
      {reviews !== undefined && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {rating} ({reviews})
        </span>
      )}
    </div>
  );
}
