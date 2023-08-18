var graph = null;

function calculate() {
    let temperature_dew = [];
    let T_values_Dew = [];
    let T_new_Dew_Array = [];
    let A_Dew = [];
    let B_Dew = [];
    let C_Dew = [];

    A_Dew.splice(0, A_Dew.length);
    B_Dew.splice(0, B_Dew.length);
    C_Dew.splice(0, C_Dew.length);
    temperature_dew.splice(0, temperature_dew.length);
    T_values_Dew.splice(0, T_values_Dew.length);
    T_new_Dew_Array.splice(0, T_new_Dew_Array.length);

    var A1_Dew = parseFloat(document.getElementById("A1-Dew").value);
    var B1_Dew = parseFloat(document.getElementById("B1-Dew").value);
    var C1_Dew = parseFloat(document.getElementById("C1-Dew").value);
    var A2_Dew = parseFloat(document.getElementById("A2-Dew").value);
    var B2_Dew = parseFloat(document.getElementById("B2-Dew").value);
    var C2_Dew = parseFloat(document.getElementById("C2-Dew").value);
    let Unit_Dew = document.getElementById("Unit-Dew").value;
    var Pres_Dew = parseFloat(document.getElementById("Pressure-Dew-System").value);
    var y1_Dew = parseFloat(document.getElementById("Vapour-Dew-Moles").value);
    var Max_Iterations_Dew = parseFloat(document.getElementById("Max-Iterations_Dew").value);

    A_Dew = [A1_Dew, A2_Dew];
    B_Dew = [B1_Dew, B2_Dew];
    C_Dew = [C1_Dew, C2_Dew];

    var iteration_Dew = 0;
    keep_looping_Dew = true;
    var total_Dew = 0;
    var avg_Dew = 0;

    var y2_Dew = 1 - y1_Dew;
    for (var i = 0; i < 2; i++) {
        var T_Dew = B_Dew[i] / (A_Dew[i] - Math.log(Pres_Dew)) - C_Dew[i];
        var total_Dew = total_Dew + T_Dew;
        temperature_dew.push(T_Dew);
    }
    var sum = temperature_dew[0] + temperature_dew[1];
    var avg_Dew = sum / 2;

    while (keep_looping_Dew) {
        var p1_Dew = Math.exp(A_Dew[0] - B_Dew[0] / (avg_Dew + C_Dew[0]));
        var p2_Dew = Math.exp(A_Dew[1] - B_Dew[1] / (avg_Dew + C_Dew[1]));
        var alpha_Dew = p1_Dew / p2_Dew;
        var p1_new_Dew = Pres_Dew * (y1_Dew + y2_Dew * alpha_Dew);
        var T_new_Dew = B_Dew[0] / (A_Dew[0] - Math.log(p1_new_Dew)) - C_Dew[0];
        T_values_Dew.push(T_new_Dew);
        var avg_Dew = T_new_Dew;

        if (iteration_Dew < Max_Iterations_Dew) {
            iteration_Dew++;
            T_new_Dew_Array.push(T_new_Dew);
        } else {
            keep_looping_Dew = false;
            var x1_Dew = (y1_Dew * Pres_Dew) / p1_Dew;
            var x2_Dew = 1 - x1_Dew;
        }
    }

    var output_Dew =
        "The graph converges to a temperature of " +
        T_values_Dew[T_values_Dew.length - 1] +
        " °" +
        Unit_Dew +
        " after " +
        iteration_Dew +
        " loops\n" +
        "the difference between the 2 final temperature values: " +
        Math.abs(
            T_values_Dew[T_values_Dew.length - 2] -
            T_values_Dew[T_values_Dew.length - 1]
        ) + " °" + Unit_Dew +
        "\nthe liquid phase composition: x1 = " +
        x1_Dew +
        " and x2 = " +
        x2_Dew;

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
}