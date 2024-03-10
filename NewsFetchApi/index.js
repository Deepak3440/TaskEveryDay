//  function createOrder(){
//     // return orderId;
//     fn(orderId);
//  }

//  function proceedTOPayment(orderId){
//     console.log("processing");
//     return paymentLink;;
//  }




//  createOrder(proceedTOPayment);
// const options={
//     headers:{
//         'Access-Control-Allow-Origin':'*'
//     }
// }

// const pr = fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi/?key=Q9MZV6LNNVHHCCWHZD2A9E3GG',options)
// .then(function(res) {
//     const js=res.json();
//     js.then((data)=>{
//         console.log(data.days[0].tempmin);

//     })
//     console.log("Result:", res.status);
// })
// .catch(function (err) {
//     console.log("!Error", err);
// });

export function callAPI(url, options){
    const pr = fetch(url, options);
    return pr;
}



