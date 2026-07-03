const videos = [
  {
    id: "D9PTbKTSIMI",
    title: "Step-by-Step Guide: How to Make Moist Pecan Cinnamon Rolls from Scratch",
    duration: "9:35",
    views: "274",
    date: "1 year ago",
  },
  {
    id: "_wqtpWv0mVI",
    title: "The Secrets to Perfectly Seasoning Your Electric Smoker Revealed by Chef Marty",
    duration: "4:28",
    views: "37",
    date: "2 years ago",
  },
  {
    id: "u1RMU3CCNmg",
    title: "Glazed Carrots with Pecans",
    duration: "7:32",
    views: "55",
    date: "2 years ago",
  },
  {
    id: "uMs-HoikUtA",
    title: "How to make French (Baguette) Bread from scratch",
    duration: "33:20",
    views: "85",
    date: "2 years ago",
  },
  {
    id: "___6560W7gw",
    title: "Cherry Streusel",
    duration: "5:15",
    views: "53",
    date: "2 years ago",
  },
  {
    id: "73FVZ6Er2-M",
    title: "Homemade Corn Bread (scratch old school)",
    duration: "6:57",
    views: "106",
    date: "2 years ago",
  },
  {
    id: "83gRvCB7jcc",
    title: "Salty and Sweet Shrimp with Orzo",
    duration: "3:53",
    views: "79",
    date: "4 years ago",
  },
  {
    id: "AjQq-b7a674",
    title: "Pecan and Almond Shortbread cookies",
    duration: "2:01",
    views: "54",
    date: "4 years ago",
  },
  {
    id: "S8lqeoNU2xk",
    title: "Kiwi Chiffon Pie",
    duration: "2:13",
    views: "72",
    date: "4 years ago",
  },
  {
    id: "LXq847n4hEk",
    title: "Chicken Pasta in Pink sauce",
    duration: "1:54",
    views: "62",
    date: "4 years ago",
  },
  {
    id: "P4MyxqdygoA",
    title: "Sweet Potato Swiss Roll",
    duration: "22:46",
    views: "70",
    date: "5 years ago",
  },
  {
    id: "khYX6-ewbmE",
    title: "Homemade Specialty Pie Crust",
    duration: "4:17",
    views: "73",
    date: "6 years ago",
  },
];

export default function Videos() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Cooking Videos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Watch step-by-step cooking tutorials and culinary tips from Chef Marty. Learn new techniques and discover delicious recipes.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  {/* Video Thumbnail */}
                  <div className="relative bg-black aspect-video overflow-hidden">
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8 text-primary-foreground ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{video.views} views</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Subscribe for More
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Don&apos;t miss new recipes and cooking tips. Subscribe to the Specialty Chef Marty YouTube channel.
          </p>
          <a
            href="https://youtube.com/@specialtychefcookingwithma2783"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}