var arr = [
    {
        src: "/img/sp1.png",
        tenSP: "Túi Đeo Chéo Gucci Horsebit",
        moTa: "1955 GG Mini Bag 658574 UULAG 9682 Màu Begie.",
        gia: "29.890.000đ",
    },
    {
        src: "img/sp2.png",
        tenSP: "Túi đeo chéo Gucci Ophidia",
        moTa: "GG Shoulder Bag màu trắng.Phần tay cầm được thiết kế bằng da .",
        gia: "27.890.000đ",
    },
    {
        src: "img/sp3.png",
        tenSP: "Túi Gucci GG",
        moTa: "GG Marmont Matelassé Mini Bag Black.Thiết kế  rất phù hợp với đôi tay của chị em",
        gia: "41.000.000₫",
    },
    {
        src: "img/sp4.png",
        tenSP: "Giày Thể Thao Gucci",
        moTa: "GG Tennis 1977 606111 HVK20 9766 Form To Phối Màu Size 5.5",
        gia: "14.600.000 đ",
    },
    {
        src: "img/sp5.png",
        tenSP: "Giày Nike",
        moTa: "  Air Force 1 Custom Gucci Low By You White Green Cust [DV3892 900]",
        gia: "3.450.000đ",
    },
    {
        src: "img/sp6.png",
        tenSP: "Đồng Hồ Gucci Technos",
        moTa: "Afnan 9AM là một hình chữ nhật nguyên khối với các góc bo tròn tinh tế.",
        gia: "1.650.000",
    },

    {
        src: "img/sp7.png",
        tenSP: "Gucci G-Timeless",
        moTa: "Đồng Hồ Nữ Gucci G-Timeless Tone silver basic đẹp mãi với thời gian-Case",
        gia: "1.650.000",
    },
    {
        src: "img/sp8.png",
        tenSP: "Đồng Hồ Cặp Nam Nữ Gucci G-Timeless Kính Sapphire-Dây Kim Loại",
        moTa: "Đồng Hồ Cặp Nam Nữ Gucci.",
        gia: "39.000.000đ",
    },

];
var dem = 0;
for (let i = 0; i < arr.length; i++) {
    if (dem % 3 == 0) {
        var row = document.createElement("div");
        row.classList.add("row");
        document.getElementById("product-list").appendChild(row);
    }
    var cot = document.createElement('div');
    cot.classList.add('col-lg-4');
    var theSP = document.createElement('div');
    theSP.classList.add('card');
    theSP.style = 'width: 18rem';
    var anhSP = document.createElement('img');
    anhSP.src = arr[i].src;
    row.appendChild(cot);
    cot.appendChild(theSP);
    theSP.appendChild(anhSP);
    var thanSP = document.createElement('div');
    thanSP.classList.add('card-body');
    theSP.appendChild(thanSP);
    var tenSP = document.createElement('h5');
    tenSP.classList.add('card-title');
    tenSP.textContent = arr[i].tenSP
    thanSP.appendChild(tenSP);
    var moTa = document.createElement('p');
    moTa.classList.add('card-text');
    moTa.textContent = arr[i].moTa;
    thanSP.appendChild(moTa);
    var giaSP =document.createElement('h3');
    giaSP.style.textAlign = 'center';
    giaSP.innerText =arr[i].gia;
    thanSP.appendChild(giaSP);
    var nutThem = document.createElement('button');
    nutThem.classList.add('btn');
    nutThem.classList.add('btn-primary');
    nutThem.innerHTML ='Thêm Vào Giỏ Hàng';
    thanSP.appendChild(nutThem);
    thanSP.style.textAlign = 'center';
    dem++;
}``