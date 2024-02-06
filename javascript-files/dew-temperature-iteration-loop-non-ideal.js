var graph = null;
let T_values_Dew = [];

// graph is just a straight line down... not good

function calculate() {
    let temperature_Dew = [];
    let T_values_Dew = [];
    let T_new_Dew_Array = [];
    let A_Dew = [];
    let B_Dew = [];
    let C_Dew = [];

    A_Dew.splice(0, A_Dew.length);
    B_Dew.splice(0, B_Dew.length);
    C_Dew.splice(0, C_Dew.length);
    temperature_Dew.splice(0, temperature_Dew.length);
    T_values_Dew.splice(0, T_values_Dew.length);
    T_new_Dew_Array.splice(0, T_new_Dew_Array.length);

    var A1_Dew = parseFloat(document.getElementById("A1-Dew").value);
    var B1_Dew = parseFloat(document.getElementById("B1-Dew").value);
    var C1_Dew = parseFloat(document.getElementById("C1-Dew").value);
    var A2_Dew = parseFloat(document.getElementById("A2-Dew").value);
    var B2_Dew = parseFloat(document.getElementById("B2-Dew").value);
    var C2_Dew = parseFloat(document.getElementById("C2-Dew").value);
    var Margules_12 = parseFloat(document.getElementById("Margules-constant-12").value);
    var Margules_21 = parseFloat(document.getElementById("Margules-constant-21").value);
    let Unit_Dew = document.getElementById("Unit-Dew").value;
    var Pres_Dew = parseFloat(document.getElementById("Pressure-Dew-System").value);
    var y1_Dew = parseFloat(document.getElementById("vapour-Dew-Moles").value);
    var tolerance = parseFloat(document.getElementById("Tolerance_Dew").value);

    A_Dew = [A1_Dew, A2_Dew];
    B_Dew = [B1_Dew, B2_Dew];
    C_Dew = [C1_Dew, C2_Dew];

    keep_looping_Dew = true;
    var total_Dew = 0;
    var avg_Dew = 0;

    var y2_Dew = 1 - y1_Dew;
    var RHS1 = Math.pow(y2_Dew, 2) * (Margules_12 + 2 * y1_Dew * (Margules_21 - Margules_12));
    var gamma1 = Math.exp(RHS1);
    var RHS2 = Math.pow(y1_Dew, 2) * (Margules_21 + 2 * y2_Dew * (Margules_12 - Margules_21));
    var gamma2 = Math.exp(RHS2);

    for (var i = 0; i < 2; i++) {
        var T_Dew = B_Dew[i] / (A_Dew[i] - Math.log(Pres_Dew)) - C_Dew[i];
        var total_Dew = total_Dew + T_Dew;
        temperature_Dew.push(T_Dew);
    }
    var sum = temperature_Dew[0] + temperature_Dew[1];
    var avg_Dew = sum / 2;

    while (keep_looping_Dew) {
        var p1_Dew = Math.exp(A_Dew[0] - B_Dew[0] / (avg_Dew + C_Dew[0]));
        var p2_Dew = Math.exp(A_Dew[1] - B_Dew[1] / (avg_Dew + C_Dew[1]));
        // alter bit below!
        var y1_Dew = (x1_Dew * gamma1 * p1_Dew) / (Pres_Dew);
        var y2_Dew = (x2_Dew * gamma2 * p2_Dew) / (Pres_Dew);
        var sum = y1_Dew + y2_Dew;
        var check = Math.abs(sum - 1);
        T_values_Dew.push(avg_Dew);
        if (check >= tolerance) {
            avg_Dew *= 0.999;
            // temperature guess was too large so multuplied it by 99.9% to slightly decrease the guess to try and converge
        } else if (check < 0) {
            avg_Dew *= 1.001;
            // temperature guess was too small so multilpied it by 100.1% to slightly increase the guess to try and converge
        } else {
            keep_looping_Dew = false;
            // converged on the correct temperature
        }
    }
    var output_Dew =
        "The graph converges to a temperature of " +
        T_values_Dew[T_values_Dew.length - 1] +
        " °" +
        Unit_Dew +
        " the difference between the 2 final temperature values: " +
        Math.abs(
            T_values_Dew[T_values_Dew.length - 2] -
            T_values_Dew[T_values_Dew.length - 1]
        ) + " °" + Unit_Dew +
        "\nthe liquid phase composition: x1 = " +
        x1_Dew +
        " and x2 = " +
        x2_Dew + " usually take results to 2 decimal places as not 100% accurate!";

    const x_axis = Array.from(
        { length: T_values_Dew.length },
        (_, i) => i + 1
    );
    const ctx = document.getElementById("Graph_Dew").getContext("2d");
    if (graph) {
        graph.clear();
        graph.destroy();
    }
    graph = new Chart(ctx, {
        type: "line",
        data: {
            labels: x_axis,
            datasets: [{
                label: "Temperature in °" + Unit_Dew,
                data: T_values_Dew,
                backgroundColor: [
                    "rgba(255, 192, 203, 1)"
                ],
                borderColor: "#FFC0CB"
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Temperature values through the iteration loops",
                },
            },
            legend: {
                display: false,
                position: "bottom",
                name: "Temperatures",
                text: "Temperature Chart",
            },
        },
    });
    document.getElementById("Text_Result_Dew").innerHTML = output_Dew;
    document.getElementById("Graph_Dew").innerHTML = graph
};