const logo = "/img/svg/logo.svg";
const searchIcon = "/img/svg/search-icon.svg";
const chart = "/img/svg/chart-icon.svg";
const anime = "/img/svg/anime-icon.svg";

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

const navCategories = [
  { name: "GIPHY Studios", path: "giphy-studios" },
  { name: "Animals", path: "animals" },
  { name: "Actions", path: "actions" },
  { name: "Anime", path: "anime" },
  { name: "Cartoons", path: "cartoons" },
  { name: "Emotions", path: "emotions" },
  { name: "Food/Drink", path: "food-drink" },
  { name: "Gaming", path: "gaming" },
  { name: "Holidays/Greetings", path: "holidays-greetings" },
  { name: "Memes", path: "memes" },
  { name: "Clips", path: "clips" },
  { name: "Music", path: "music" },
  { name: "Movies", path: "movies" },
  { name: "News/Politics", path: "news-politics" },
  { name: "Science", path: "science" },
  { name: "Transportation", path: "transportation" },
  { name: "Weird", path: "weird" },
  { name: "TV", path: "tv" },
];

const titleNav = [
  {
    title: "Gifs",
    dataName: "gif",
  },
  {
    title: "Stickers",
    dataName: "sticker",
  },
  {
    title: "Clips",
    dataName: "clips",
  },
];

const gifData = [
  [
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXR2Mjl4NGh1dnNkenBkNjc5cWJja3NubGdmd2RmM2cyZDZpdDJ6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/q217GUnfKAmJlFcjBX/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmthcGp6ajNib3Y2d2VpZmpzOHoxdjhtd3o3eG1uMmt5Mmk4NWJoZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4ilFRqgbzbx4c/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzF4ZmlpNjNpZHpjOG9lbGhyZ205eGwxMzgyY2MwcHJtNTNpZTQ0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/p4w0AMZJa2EtG/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXVjbGFmNm1rNjF6YTd4d3BoazBsNmswYzZudml4dDZodzhjM3N6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pUp9Nb1czvHMY/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTliejZwaTg3NHB5MzJucm5kOGI4bnNtOW5reGhsazIyNm5zemsweCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oNJ3am00JCroA/giphy.gif",
    },
  ],
  [
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmVhb3hyZWQ0M2Z1OGt2d2J4MDJyeGZndm1oN3poeHptcDY1NXcyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10VjiVoa9rWC4M/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExazVkenJmYWh0c2h0ZGpmbXRseGlpa3R1MTY0a2tuMmN5anJ0MmNrMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eeYbfcTxoxGlG/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTVpejV4cmd1OHR1YTludmk1anU4Ym00ZTQyZW10ZzMzNjduc2s5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cVPcABKys8dHy/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWhlNDB2ZXZlNjh0ejhhMHJ0YTFseXRsdDVjdjR5Y2F3b2RncmxwcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13Z5kstwARnPna/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZxc3lhcGV6MnJrNHk5NXdjaG5nNGhpbzcyZDk3OGwwMWVzdTdmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ayMW3eqvuP00o/giphy.gif",
    },
  ],
  [
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnlvZ3Z4anhld2psb2dqNWlqN2ppZWEzbGUzOTlremFuc2R5ejhxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rl4gSkORNWFKo/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3VtaXJnMWM3NWo5cXQ3MXB5ZHhmZXRmY2NiNnR4c3B5NXRsejgwcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5PhLTi47Eosp7skNDM/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExemN3cW5hcjV0ZzRhN2lzbndyYnB3Zm9haTJkeGpldmU4ZTZmdW1tMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RQNzDjwJSOble/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlmZ3BvZTZ3bno5YWMyZjYzY2QwcXcwbTB6NzFqYmxzZTFlZjFkcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UQ4ZYtqML9s7S/giphy.gif",
    },
    {
      autherName: "Behruz Madaminov",
      gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExenR0N2NnYmJjbmhuNTA0ejkydWV3YWc5dXhxeTEyaGZjd21qbnc4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/137qIhWsIf9bDW/giphy.gif",
    },
  ],
];

export {
  logo,
  chart,
  anime,
  searchIcon,
  CatalogIcon,
  navigationLinks,
  navCategories,
  categories,
  titleNav,
  gifData,
};
