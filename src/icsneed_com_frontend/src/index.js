import { icsneed_com_backend } from "../../declarations/icsneed_com_backend";
/*
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await icsneed_com_backend.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
*/
//function startTimer() {

//var total_supply = await icsneed_com_backend.get_total_supply();
//document.getElementById("divTotalSupply").innerHTML = "OK";
//document.getElementById("divTest").onclick = async function() {

  var tot_supply = await icsneed_com_backend.get_total_supply();
  tot_supply = parseInt(tot_supply);
  var burned = 10000000000000000 - tot_supply;
  var tot_supply_dec = tot_supply / 1000000000000;
  var burned_dec = burned / 1000000000000;
  document.getElementById("divTotalSupply").innerHTML = tot_supply_dec.toFixed(3); + " SNEED";
  document.getElementById("divBurned").innerHTML = burned_dec.toFixed(3); + " SNEED";
//}

document.getElementById("canisterIdText").onclick = async function() {

  var copyText = document.getElementById("canisterIdText");

   // Copy the text inside the text field
  await navigator.clipboard.writeText(copyText.innerHTML);

  alert("Canister ID copied to clipboard!");
}

  const coreValues = ['Secure', 'Non-inflationary', 'Eco-friendly', 'Efficient', 'Decentralized'];
  let currentIndex = 0;

  setInterval(() => {
    document.getElementById('core-value-container').style.opacity = 0;
      setTimeout(() => {
        
          currentIndex = (currentIndex + 1) % coreValues.length;
          document.getElementById('core-value-container').innerText = coreValues[currentIndex];
          document.getElementById('core-value-container').style.opacity = 1;
      }, 1000);  // 1 second delay to allow the opacity transition to complete
  }, 3000);  // Change core value every 3 seconds

//}