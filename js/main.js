alert("Assalomaleykum hurmatli foydalanuvchi \n")
var userName =prompt("ismingizni kiriting");
var quiz=confirm(userName +" " + "Test ishlashga tayyormisiz");
var Test1 =prompt("1-Savol \n Css ni necha xil usulda ulash mumkin ?\n A: 1 \n B: 2 \n C: 3");
var Test2 =prompt("2-Savol \n X o'qi bo'yicha teskariga aylantirish ?\n A: row-reverse \n B: column-rewerse \n C: wrap-reverse ");
var Test3 =prompt("3-Savol \n Flex-direction:column bo'lganida align-items va justifly-content qanday ishlaydi ?\n A:Teskarisiga ishlaydi \n B:Flex-direction:row bo'lgandagi holat bilan bir xil \n C:to'g'ri javob yo'q ");
var Test4 =prompt("4-Savol \n Jadvallar elementlari nechta qismga bo'linadi ?\n A: 1 \n B: 3 \n C: 2 ");
var Test5 =prompt("5-Savol \n Saytlarni boshqa ekranlarga qanday moslashiriladi ?\n A: @input orqali \n B: @include orqali \n C: @media orqali ");
console.log(quiz +"\n"+
    userName + "\n" + 
    "1-Savol uchun Sizning javobingiz:"+ " "+ Test1 + "\n"+"Tog'ri javob: C"+"\n"+
    "2-Savol uchun Sizning javobingiz:"+ " "+ Test2 + "\n"+"Tog'ri javob: A"+"\n"+
    "3-Savol uchun Sizning javobingiz:"+ " "+ Test3 + "\n"+"Tog'ri javob: A"+"\n"+
    "3-Savol uchun Sizning javobingiz:"+ " "+ Test4 + "\n"+"Tog'ri javob: B"+"\n"+
    "4-Savol uchun Sizning javobingiz:"+ " "+ Test5 + "\n"+"Tog'ri javob: C"
    );