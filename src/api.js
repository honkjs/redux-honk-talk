export function coolApiAction(url) {
  // pretend this is a real api call
  // that uses the url instead of a timer

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
}
