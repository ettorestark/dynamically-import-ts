async function load() {
  const multiply = await import('./math/multiply');

  const operation = multiply(5, 2);
  console.log(operation);
}

load();