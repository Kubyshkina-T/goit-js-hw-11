import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";    
import { showLoader, hideLoader } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";


const form = document.querySelector(".form");
const inputEl = document.querySelector('input[name="search-text"]');


form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const query = event.currentTarget.elements['search-text'].value.trim();
    const inputValue = inputEl.value;

 clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then(data => {
            if (!data.hits.length) {
                iziToast.info({
                    message: `Sorry, there are no images matching your search query. Please try again!
    `
                });
                return;
            }
            createGallery(data.hits);
           form.reset();
        })
        .catch(error => {
            console.log("CATCH ERROR:", error);
            iziToast.error({
                message: `Something went wrong 😢`
            });
        })
         .finally(() => {
            hideLoader();
         });
    
}