 const escreverPais = async (pais) =>{
    const info = await fetch('https://restcountries.com/v3.1/name/'+ pais);
    console.log(await info.json());

}


escreverPais('brazil');