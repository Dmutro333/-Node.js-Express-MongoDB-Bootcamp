const fs = require('fs');
fs.readFile('input.txt', 'utf-8', (err, data) => {
  if (err) return console.error('❌ Помилка читання файлу');
  console.log('📄 Зміст файлу:', data);
});
