const createArticlesSlice = (set, get) => ({
    eatFish: () => {
      set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
    }
  });
  
  export default createArticlesSlice;
  