window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(funtionApi).then(reponse => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = responce.count;
        document.getElementById("counter").innerText = count;
    }).catch(function (error){
        console.log(error);
    });
    return count;
}