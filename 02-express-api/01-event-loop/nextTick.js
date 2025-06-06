process.nextTick(() => {
  console.log('🔁 Наступний крок у циклі подій (nextTick)');
});

console.log('🟢 Головний потік виконання');
