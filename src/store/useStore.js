import create from "zustand";

import createBearSlice from "./createBearSlice";
import createFishSlice from "./createFishSlice";
import createHoneySlice from "./createHoneySlice";
import createArticlesSlice from "./createArticlesRecSlice";
import createBookRecSlice from "./createBookRecSlice";
import createQuizResultsSlice from "./createQuizResultsSlice";
import createVideosRecSlice from "./createVideosRecSlice";


const useStore = create((set, get) => ({
  ...createArticlesSlice(set, get),
  ...createBookRecSlice(set, get),
  ...createQuizResultsSlice(set, get),
  ...createVideosRecSlice(set, get),
  ...createHoneySlice(set, get),
  ...createFishSlice(set, get)
}));

export default useStore;