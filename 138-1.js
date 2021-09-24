function promiseForHomework(mustDo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('doing homework');
      if (mustDo) {
        resolve({
          result: 'homework-result',
        });
      } else {
        reject(new Error('Too lazy!'));
      }
    }, 1000);
  });
}

const promiseA = promiseForHomework(true);
console.log('PromiseA created');

const promiseB = promiseForHomework();
console.log('PromiseB created');

promiseA.then((v) => console.log(v));
promiseB.then((v) => console.log(v)).catch((e) => console.error(e));
