var graph = null;

function calculate() {
    let Temperature_Bubble = [];
    let T_values_Bubble = [];
    let T_new_Bubble_Array = [];
    let A_Bubble = [];
    let B_Bubble = [];
    let C_Bubble = [];

    A_Bubble.splice(0, A_Bubble.length);
    B_Bubble.splice(0, B_Bubble.length);
    C_Bubble.splice(0, C_Bubble.length);
    Temperature_Bubble.splice(0, Temperature_Bubble.length);
    T_values_Bubble.splice(0, T_values_Bubble.length);
    T_new_Bubble_Array.splice(0, T_new_Bubble_Array.length);

    var A1_Bubble = parseFloat(document.getElementById("A1-Bubble").value);
    var B1_Bubble = parseFloat(document.getElementById("B1-Bubble").value);
    var C1_Bubble = parseFloat(document.getElementById("C1-Bubble").value);
    var A2_Bubble = parseFloat(document.getElementById("A2-Bubble").value);
    var B2_Bubble = parseFloat(document.getElementById("B2-Bubble").value);
    var C2_Bubble = parseFloat(document.getElementById("C2-Bubble").value);
    let Unit_Bubble = document.getElementById("Unit-Bubble").value;
    var Pres_Bubble = parseFloat(document.getElementById("Pressure-Bubble-System").value);
    var x1_Bubble = parseFloat(document.getElementById("Liquid-Bubble-Moles").value);
    var Max_Iterations_Bubble = parseFloat(document.getElementById("Max-Iterations").value);

    A_Bubble = [A1_Bubble, A2_Bubble];
    B_Bubble = [B1_Bubble, B2_Bubble];
    C_Bubble = [C1_Bubble, C2_Bubble];

    var iteration_Bubble = 0;
    keep_looping_Bubble = true;
    var total_Bubble = 0;
    var avg_Bubble = 0;

    var x2 = 1 - x1;
    for (var i = 0; i < 2; i++) {
        var T_Bubble = B_Bubble[i] / (A_Bubble[i] - Math.log(P_Bubble[i])) - C_Bubble[i];
        var total_Bubble = total_Bubble + T_Bubble;
        Temperature_Bubble.push(T_Bubble);
    }
    var sum = Temperature_Bubble[0] + Temperature_Bubble[1]
    var avg_Bubble = sum / 2;

    while (keep_looping_Bubble) {
        var p1_Bubble = Math.exp(A_Bubble[0] - B_Bubble[0] / (avg_Bubble + C_Bubble[0]));
        var p2_Bubble = Math.exp(A_Bubble[1] - B_Bubble[1] / (avg_Bubble + C_Bubble[1]));
        var alpha_Bubble = p1_Bubble / p2_Bubble;
        var p2_new_Bubble = P_Bubble[0] / (x1 * alpha_Bubble + x2);
        var T_new_Bubble = B_Bubble[1] / (A_Bubble[1] - Math.log(p2_new_Bubble)) - C_Bubble[1];
        T_values_Bubble.push(T_new_Bubble);
        var avg_Bubble = T_new_Bubble;

        if (iteration_Bubble < Max_Iterations) {
            iteration_Bubble++;
            T_new_Bubble_Array.push(T_new_Bubble);
        } else {
            keep_looping_Bubble = false;
            var y1_Bubble = (p1_Bubble * x_1_Bubble) / P_Bubble[0];
            var y2_Bubble = 1 - y1_Bubble;
        }
    }


    var output =
        "The graph converges to a temperature of " +
        T_values_Bubble[T_values_Bubble.length - 1] + " °" +
        Unit_Bubble +
        " after " +
        iteration_Bubble +
        " loops\n" +
        "The difference between the 2 final temperature values: " +
        Math.abs(
            T_values_Bubble[T_values_Bubble.length - 2] -
            T_values_Bubble[T_values_Bubble.length - 1]
        ) + " °" + Unit_Bubble +
        "\nthe vapour phase composition: y1 = " +
        y1_Bubble +
        " and y2 = " +
        y2_Bubble;

    const x_axis = Array.from(
        { length: T_values_Dew.length },
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
                    "rgba(255, 192, 203, 1)",
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
    document.getElementById("Result_Bubble").innerHTML = output;
}