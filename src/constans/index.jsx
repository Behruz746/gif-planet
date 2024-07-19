const logo = "/img/svg/logo.svg";
const searchIcon = "/img/svg/search-icon.svg";

const CatalogIcon = ({ color }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transition-liner ${color ? "svg-blue" : ""}`}
  >
    <path
      d="M15.0024 0H13.2924C11.3304 0 10.2954 1.0349 10.2954 2.99672V4.70655C10.2954 6.66837 11.3304 7.70327 13.2924 7.70327H15.0024C16.9644 7.70327 17.9994 6.66837 17.9994 4.70655V2.99672C17.9994 1.0349 16.9644 0 15.0024 0Z"
      fill={"#fff"}
    />
    <path
      d="M4.71602 10.2858H3.00602C1.03501 10.2858 0 11.3207 0 13.2825V14.9923C0 16.9631 1.035 17.998 2.99701 17.998H4.70702C6.66903 17.998 7.70404 16.9631 7.70404 15.0013V13.2915C7.71304 11.3207 6.67803 10.2858 4.71602 10.2858Z"
      fill={"#fff"}
    />
    <path
      d="M3.86102 7.72127C5.9934 7.72127 7.72204 5.9928 7.72204 3.86063C7.72204 1.72847 5.9934 0 3.86102 0C1.72864 0 0 1.72847 0 3.86063C0 5.9928 1.72864 7.72127 3.86102 7.72127Z"
      fill={"#fff"}
    />
    <path
      d="M14.1389 18C16.2712 18 17.9999 16.2715 17.9999 14.1393C17.9999 12.0072 16.2712 10.2787 14.1389 10.2787C12.0065 10.2787 10.2778 12.0072 10.2778 14.1393C10.2778 16.2715 12.0065 18 14.1389 18Z"
      fill={"#fff"}
    />
  </svg>
);

const navigationLinks = [
  { name: "Reactions" },
  { name: "Entertainment" },
  { name: "Sports" },
  { name: "Stickers" },
  { name: "Artists" },
  { name: "categories", icon: true },
];

const categories = [
  [
    { name: "GIPHY Studios", path: "giphy-studios" },
    { name: "Animals", path: "animals" },
    { name: "Actions", path: "actions" },
    { name: "Anime", path: "anime" },
    { name: "Cartoons", path: "cartoons" },
    { name: "Emotions", path: "emotions" },
  ],
  [
    { name: "Food/Drink", path: "food-drink" },
    { name: "Gaming", path: "gaming" },
    { name: "Holidays/Greetings", path: "holidays-greetings" },
    { name: "Memes", path: "memes" },
    { name: "Clips", path: "clips" },
    { name: "Music", path: "music" },
  ],
  [
    { name: "Movies", path: "movies" },
    { name: "News/Politics", path: "news-politics" },
    { name: "Science", path: "science" },
    { name: "Transportation", path: "transportation" },
    { name: "Weird", path: "weird" },
    { name: "TV", path: "tv" },
  ],
];

export { logo, searchIcon, CatalogIcon, navigationLinks, categories };
