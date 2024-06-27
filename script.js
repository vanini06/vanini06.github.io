function teste(){
    const aside = document.querySelectorAll(".aside")[0]
    console.log(aside.style.width)

    if(aside.style.width == "100px"){
        aside.style.width = "100vw"
    }else{
        aside.style.width = "100px"
    }
}
const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
