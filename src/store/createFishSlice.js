const maxFishes = 10;

const createFishSlice = (set, get) => ({
  fishes: maxFishes,
  repopulate: () => {
    set((prev) => ({ fishes: maxFishes }));
  }
});

export default createFishSlice;