export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663243890751/YyMZfsz7vcD9v9ZWwSRhW5/fresh-baked-bread-cRACtDABinsGeKwfnd3myc.webp"
          alt="Fresh baked bread"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              About Specialty Chef Marty
            </h1>
            <p className="text-lg md:text-xl opacity-95">
              Sharing passion for cooking, baking, and culinary adventures
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663243890751/YyMZfsz7vcD9v9ZWwSRhW5/hero-chef-cooking-ie8eXAfkMGSPRAvK5GDu3F.webp"
                alt="Chef Marty"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
              <div className="h-1 w-16 bg-primary mb-6" />
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
                style={{ fontFamily: "Playfair Display" }}
              >
                Meet Chef Marty
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Chef Marty is a passionate home cooking enthusiast dedicated to sharing delicious recipes and culinary techniques with everyone. With years of experience in the kitchen, Chef Marty believes that anyone can create restaurant-quality dishes at home.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Through detailed step-by-step video tutorials, Chef Marty makes cooking accessible and fun. Whether you&apos;re a beginner or an experienced cook, you&apos;ll find inspiration and practical tips to elevate your culinary skills.
              </p>
              <p className="text-lg text-muted-foreground">
                The channel covers everything from classic baking techniques to innovative pasta dishes, with a focus on quality ingredients and authentic flavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Info */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center"
            style={{ fontFamily: "Playfair Display" }}
          >
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">🎥</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Playfair Display" }}>
                Video Tutorials
              </h3>
              <p className="text-muted-foreground">
                Detailed step-by-step video guides that make cooking easy to follow and understand. Perfect for visual learners.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Playfair Display" }}>
                Recipes
              </h3>
              <p className="text-muted-foreground">
                A collection of tested recipes ranging from baking to savory dishes, all designed for home cooks of all levels.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Playfair Display" }}>
                Cooking Tips
              </h3>
              <p className="text-muted-foreground">
                Expert tips, techniques, and fun facts about cooking, baking, wines, and culinary wellness to enhance your kitchen skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channel Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center"
            style={{ fontFamily: "Playfair Display" }}
          >
            By The Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">145+</p>
              <p className="text-lg text-muted-foreground">Subscribers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">41</p>
              <p className="text-lg text-muted-foreground">Videos</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">6+</p>
              <p className="text-lg text-muted-foreground">Years Active</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary mb-2">∞</p>
              <p className="text-lg text-muted-foreground">Passion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Mission
          </h2>
          <p className="text-lg max-w-3xl mx-auto opacity-95 mb-8">
            To inspire home chefs everywhere to create delicious, authentic meals with confidence. We believe that cooking should be accessible, enjoyable, and rewarding for everyone, regardless of skill level.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-95">
            Through detailed tutorials, proven recipes, and genuine passion for food, we help you transform your kitchen into a place of creativity and joy.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to Specialty Chef Marty on YouTube and never miss a new recipe or cooking tip.
          </p>
          <a
            href="https://youtube.com/@specialtychefcookingwithma2783"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
}