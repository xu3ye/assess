//层数问题实际上就是斐波那契数列
function layer(n){
						if(n < 0){
							alert('输入的数字不能小于0')
						}else{
							return n<2?n:layer(n-1)+layer(n-2);
						}
		    }