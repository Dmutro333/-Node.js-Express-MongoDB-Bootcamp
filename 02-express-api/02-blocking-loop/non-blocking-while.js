function delay() {
  return new Promise(resolve => setImmediate(resolve));
}

async function nonBlockingLoop() {
  for (let i = 0; i < 5; i++) {
    console.log('🔄 Цикл працює...');
    await delay();
  }
  console.log('✅ Неблокуючий цикл завершено');
}

nonBlockingLoop();
