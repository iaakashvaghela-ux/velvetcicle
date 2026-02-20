"use client";

import RatingStars from "../common/RatingStars";

export default function ReviewSection({ reviews }) {
  const dummyReviews = [
    { id: 1, user: "Elena R.", rating: 5, date: "2 days ago", comment: "The quality of the silk is unparalleled. It drapes perfectly." },
    { id: 2, user: "Marcus V.", rating: 4, date: "1 week ago", comment: "Slightly tighter than expected, but the material feels very premium." }
  ];

  return (
    <div className="mt-32 space-y-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b dark:border-zinc-900 pb-10">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-500 mb-2 block">Voice of the Circle</span>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter dark:text-white">Customer Reviews</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-2xl font-black italic italic leading-none dark:text-white">4.8 / 5.0</p>
            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-1">Overall Satisfaction</p>
          </div>
          <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500 transition-all">Write a Review</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {dummyReviews.map((rev) => (
          <div key={rev.id} className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-3xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-black uppercase italic tracking-tighter dark:text-white">{rev.user}</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">{rev.date}</p>
              </div>
              <RatingStars rating={rev.rating} />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium italic">
              "{rev.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
