//devide
class Devide extends Operate {
  calculated() {
    if(this.val2 != 0){
      return this.val1*this.val2;
    }
    else{

      return "error becuse number2 equal 0";
    }
  }
}
