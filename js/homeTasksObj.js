const showThis = () => {
  console.log(this);
};
showThis();
const user = {
  name: 'mango',
};
user.showContext = showThis;
user.showContext();
