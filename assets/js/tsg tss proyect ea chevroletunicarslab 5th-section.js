//  const counters = document.querySelectorAll(".counter");

//         counters.forEach(counter => {
//             let initial_count = 0;
//             const final_count = parseInt(counter.dataset.count, 10);
//             const duration = 68200; // Duración total del conteo en milisegundos (68.2s)
//             const increment = final_count / (duration / 10); // Incremento por intervalo

//             function updateCounting() {
//                 if (initial_count < final_count) {
//                     initial_count += increment;
//                     if (initial_count > final_count) {
//                         initial_count = final_count;
//                     }
//                     counter.innerText = Math.floor(initial_count).toLocaleString();
//                 } else {
//                     initial_count = 0; // Reiniciar el contador
//                 }
//             }

//             setInterval(updateCounting, 10);
//         });




//         const maxMinutes = 1;
//         const maxSeconds = 33;
//         const maxMilliseconds = 320;
//         const interval = 10; // Intervalo de actualización en milisegundos

//         let contador = document.getElementById('contador');
//         let minutes = 0;
//         let seconds = 0;
//         let milliseconds = 0;

//         function updateTime() {
//             milliseconds += interval;
//             if (milliseconds >= 1000) {
//                 milliseconds = 0;
//                 seconds += 1;
//                 if (seconds > maxSeconds) {
//                     seconds = 0;
//                     minutes += 1;
//                     if (minutes > maxMinutes) {
//                         minutes = 0;
//                     }
//                 }
//             }

//             // Formatear el tiempo
//             const minutesStr = String(minutes).padStart(2, '0');
//             const secondsStr = String(seconds).padStart(2, '0');
//             const millisecondsStr = String(milliseconds).padStart(3, '0');

//             contador.textContent = `${minutesStr}:${secondsStr}:${millisecondsStr}`;
//         }

//         setInterval(updateTime, interval);




const counters = document.querySelectorAll(".counter");
const contador = document.getElementById('contador');

const duration = 68200; // Duración total en milisegundos (68.2 segundos)
const startTime = performance.now();

function animate() {
    const currentTime = performance.now();
    const elapsed = (currentTime - startTime) % duration;

    // ⏱️ Actualizar cronómetro
    const totalMs = Math.floor(elapsed);
    const minutes = Math.floor(totalMs / 60000);
    const seconds = Math.floor((totalMs % 60000) / 1000);
    const milliseconds = totalMs % 1000;

    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');
    const millisecondsStr = String(milliseconds).padStart(3, '0');
    contador.textContent = `${minutesStr}:${secondsStr}:${millisecondsStr}`;

    // 🔢 Actualizar contadores numéricos
    counters.forEach(counter => {
        const finalCount = parseInt(counter.dataset.count, 10);
        const progress = elapsed / duration;
        const currentCount = Math.floor(finalCount * progress);
        counter.innerText = currentCount.toLocaleString();
    });

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
