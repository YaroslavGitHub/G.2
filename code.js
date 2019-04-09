function newElement() {
    var credit_amount = document.getElementById("sum_input").value;
    var period_credit = document.getElementById("term_input").value;
    var credit_rate = document.getElementById("rate_input").value;
    console.log(credit_amount, period_credit, credit_rate);

    removeRaw()



    var credit_amount_info = credit_amount;
    var month_payment; //month payment;
    var total_sum = []; //summary



    month_payment = credit_amount * (credit_rate / 12 / 100 +
        (credit_rate / 12 / 100 / (Math.pow((1 + credit_rate / 12 / 100), period_credit) - 1)));
    console.log(month_payment.toFixed(2));




    for (var i = 0; i < period_credit; i++) {

        var rate_payment = credit_amount * credit_rate / 100 / 12
        main_debt = month_payment - rate_payment
        credit_amount = credit_amount - main_debt
        var month_count = i + 1;


        var k = total_sum.push([month_count, month_payment.toFixed(2), main_debt.toFixed(2), rate_payment.toFixed(2), credit_amount.toFixed(2)]);
    }
    console.log(total_sum);
    var overpay = 0;

    for (var i = 0; i < total_sum.length; i++) {

        overpay = overpay + +total_sum[i].slice(3, 4);
        var tag = ` <tr>
                        <td>${total_sum[i].slice(0,1)}</td>
                        <td>${total_sum[i].slice(1,2)}</td>
                        <td>${total_sum[i].slice(2,3)}</td>
                        <td>${total_sum[i].slice(3,4)}</td>
                        <td>${total_sum[i].slice(-1)}</td>
                    </tr>`;
        document.getElementById("results").insertAdjacentHTML("beforebegin", `${tag}`);
        document.getElementById("overpay").innerHTML = overpay.toFixed(2);
    }

    function removeRaw() {

        var r1 = document.getElementsByTagName("tr");
        for (var i = r1.length - 1; i >= 0; --i) {
            r1[i].remove();
        }
    }

}