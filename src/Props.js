import React from "react";


//Arrays are we used

const data = [
    {
    title : "Lost In Space",
    imgURL : 'https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVuhqH5tvREn_CdDZ0Hd_h_2U1CNDHNnv_Y7deTApe81b1sei7C7MKvK4gWMpamlSXvo8AIIS5m94R6hwfQapa0x3fwvRPingY5u-pIbsGriC1xqthXsNZ0Wjaq-LdTJd6Bk.jpg?r=152',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

},
{
    title : "Lost In Space",
    imgURL : 'https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVuhqH5tvREn_CdDZ0Hd_h_2U1CNDHNnv_Y7deTApe81b1sei7C7MKvK4gWMpamlSXvo8AIIS5m94R6hwfQapa0x3fwvRPingY5u-pIbsGriC1xqthXsNZ0Wjaq-LdTJd6Bk.jpg?r=152',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

},
{
    title : "Lust Stories2",
    imgURL : "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT4PCq2tim16MbQ9g3OYzMOoIQfn7KliXzFdBPhy69-utfVQo8e0AUjy-h3fNGj3sq1ARsy-8-N-QnA5bJ6dsqLhRJLoU-j92-_MjUUWNw5xHSUxsQ0yGpKdEdXp7W8IjVsm.jpg?r=e81",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
},
{
    title : "cursed",
    imgURL : "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbtnxFkR0OlN-M61xiHe9uaaLFm_1l5NwaPSxMTUTVuNZtC1IshhBQCa0z7ydp-pjz9ZB3XLyjT66T426_ttvYO-0_Ek9gjUiJKqHFRGZq-fJacDppz3peT7zFZ-AMAgQNp_.jpg?r=ae8",
    description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
},
{
    title : "Never Have I Ever",
    imgURL : "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQAJWnvFLSYPW0t4GU3zdJ9D_dehZelN42vgq_vKmulv8CxLFImbuUyrG9y-GXbh5wjvCi89LRbP7tPJSeUU2kCg307DdKVmuGUfNk5S5Ha9c8c-DazPA2-KypJIGF0UtEEU.jpg?r=f0f",
    description :  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",

},
{
    title : "Ludo",
    imgURL : "https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfxjwt2SY_WBZakX_wVHZ8LNyMvj3CwRrBvO7xmBGYzDe0dmfJvwweteGL86N_yvGlA8KQ8O5id1pyPOEcFS-FhUMRWFAwwQ9cEiyeWnFafgV-y3I_gTKlxgZY-3awIr_HW1.jpg?r=e83",
    description :  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
}
]


//Object we are used  
// let lostofspaceobj = {
//     title : "Lost In Space",
//     imgURL : 'https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVuhqH5tvREn_CdDZ0Hd_h_2U1CNDHNnv_Y7deTApe81b1sei7C7MKvK4gWMpamlSXvo8AIIS5m94R6hwfQapa0x3fwvRPingY5u-pIbsGriC1xqthXsNZ0Wjaq-LdTJd6Bk.jpg?r=152',
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// }

// let damselobj = {
//     title : "Damsel",
//     imgURL : 'https://occ-0-6096-2164.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf9HGomsRXjmcPoslw5U5cnnq-JrxIsoxUUoeAGjjZARnBvRnV-y_T8-M3KsRy8yWhUwOEqjDfop9fQryCtzLL6-xDU_UxLdS25pwaGXv7DVMF3E3Z7ZePXBemU62CrrYS4_.jpg?r=ad5',
//     description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
// }


const Prop = () =>{
    // let temparray = [<h1>heading</h1>,<h2>mangos</h2>]
    // let newtemparray = data.map((eachObj)=>{
    //     return (
    //         <article>
    //             <h1>{eachObj.title}</h1>
    //             <img src={eachObj.imgURL} alt={eachObj.title} />
    //             <p>{eachObj.description}</p>
    //         </article>
    //     )
    // })
    // console.log(newtemparray)
    return (
        <section className="movie-container">
            {data.map((eachObj,index) => {
                const {title,imgURL,description} = eachObj;
                return (
                    <Movie 
                    key={index}
                    title={title} imgURL ={imgURL} description = {description} />
                    
                )
            })}
          {/* <Movie 
          title={data[0].title} 
          imgURL={data[0].imgURL}
          description={data[0].description}
        />
         <Movie 
          title={data[1].title} 
          imgURL={data[1].imgURL}
          description={data[1].description}
        /> 
       */}
        </section>
    )
}

// const Movie = (props) =>{  //P means Props
//     return (
//         <article className="each-movie">
        
//             <img src={props.imgURL} alt="open the netflix.com" />
//            <h2>{props.title}</h2> 
//            <p>{props.description}</p>
//         </article>
//     )
// }

  

  const Movie = ({title, imgURL , description}) =>{ 
      //  or 
   // const {title,imgURL,description } = props ;     // Destructing
    return (
        <article className="each-movie">
        
            <img src={imgURL} alt="netflix" />
           <h2>{title}</h2> 
           <p>{description}</p>
        </article>
    )
}
// function getData(userObj){
//  const {firstName :newName , lastName} = userObj;
// console.log(newName);
// console.log(lastName);
// }
// getData({
//   firstName : "anji",
//   lastName : "reddy"
// }
// )





export default Prop;
