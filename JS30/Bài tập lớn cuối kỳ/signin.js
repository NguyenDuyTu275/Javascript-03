document.querySelector('.img-btn').addEventListener('click',function(){
    document.querySelector('.cont').classList.toggle('s-signup')
}
);

document.getElementById("signup-btn").addEventListener("click", function(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    if (!username || !email || !password || !confirm) {
        alert("Vui lòng nhập đủ thông tin để vào order dịch vụ bạn nhé!!  ❤️ ❤️ ❤️ ");
        return;
    }
    if (password !== confirm) {
        alert("Mật khẩu chưa khớp bạn ơiii bạn check lại xem 😙😙😙 ");
        return;
    }
    let users=JSON.parse(localStorage.getItem("users"))|| [];
    const emailExists = users.some(user => user.email === email);
    if (emailExists){
        alert("Tài khoản đã tồn tại rùiii 😐😐 Gợi ý:bạn có thể đổi mail ");
        return;
    }
    //thêm vào localstorage
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    document.querySelector('.cont').classList.remove('s-signup');
});
document.getElementById("login-btn").addEventListener("click", function(){
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // kiểm tra có tài khoản trc đó ch 
    const user = users.find(user => user.email === email);
    if (!user) {
        alert("Không tìm thấy tài khoản này trước đây");
        setTimeout(() => {
            document.querySelector('.cont').classList.add('s-signup');  
        }, 500);
        return;
    }
    if (user.password === password) {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        alert("Đăng nhập thành công rùiiii! Chào mừng bạn quay lại");
        window.location.href = "banhang.html";  
    } else {
        alert("Sai mật khẩu rùi á. Bạn thử lại xem");
    }
});