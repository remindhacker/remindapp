let videosToDisplay = [];


// function for youtube api fetch
function fetchVideos(searchTerm) {
    // want to find a way to check for only embeddable videos, format=5 kind of works
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerm + "&safeSearch=moderate&format=5&key=AIzaSyDkgh_PUGT_MHKcw1jIVT-sqJKfJGKkLUU")
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        // find random 4 videos out of the 10 generated
        for (i = 0; i < 4; i++) {
          let a = Math.floor(Math.random() * 10);
          let video = result.items[a].id.videoId;
          // to check for duplicates
          if (videosToDisplay.includes(video)) {
            i--
          }
          else {
            videosToDisplay.push(video);
           // displayVideo(video, i);
          };
        };
      }).catch(function (error) {
        // logs error if a problem occurs
        console.log(error);
      });
  };


  const createVideosRecSlice = (set, get) => ({
    eatFish: () => {
      set((prev) => ({ fishes: prev.fishes > 1 ? prev.fishes - 1 : 0 }));
    }
  });
  
  export default createVideosRecSlice;