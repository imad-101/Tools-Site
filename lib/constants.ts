export const SITE_CONFIG = {
  name: "Free Online Tools",
  description:
    "A collection of free, easy-to-use online tools designed to boost your productivity and streamline your daily tasks.",
  tagline: "Free Online Tools to Simplify Your Workflow",
  stats: {
    totalTools: "50+",
    categories: "4",
    freeStatus: "100%",
  },
} as const;

export const SORT_OPTIONS = {
  name: "Name",
  popularity: "Popularity",
  rating: "Rating",
  recent: "Recent",
} as const;

export const DEFAULT_FILTERS = {
  searchQuery: "",
  selectedCategory: "all",
  sortBy: "name",
  minRating: 0,
  showFavoritesOnly: false,
  activeTab: "all",
};
