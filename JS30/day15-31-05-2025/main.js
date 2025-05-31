//bài 1
class student{
    constructor(id,name,mail,age){
        this.id=id;
        this.name=name;
        this.mail=mail;
        this.age=age;
    }

    displayinfo(){
        console.log(`${this.id} có tên học sinh là ${this.name} mail là: ${this.mail} ${this.age} tuổi`);
}  }
let sv1=new student("275","Nguyễn Duy Tư","duytu@gmail.com","19");
let sv2=new student("1797","Nguyễn Ngọc Lan","Lan@gmail.com","16");
sv1.displayinfo();
sv2.displayinfo();

//bài 2

    class Employee{
        constructor(name,position,baseSalary,workingDays){
            this.name=name;
            this.position=position;
            this.baseSalary=baseSalary;
            this.workingDays=workingDays;
        }
        calculateSalary(){
            this.slr=this.baseSalary*this.workingDays;
        }
        show(){
            console.log(`Nhân viên: ${this.name} làm chức vụ ${this.position} có mức lương là ${this.slr}`);
        }   
    }
    let nv1=new Employee("Tư","giám đốc","200000","29");
    nv1.calculateSalary();
    nv1.show();

//bài3

    class product{
        constructor(id,name,price,quantity){
            this.id=id;
            this.name=name;
            this.price=price;
            this.quantity=quantity;
        }
    }
    let storage=[];
    function them(sanpham){
        storage.push(sanpham);
    }
    function sum(){
        let tong=0;
        for (let i=0;i<storage.length;i++){
            let giatri=storage[i].price * storage[i].quantity;
            tong+=giatri;
        }
        return tong;
    }
    function max(){
        let pricemax=storage[0];
        for (let i=0;i<storage.length;i++){
            if (storage[i].price>pricemax.price){
                pricemax=storage[i];
            }
        }
        return pricemax;
    }
them(new product("i",'tên lửa',100,5));
them(new product('2','Máy bay',200,10));
them(new product('3','tàu chiến',500,1));
them(new product('4','tàu sân bay',1000,1));
console.log(`sum=${sum()}`);
console.log(`Sanr phẩm có giá cao nhất là ${max().name} với ${max().price}`);
