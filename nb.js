
/*function aa(){
	for(var i = 0; i < 10; i++) {
      setTimeout((function() {
        console.log(i);
      })(), 1000);
    }
};
aa();*/

function aa(){
	for (var i = 0; i < 10; i++) {
       // 注意关键是我们把想要闭包的值当参数传入一个方法
       // 这个方法 return 一个新的方法 -- 闭包!!
       setTimeout(fn(i), 1000);
   }
};
aa();
function fn(){ // 为了深刻理解闭包, 这个函数我没有用参数
       // 神奇的"闭包"发生在这一步, 其实就是作用域和值复制在起了关键作用,
       // 对于数字/字符等类型是复制值, 而不是引用
       var a = arguments[0];
       return function() {
           console.log(a); // 注意现在我操作的变量已经变成 a 了,
                                     // 已经和 i 没有半毛线关系了!
                                     // 而 a 的值就是当时执行时赋予的一个确定值,
                                     // 不会因 i 的变化而变化了!
};}
/*3.再换成更简洁的方式看你能不能真正理解闭包for (var i = 0; i < 10; i++) {
       (function(a) {
           // 变量 i 的值在传递到这个作用域时被复制给了 a,
           // 因此这个值就不会随外部变量而变化了
           setTimeout(function() {
               console.log(a);
           }, 1000);
       })(i); // 我们在这里传入参数来"闭包"变量
   }*/

   

   /* 2. 那么为什么setTimeout中匿名function没有形成闭包呢?
   因为setTimeout中的匿名function没有将 i 作为参数传入来固定这个变量的值, 让其保留下来, 而是直接引用了外部作用域中的 i,
   因此 i 变化时, 也影响到了匿名function.
  因此如果我们定义一个外部函数, 让 i 作为参数传入即可"闭包"我们要的变量了!!
   
   
   }*/
 
