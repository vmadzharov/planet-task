 function checkLocalStorage (){
    const now = new Date().getTime();
    const planet = localStorage.getItem('planet');
    return new Promise((resolve, reject) => {
      if((now - planet) < 60000 ){        
        resolve(true)        
			}else{
        reject('Not authorise')
        localStorage.removeItem('planet');
      }
    })
  }

  export default checkLocalStorage;