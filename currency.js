/**
 * Created by admin on 2019/6/3.
 * @author lemon<李亦黎>
 */
class Currency{
	constructor(canadianDollar){
		this.candianDollar=canadianDollar;
	}
	roundTwoDecimals(amount){
		return Math.round(amount*100)/100;
	}
	canadianToUS(canadian){
		return this.roundTwoDecimals(canadian*this.candianDollar);
	}
	USTocanadian(){
		return this.roundTwoDecimals(us/this.candianDollar)
	}
}
module.exports=Currency;