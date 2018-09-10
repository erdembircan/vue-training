const data = { a: 1 };

const vm = new Vue({
  data,
});

console.log(vm.a === data.a);

vm.a = 2;

console.log(data.a);

data.a = 3;

console.log(vm.a);
