const getData = async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      console.log(data);

      let contenido = "";
      data.forEach(element => {
        contenido += `
        <div class="score-item">
             <div class="summary">
                <img src="${element.icon}">
                <p>${element.category}</p>
             </div>
             <h4><span id="score">${element.score} </span> / 100</h4>                
        </div>
        `
        document.querySelector(".scores").innerHTML = contenido;
      });




    } catch (error) {
      console.log(error);
    }
  };  
  getData();
  