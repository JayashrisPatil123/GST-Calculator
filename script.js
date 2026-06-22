function calculateGST(){

let amount =
Number(document.getElementById("amount").value);

let gst =
Number(document.getElementById("gst").value);

let gstAmount =
(amount * gst)/100;

let finalAmount =
amount + gstAmount;

document.getElementById("result").innerHTML =

"GST Amount: ₹" + gstAmount.toFixed(2) +

"<br><br>Total Amount: ₹" +

finalAmount.toFixed(2);

}