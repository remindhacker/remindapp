let savedResources = [];
let quizResults = [];
let quizSavedResults = [];

const createQuizResultsSlice = (set, get) => ({
    eatFish: () => {
      set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
    }
  });
  
  export default createQuizResultsSlice;