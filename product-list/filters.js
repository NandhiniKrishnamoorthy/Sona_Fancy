function showhide_filters(){
    const filter_status = document.getElementById("filter_container");
    if(filter_status.style.display === "block"){
        filter_status.style.display = "none";
    }
    else{
        filter_status.style.display = "block";
    }
}

function wishlist_style(){
    let wishlist_color = document.querySelector('.add_to_wishlist');
    wishlist_color.addEventListener('click', function onClick() {
        if(wishlist_color.style.color == "white"){
            wishlist_color.style.color = "red";
        }
        else{
            wishlist_color.style.color = "white";
        }
    });
}