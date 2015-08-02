function* count() {
  var start = 0;
  while (true) {
    console.log(start++);
    yield;
  }
}

function run(generatorObject) {
  if (!generatorObject.next().done) {
    setTimeout(function () {
      run(generatorObject);
    }, 1000);
  }
}

run(count());