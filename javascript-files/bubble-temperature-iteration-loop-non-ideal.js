var graph = null;
let T_values_Bubble = [];

// graph is just a straight line down... not good

function calculate() {
    let temperature_Bubble = [];
    let T_values_Bubble = [];
    let T_new_Bubble_Array = [];
    let A_Bubble = [];
    let B_Bubble = [];
    let C_Bubble = [];

    A_Bubble.splice(0, A_Bubble.length);
    B_Bubble.splice(0, B_Bubble.length);
    C_Bubble.splice(0, C_Bubble.length);
    temperature_Bubble.splice(0, temperature_Bubble.length);
    T_values_Bubble.splice(0, T_values_Bubble.length);
    T_new_Bubble_Array.splice(0, T_new_Bubble_Array.length);

    var A1_Bubble = parseFloat(document.getElementById("A1-Bubble").value);
    var B1_Bubble = parseFloat(document.getElementById("B1-Bubble").value);
    var C1_Bubble = parseFloat(document.getElementById("C1-Bubble").value);
    var A2_Bubble = parseFloat(document.getElementById("A2-Bubble").value);
    var B2_Bubble = parseFloat(document.getElementById("B2-Bubble").value);
    var C2_Bubble = parseFloat(document.getElementById("C2-Bubble").value);
    var Margules_12 = parseFloat(document.getElementById("Margules-constant-12").value);
    var Margules_21 = parseFloat(document.getElementById("Margules-constant-21").value);
    let Unit_Bubble = document.getElementById("Unit-Bubble").value;
    var Pres_Bubble = parseFloat(document.getElementById("Pressure-Bubble-System").value);
    var x1_Bubble = parseFloat(document.getElementById("Liquid-Bubble-Moles").value);
    var tolerance = parseFloat(document.getElementById("Tolerance_Bubble").value);

    A_Bubble = [A1_Bubble, A2_Bubble];
    B_Bubble = [B1_Bubble, B2_Bubble];
    C_Bubble = [C1_Bubble, C2_Bubble];

    keep_looping_Bubble = true;
    var total_Bubble = 0;
    var avg_Bubble = 0;

    var x2_Bubble = 1 - x1_Bubble;
    var RHS1 = Math.pow(x2_Bubble, 2) * (Margules_12 + 2 * x1_Bubble * (Margules_21 - Margules_12));
    var gamma1 = Math.exp(RHS1);
    var RHS2 = Math.pow(x1_Bubble, 2) * (Margules_21 + 2 * x2_Bubble * (Margules_12 - Margules_21));
    var gamma2 = Math.exp(RHS2);

    for (var i = 0; i < 2; i++) {
        var T_Bubble = B_Bubble[i] / (A_Bubble[i] - Math.log(Pres_Bubble)) - C_Bubble[i];
        var total_Bubble = total_Bubble + T_Bubble;
        temperature_Bubble.push(T_Bubble);
    }
    var sum = temperature_Bubble[0] + temperature_Bubble[1];
    var avg_Bubble = sum / 2;

    while (keep_looping_Bubble) {
        var p1_Bubble = Math.exp(A_Bubble[0] - B_Bubble[0] / (avg_Bubble + C_Bubble[0]));
        var p2_Bubble = Math.exp(A_Bubble[1] - B_Bubble[1] / (avg_Bubble + C_Bubble[1]));
        var y1_Bubble = (x1_Bubble * gamma1 * p1_Bubble) / (Pres_Bubble);
        var y2_Bubble = (x2_Bubble * gamma2 * p2_Bubble) / (Pres_Bubble);
        var sum = y1_Bubble + y2_Bubble
        var check = Math.abs(sum - 1)
        T_values_Bubble.push(avg_Bubble);
        if (check >= tolerance) {
            avg_Bubble *= 0.999;
            // temperature guess was too large so multuplied it by 99.9% to slightly decrease the guess to try and converge
        } else if (check < 0) {
            avg_Bubble *= 1.001;
            // temperature guess was too small so multilpied it by 100.1% to slightly increase the guess to try and converge
        } else {
            keep_looping_Bubble = false;
            // converged on the correct temperature
        }
    }
    var output_Bubble =
        "The graph converges to a temperature of " +
        T_values_Bubble[T_values_Bubble.length - 1] +
        " °" +
        Unit_Bubble +
        " the difference between the 2 final temperature values: " +
        Math.abs(
            T_values_Bubble[T_values_Bubble.length - 2] -
            T_values_Bubble[T_values_Bubble.length - 1]
        ) + " °" + Unit_Bubble +
        "\nthe vapour phase composition: y1 = " +
        y1_Bubble +
        " and y2 = " +
        y2_Bubble + "usually take results to 2 decimal places as not 100% accurate!";

    const x_axis = Array.from(
        { length: T_values_Bubble.length },
        (_, i) => i + 1
    );
    const ctx = document.getElementById("Graph_Bubble").getContext("2d");
    if (graph) {
        graph.clear();
        graph.destroy();
    }
    graph = new Chart(ctx, {
        type: "line",
        data: {
            labels: x_axis,
            datasets: [{
                label: "Temperature in °" + Unit_Bubble,
                data: T_values_Bubble,
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
    document.getElementById("Text_Result_Bubble").innerHTML = output_Bubble;
    document.getElementById("Graph_Bubble").innerHTML = graph
};