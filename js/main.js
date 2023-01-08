/* nav script  */ 

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    document.querySelector("body").classList.toggle("active");
})
/* nav script  */ 


// var//



let searchbar = document.getElementById("searchbar")
let moviePoster =document.getElementsByClassName("moviePoster")
let movieInfo =document.getElementsByClassName("movieInfo")
let searchterm
let navLink = document.querySelectorAll(".item");

let baseUrl = "https://api.themoviedb.org/3";
let  api_key =
"?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2xdWVYRx1RaONlkJn0FWVYFGphnTOagQW8wokQVhiEZhP_FKIULFSSMeo&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"



let response, apiResult ,final

 async function getApi(data , coll) {

   response = await  fetch(`https://api.themoviedb.org/3/${data}/${coll}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2xdWVYRx1RaONlkJn0FWVYFGphnTOagQW8wokQVhiEZhP_FKIULFSSMeo&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
  apiResult =  await response.json()
  final  = await apiResult.results
  display()
}
getApi( "movie" ,"popular");


function display() {
let cartona = ""
  for(i =0 ; i <final.length ; i++)
  {   

  cartona+= `
  <div class="col-md-4 my-3 ">
  <div class="poster position-relative moviePoster">
      <img src="https://image.tmdb.org/t/p/w500${final[i].poster_path}" class="w-100" alt="">
      <div
          class="poster-layer position-absolute d-flex align-items-center justify-content-center text-center movieInfo">
          <div class="poster-desc ">
              <h2 class>${final[i].original_title}</h2>
              <p> ${final[i].overview}</p>
          </div>
      </div>
  </div>
</div>
`}
document.getElementById("data").innerHTML=cartona
}




for (let i = 0; i < navLink.length; i++){
navLink[i].addEventListener("click",function (e) {
switch (e.target.innerHTML) {
  case "Popular":
    getApi( "movie" ,"popular");
        break;
      case "Now playing":
      getApi( "movie" ,"now_playing");
      break;
      case "Top Rated":
        getApi( "movie" ,"top_rated");
        break;
        case "Trending":
          getApi( "movie" ,"popular");
          break;
          case "Upcoming":
            getApi( "movie" ,"upcoming");
            break;
          

}
}) }

