const frame = document.querySelector("section"); 
const lists = frame.querySelectorAll("article"); 
const deg = 45; 
const len = lists.length -1 ; // 순번이 0부터 시작하므로 전체 개수에서 1을 뺌 

let i = 0 ; 

//article 개수만큼 반복 

for (let el of lists) {

       //각 article 요소 안쪽의 재생, 정지, 처음부터 재생 버튼을 변수에 저장
    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");
    let pic = el.querySelector(".pic");  
    pic.style.backgroundImage = `url(../img/member${i+1}.jpg)`;

    //각 article 요소를 45도씩 회전하고 아래로 배치 
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`; 
    // rotate(${deg*i}deg) : 요소를 일정 각도로 회전
    // lists : article 개수 
    // translateY(-100vh) : 요소를 세로 방향으로 화면 높이의 100%만큼 위로 이동시킴
    
    // 첫 번째 반복에서 i는 0이므로: rotate(45 * 0)deg = rotate(0deg)
    // 두 번째 반복에서 i는 1이므로: rotate(45 * 1)deg = rotate(45deg)
    // 세 번째 반복에서 i는 2이므로: rotate(45 * 2)deg = rotate(90deg)
    i++; 

   
  
      //play버튼 클릭 시, 
      play.addEventListener("click", e=>{
          let isActive = e.currentTarget.closest("article").classList.contains("on");
       // paly 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화 
              e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
           // paly 버튼부터 audio 요소까지 탐색한 음악 재생 
            e.currentTarget.closest("article").querySelector("audio").play(); 
                     
      });
  
      //pause버튼 클릭 시 
      pause.addEventListener("click", e=>{
                 
          let isActive = e.currentTarget.closest("article").classList.contains("on");
         // 클래스 on 제거하여 비활성화 
              e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
              e.currentTarget.closest("article").querySelector("audio").pause();
          
                  
      });
  
      //load버튼 클릭 시
      load.addEventListener("click", e=>{
          let isActive = e.currentTarget.closest("article").classList.contains("on");
      
              e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
              e.currentTarget.closest("article").querySelector("audio").load();   
              e.currentTarget.closest("article").querySelector("audio").play(); 
             
      });



}