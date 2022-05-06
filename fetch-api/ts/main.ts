const cep = document.querySelector("#cep") as HTMLInputElement;

const showData = (result: any) => {

    for(const campo in result){
        if (document.querySelector("#" + campo) as HTMLInputElement) {
                (document.querySelector("#" + campo) as HTMLInputElement).value = result[campo];
                
        }
    }
}


cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");

    const options: RequestInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then( response => {
        response.json()
        .then(data => showData(data))
    })
    .catch(e => console.log(e.message))
})
