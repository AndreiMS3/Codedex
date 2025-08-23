const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];


function mean(viewsArray){ 
    let totalViews = 0;
    for (let i = 0; i < Math.floor(viewsArray.length); i ++){
        totalViews += viewsArray[i];
    }
    return totalViews / Math.floor(viewsArray.length)
}

function median(viewsArray){
    let sortedStats = viewsArray.sort((a,b)=> a -b);
    let middleIndex= Math.floor(sortedStats.length/2);
    return sortedStats[middleIndex];
 
}

console.log("TikTok");
console.log(mean(recentTikTokViews));
console.log(median(recentTikTokViews));

console.log("Instagram");
console.log(mean(recentInstagramViews));
console.log(median(recentInstagramViews));

console.log("Youtube");
console.log(mean(recentYouTubeViews));
console.log(median(recentYouTubeViews));