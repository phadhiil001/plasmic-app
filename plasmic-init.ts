import AlertBox from "./components/AlertBox";
import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import ProductCard from "./components/ProductCard";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "eWGJA79AsDL3mo7LzqxJ7Z",  // ID of a project you are using
      token: "vkMelvyAEB9Yz35uxTeAwqmtUOrx07OR0Ma6p8zWcycZPqSYbkoos8mWpWGUwc1rBRqqVaYVymX5MPXXmHg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(AlertBox, {
    name: 'AlertBox',
    importPath: './components/AlertBox',
    props: {
      message: 'string',
      type: {
        type: 'choice',
        options: ['success', 'warning', 'error'],
      },
    },
  });

  PLASMIC.registerComponent(ProductCard, {
    name: 'ProductCard',
    props: {
      productId: 'string',
      productName: 'string',
      price: 'number',
      imageUrl: 'string',
      darkMode: 'boolean',
      className: 'string',
    },
  });