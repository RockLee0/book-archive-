// search button function 
const searchBook=()=>
{
    const searchFeild=document.getElementById('searchFeild');
    const searchText=searchFeild.value;
    // clear data
    searchFeild.value='';   
    const url=`https://openlibrary.org/search.json?q=${searchText}`;

    // fetching data from the link 

    fetch(url)
    .then(res=>res.json())
    .then(All_data=>Display_result(All_data));
}




// Display_result is function to disply results by using cards 

const Display_result= Alldata=>

{  
    // results number 
    const found=document.getElementById('found');
    if(Alldata.docs.length===0){
        found.innerHTML=`
        <h3 class='text-danger'>"No result Found"</h3>
        `
        
    }
    else{
        found.innerHTML=`
        <h3 class='text-success'>All Results : ${Alldata.numFound}
        </h3>        
        `
    }

    

    const search_result=document.getElementById('search-result');
    search_result.textContent = '';
    // here data.docs have all the books as an array
    Alldata.docs.forEach((book)=>
     {
            //new div  
       const div=document.createElement('div');

       div.innerHTML=`
       <div class="card h-100"  style="width: 20rem;">
       <img style="height:250px" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="Book_Cover">
       <div class="card-body">
         <h5 class="card-title">Book Name: ${book.title}</h5>
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Author: ${book.author_name}</li> 
         <li class="list-group-item">Publisher: ${book.publisher}</li>
         <li class="list-group-item">Published in : ${book.first_publish_year}</li>
       </ul>
     </div>

       `;   
    //    append div as a child 
       search_result.appendChild(div);
    })

}
